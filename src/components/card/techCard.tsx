import clsx from "clsx";

interface Item {
  icon: JSX.Element;
  label: string;
}

const TechCard = ({ icon, label }: Item) => {
  return (
    <figure
      className={clsx(
        "min-h-fit min-w-44  transform cursor-pointer overflow-hidden rounded-2xl px-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-col items-center justify-center gap-1 py-4 text-white">
        <div className="flex  items-center justify-center">{icon}</div>
        {label}
      </div>
    </figure>
  );
};

export default TechCard;
