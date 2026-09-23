import githubLogo from "@/assets/images/links/github.png";

import { TechCard } from ".";

interface StackItem {
  icon: JSX.Element;
  label: string;
}

interface ProjectDetailCardProps {
  id?: string;
  name: string;
  otherInformation: string;
  icon: JSX.Element;
  screenshot: string;
  screenshotAlt: string;
  listOfInformation: string[];
  stack?: StackItem[];
  repoUrl: string;
  repoLabel: string;
}

const ProjectDetailCard = ({
  id,
  name,
  otherInformation,
  icon,
  listOfInformation,
  stack,
  repoUrl,
  repoLabel,
}: ProjectDetailCardProps) => {
  return (
    <div className="relative flex w-full flex-row items-start">
      <div className="flex h-full flex-col items-center">
        <div className="mt-10 h-1 w-3 rounded-full bg-slate-400/20 ring-4 ring-slate-100" />
        <div className="h-full w-[3px] bg-gradient-to-b from-slate-100" />
      </div>
      <article
        id={id}
        className="flex w-full flex-col space-y-4 rounded-tr-lg px-4 py-4 shadow-sm"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-md p-1"
              style={{
                backgroundColor: "white",
              }}
            >
              <span className="flex h-12 w-12 items-center justify-center text-lg">
                {icon}
              </span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white sm:text-xl">{name}</h2>
              <h3 className="font-i text-xs font-light text-gray-300 sm:text-base">
                {otherInformation}
              </h3>
            </div>
          </div>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex cursor-pointer flex-row items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-1 text-white ring-1 ring-gray-600"
          >
            <img src={githubLogo} alt="GitHub" className="h-4 w-4 object-contain" />
            {repoLabel}
          </a>
        </div>

        <ul className="flex flex-col pl-5 text-gray-200">
          {listOfInformation.map((item, infoIdx) => (
            <li
              key={infoIdx}
              className="flex flex-row items-start gap-4 list-none"
            >
              <span className="mt-3 h-[2px] w-2 min-w-2 rounded-full bg-slate-200 ring-4 ring-slate-400/20" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {stack && (
          <>
            <h2 className="text-2xl font-semibold text-white">Stack</h2>
            <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
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

export default ProjectDetailCard;
