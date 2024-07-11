import { icons } from "@/utils/icons";
import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <div className="flex h-16 w-full flex-row items-center justify-center   bg-transparent p-4 shadow-md">
      <div className="flex w-[1000px] flex-row items-center justify-between gap-4 text-white">
        <Link to="/" className="flex flex-row items-center gap-4 text-xs">
          {icons.home}
          <h1 className="text-lg font-semibold ">Joan Peruchet Castells</h1>
        </Link>
        <div className="font-thin text-gray-300">Español</div>
        <div className="font-thin text-gray-300">English</div>
      </div>
    </div>
  );
};

export default Navbar;
