import { TechCard } from ".";

interface StackItem {
  icon: JSX.Element;
  label: string;
}

interface CompanyDetailCardProps {
  companyName: string;
  otherInformation: string;
  companyIcon: JSX.Element;
  listOfInformation: string[];
  stack?: StackItem[];
}

const CompanyDetailCard = ({
  companyName,
  otherInformation,
  companyIcon,
  listOfInformation,
  stack,
}: CompanyDetailCardProps) => {
  return (
    <article className="flex flex-col space-y-2 border-t border-l border-gray-600 rounded-tl-lg pl-4 pt-2 ">
      <div className="flex flex-wrap items-center gap-4">
        <div
          className="flex h-12 w-12 items-center justify-center  rounded-md p-1"
          style={{
            backgroundColor: "white",
          }}
        >
          <span className="flex h-12 w-12 items-center justify-center text-lg">
            {companyIcon}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{companyName}</h3>
          <h3 className="text-md font-i font-light text-gray-300">
            {otherInformation}
          </h3>
        </div>
      </div>
      <ul className="flex flex-col pl-5 text-gray-200">
        {listOfInformation.map((item) => (
          <li className="list-disc">{item}</li>
        ))}
      </ul>
      {stack && (
        <>
          <h2 className="text-2xl font-semibold text-white">Stack</h2>
          <div className=" w-full gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">   
            {stack.map((item) => (
              <TechCard {...item} />
            ))}
          </div>
        </>
      )}
    </article>
  );
};

export default CompanyDetailCard;
