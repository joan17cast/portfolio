import caparrellaLogo from "@/assets/images/schools/caparrella.webp";
import trempLogo from "@/assets/images/schools/tremp.webp";
import { icons } from "@/utils/icons";
import clsx from "clsx";

import CompanyExperienceCard from "../card/companyExperienceCard";

interface BentoCardExperienceProps {
  name: string;
}
const education = [
  {
    company: "IES Caparrella",
    description: "CFGS - Desarrollo de aplicaciones web",
    time: "2014 - 2016",
    icon: <img src={caparrellaLogo} alt="IES Caparrella" />,
    color: "#FFFFFF",
  },
  {
    company: "INS Tremp",
    description: "CFGM - Sistemas microinformáticos y redes",
    time: "2010 - 2013",
    icon: <img src={trempLogo} alt="INS Tremp" />,

    color: "#FFFFFF",
  },
];

const BentoCardEducation = ({ name }: BentoCardExperienceProps) => (
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
          <div className=" text-gray-300">{icons.book}</div>
          <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            Education
          </h3>
        </div>
      </section>
      <div className="flex flex-col gap-2">
        {education.map((item) => (
          <CompanyExperienceCard {...item} key={item.company} />
        ))}
      </div>
    </div>
  </div>
);

export default BentoCardEducation;
