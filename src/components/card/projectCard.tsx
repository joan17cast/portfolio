import { useNavigate } from "@tanstack/react-router";
import clsx from "clsx";

interface ProjectCardProps {
  name: string;
  description: string;
  time: string;
  logo: string;
  screenshot: string;
  to: string;
  logoAlt: string;
}

const ProjectCard = ({
  name,
  time,
  logo,
  to,
  logoAlt,
}: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <figure
      onClick={() => {
        void navigate({ to });
      }}
      className={clsx(
        "relative mx-auto min-h-fit w-full transform overflow-hidden rounded-2xl p-4",
        "bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        "cursor-pointer transition-all duration-200 ease-in-out hover:scale-[103%]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-md p-1"
          style={{
            backgroundColor: "white",
          }}
        >
          <img src={logo} alt={logoAlt} className="h-10 w-10 object-contain" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-wrap items-center whitespace-pre text-lg font-medium text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default ProjectCard;
