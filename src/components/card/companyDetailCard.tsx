import { TechCard } from ".";

interface StackItem {
  icon: JSX.Element;
  label: string;
}

interface ListOfPositions {
  position?: string;
  listOfInformation: string[];
}

interface CompanyDetailCardProps {
  id?: string;
  companyName: string;
  otherInformation: string;
  companyIcon: JSX.Element;
  listOfPositions: ListOfPositions[];
  stack?: StackItem[];
}

const CompanyDetailCard = ({
  id,
  companyName,
  otherInformation,
  companyIcon,
  listOfPositions,
  stack,
}: CompanyDetailCardProps) => {
  return (
    <div className="w-full flex flex-row items-start relative">
      <div className="flex flex-col items-center h-full ">
        <div className="h-1 ring-slate-100 w-3 rounded-full ring-4 bg-slate-400/20 mt-10"/>
        <div className="h-full bg-gradient-to-b from-slate-100 w-[3px]  "/>
      </div>
    <article id={id} className="flex flex-col space-y-2 rounded-tr-lg px-4 py-4 shadow-sm w-full">
     
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
          <h2 className="text-lg font-bold text-white sm:text-xl">{companyName}</h2>
          <h3 className="text-xs font-i font-light text-gray-300 sm:text-base">
            {otherInformation}
          </h3>
        </div>
      </div>
      {listOfPositions.map((position, index) => (
        <div key={position.position ?? index}>
          {position?.position && (
            <label className="text-xs font-i font-light text-gray-300 sm:text-base sm:pl-16 pb-4s">
              {position.position}
            </label>
          )}
          <ul className="flex flex-col pl-5 text-gray-200">
            {position.listOfInformation.map((item, infoIdx) => (
              <li
                key={position.position ? `${position.position}-${infoIdx}` : infoIdx}
                className="list-none flex flex-row items-start gap-4 "
              >
                <span className="h-[2px] min-w-2 w-2 ring-4 ring-slate-400/20 bg-slate-200 rounded-full mt-3" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {stack && (
        <>
          <h2 className="text-2xl font-semibold text-white">Stack</h2>
          <div className=" w-full gap-4 grid grid-cols-2  sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
            {stack.map((item) => (
              <TechCard {...item} key={item.label} />
            ))}
          </div>
        </>
      )}
    </article>
    </div>
  );
};

export default CompanyDetailCard;
