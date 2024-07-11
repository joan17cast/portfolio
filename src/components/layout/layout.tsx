import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle 1000px at top, rgba(120,119,198,0.3), rgba(20,20,20,0.3))",
      }}
      className="bg-background relative flex h-screen w-full flex-col items-center justify-start overflow-auto bg-black  "
    >
      <Navbar />
      <div className="p-10 overflow-auto w-full flex justify-center">{children}</div>
    </div>
  );
};

export default Layout;
