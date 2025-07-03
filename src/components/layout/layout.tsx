import Navbar from "./navbar";
import React, { useLayoutEffect, useRef, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  scrollable?: boolean;
}

const Layout = ({ children }: LayoutProps) => {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const ref = scrollableRef.current;
    if (!ref) return;
    const handleScroll = () => {
      setScrolled(ref.scrollTop > 10);
    };
    ref.addEventListener("scroll", handleScroll);
    return () => {
      ref.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    ref={scrollableRef}
      style={{
        backgroundImage:
          "radial-gradient(circle 1000px at top, rgba(120,119,198,0.3), rgba(20,20,20,0.3))",
      }}
      className="relative flex h-screen w-full flex-col items-center justify-start gap-4 overflow-auto bg-black px-4 md:px-20 "
    >
      <div className="sticky top-0 flex w-full justify-center items-center z-40 ">
        <Navbar scrolled={ scrolled} />
      </div>
      <div
        
        className="p-10  w-full flex  justify-center relative"
        style={{ flex: 1, height: "100%", width: "100%" }}
      >
        
        {children}
      </div>
    </div>
  );
};

export default Layout;
