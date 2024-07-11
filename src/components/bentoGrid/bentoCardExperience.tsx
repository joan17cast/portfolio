import bonareaLogo from "@/assets/images/companies/bonarea.png";
import clibbLogo from "@/assets/images/companies/clibb.webp";
import nexionaLogo from "@/assets/images/companies/nexiona.png";
import CompanyExperienceCard from "@/components/card/companyExperienceCard";
import { icons } from "@/utils/icons";
import { useNavigate } from "@tanstack/react-router";
import clsx from "clsx";

interface BentoCardExperienceProps {
  name: string;
}

const workExperience = [
  {
    company: "Nexiona",
    description: "Senior Frontend Developer",
    time: "2022 - Present (Remote)",
    icon: <img src={nexionaLogo} alt="Nexiona" />,
  },
  {
    company: "BonÀrea Agrupa",
    description: "Junior Frontend Developer",
    time: "2017 - 2022 (Guissona)",
    icon: <img src={bonareaLogo} alt="BonÀrea Agrupa" />,
  },
  {
    company: "Clibb Software solutions",
    description: "Junior developer",
    time: "2016 - 2017 (Lleida)",
    icon: <img src={clibbLogo} alt="Clibb Software solutions" />,
  },
];

const BentoCardExperience = ({ name }: BentoCardExperienceProps) => {
  const navigate = useNavigate();
  return (
    <div
      key={name}
      className={clsx(
        "group relative  flex flex-col justify-start overflow-hidden rounded-xl",
        "transform-gpu bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="  flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 ">
        <section className="flex flex-row items-center justify-between gap-4 pb-4">
          <div className="flex flex-row items-center justify-start gap-2">
            <div className=" text-gray-300">{icons.workExperience}</div>
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
              {name}
            </h3>
          </div>
          <button
            className="transform rounded-md bg-transparent px-2 text-gray-200 transition-transform duration-300 [border:1px_solid_rgba(255,255,255,.1)] hover:scale-110"
            onClick={() => navigate({ to: "/work-experience" })}
          >
            More info
          </button>
        </section>
        <div className="flex flex-col gap-2">
          {workExperience.map((item) => (
            <CompanyExperienceCard {...item} key={item.company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BentoCardExperience;
