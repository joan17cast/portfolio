import { icons } from "@/utils/icons";
import clsx from "clsx";

const BentoCard = ({
  name,
  className,
  background,
  icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: React.ReactNode;
  icon: JSX.Element;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={clsx(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-black [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <div className="h-12 w-12 origin-left  text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-neutral-300">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    <div
      className={clsx(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <button className="pointer-events-auto">
        <a href={href}>
          {cta}
          {icons.arrowRight}
        </a>
      </button>
    </div>
    <div className="pointer-events-none absolute inset-0  transition-all duration-300  group-hover:bg-neutral-800/10" />
  </div>
);

export default BentoCard;
