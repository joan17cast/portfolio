import clsx from "clsx";

interface TechCardProps {
  icon: JSX.Element;
  label: string;
}

const TechCard = ({ icon, label }: TechCardProps) => {
  return (
    <figure
      className={clsx(
        "min-h-fit cursor-default overflow-hidden rounded-2xl px-2",
        "bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-col items-center justify-center gap-1 py-2 text-white text-sm">
        <div className="flex  items-center justify-center ">{icon}</div>
        {label}
      </div>
    </figure>
  );
};

export default TechCard;
