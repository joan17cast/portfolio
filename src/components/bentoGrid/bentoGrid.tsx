import { ReactNode } from "react";
import clsx from "clsx";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "grid w-full  grid-cols-3 gap-4 max-h-96" ,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default BentoGrid;
