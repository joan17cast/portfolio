import { icons } from "@/utils/icons";
import clsx from "clsx";

export default function BentoCardProjects() {
  return (
    <div
      className={clsx(
        "group relative flex h-full flex-col justify-start overflow-hidden rounded-xl",
        "transform-gpu bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="pointer-events-none  flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 ">
        <div className="flex flex-row items-center justify-start gap-4 pb-4">
          <div className=" text-gray-300">{icons.projects}</div>
          <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            Projects
          </h3>
        </div>
        <div className="text-xl text-white">Coming soon...</div>
      </div>
    </div>
  );
}
