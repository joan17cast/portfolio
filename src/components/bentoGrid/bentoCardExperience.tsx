import bonareaLogo from "@/assets/images/companies/bonarea.png";
import clibbLogo from "@/assets/images/companies/clibb.webp";
import nexionaLogo from "@/assets/images/companies/nexiona.webp";
import cipherLogo from "@/assets/images/companies/cipher.webp";
import CompanyExperienceCard from "@/components/card/companyExperienceCard";
import { icons } from "@/utils/icons";
import clsx from "clsx";

interface BentoCardExperienceProps {
  name: string;
}

const workExperience = [
  {
    id: "cipher",
    company: "Cipher Prosegur",
    description: "Frontend Team Lead",
    time: "2024 - Present (Remote)",
    icon: <img src={cipherLogo} alt="Cipher Prosegur" />,
  },
  {
    id: "nexiona",
    company: "Nexiona",
    description: "Senior Frontend Developer",
    time: "2022 - 2024 (Remote)",
    icon: <img src={nexionaLogo} alt="Nexiona" />,
  },
  {
    id: "bonarea",
    company: "BonÀrea Agrupa",
    description: "Junior Frontend Developer",
    time: "2017 - 2022 (Guissona)",
    icon: <img src={bonareaLogo} alt="BonÀrea Agrupa" />,
  },
  {
    id: "clibb",
    company: "Clibb Software Solutions",
    description: "Junior Developer",
    time: "2016 - 2017 (Lleida)",
    icon: <img src={clibbLogo} alt="Clibb Software solutions" />,
  },
];

const BentoCardExperience = ({ name }: BentoCardExperienceProps) => {
  return (
    <div
      key={name}
      className={clsx(
        "h-max lg:h-full xl:h-max flex flex-col justify-start overflow-hidden rounded-xl",
        "bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="  flex flex-col gap-1 px-2 py-4 transition-all duration-300 ">
        <section className="flex flex-row items-center justify-between gap-4 pb-4 px-3">
          <div className="flex flex-row items-center justify-start gap-2">
            <div className=" text-gray-300">{icons.workExperience}</div>
            <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
              {name}
            </h2>
          </div>
          
        </section>
        <div className="flex flex-col gap-2 h-full sm:overflow-y-auto px-2 sm:max-h-72 lg:max-h-80 xl:max-h-full">
          {workExperience.map((item) => (
            <CompanyExperienceCard {...item} key={item.company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BentoCardExperience;
