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
        "mx-auto min-h-fit min-w-44  cursor-pointer overflow-hidden rounded-2xl px-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
      )}
    >
      <div className="flex flex-row items-center justify-center gap-3">
        <div className="inline-flex items-center justify-center">
          {icon}
        </div >
      </div>
    </a>
  );
};

export default CompanyCard;
