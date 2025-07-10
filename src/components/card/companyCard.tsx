import clsx from "clsx";

interface CompanyCardProps {
  icon: JSX.Element;
  url: string;
}

const CompanyCard = ({ icon, url }: CompanyCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className={clsx(
        "relative mx-auto min-h-fit min-w-44  transform cursor-pointer overflow-hidden rounded-2xl px-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center justify-center gap-3">
        <div className="flex h-20 w-20 items-center justify-center">{icon}</div>
      </div>
    </a>
  );
};

export default CompanyCard;
