import clsx from "clsx";
import { useNavigate } from "@tanstack/react-router";

interface CompanyExperienceCardProps {
  company: string;
  description: string;
  icon: JSX.Element;
  time: string;
  id?: string; // Optional id for redirection
}

const CompanyExperienceCard = ({ company, description, icon, time, id }: CompanyExperienceCardProps) => {
  const navigate = useNavigate();
  // Handle card click to redirect if id is provided
  const handleClick = () => {
    if (id) {
      void navigate({ to: "/work-experience", search: {}, hash: id });
    }
  };

  return (
    <figure
      className={clsx(
        "relative mx-auto min-h-fit w-full  transform cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
      onClick={handleClick}
      style={id ? { cursor: "pointer" } : {}}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center  rounded-md p-1"
          style={{
            backgroundColor: "white",
          }}
        >
          <span className="flex h-12 w-12 items-center justify-center text-lg">
            {icon}
          </span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-wrap items-center whitespace-pre text-lg font-medium text-white ">
            <span className="text-sm sm:text-lg">{company}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export default CompanyExperienceCard;
