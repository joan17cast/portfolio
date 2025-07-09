import githubLogo from "@/assets/images/links/github.png";
import gmailLogo from "@/assets/images/links/gmail.png";
import linkedinLogo from "@/assets/images/links/linkedin.png";
import cvEsPDF from "@/assets/pdf/CV_Joan_Peruchet_ES_com.pdf";
import { icons } from "@/utils/icons";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

export default function BentoCardProjects() {
  const { t } = useTranslation();
  return (
    <div
      className={clsx(
        " flex min-h-32 flex-col justify-start overflow-hidden rounded-xl",
        "transform-gpu bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="  flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 ">
        <div className="flex flex-row items-center justify-between gap-4 pb-4">
          <div className="flex flex-row gap-2">
            <div className=" text-gray-300">{icons.contacts}</div>
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
              {t("contact")}
            </h3>
          </div>
          <div className="group relative cursor-pointer ">
            <div className="absolute -inset-1 cursor-pointer rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-45 blur transition duration-500 group-hover:opacity-70" />
            <a
              href={cvEsPDF}
              download={"CV_Joan_Peruchet_ES_com.pdf"}
              className="relative flex cursor-pointer flex-row items-center justify-center gap-2  rounded-lg bg-gray-900 px-4 py-1 text-white ring-1 ring-gray-600"
            >
              <div className="text-xs">{icons.download}</div>
              CV
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <a
            className="transform cursor-pointer transition-transform duration-300 hover:scale-110"
            target="_blank"
            href="https://www.linkedin.com/in/joan-peruchet-144b5759/"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5 min-w-5 object-contain" />
          </a>
          <a
            className="transform cursor-pointer transition-transform duration-300 hover:scale-110"
            target="_blank"
            href="https://github.com/joan17cast"
          >
            <img src={githubLogo} alt="GitHub" className="w-5 min-w-5 h-5 object-contain" />
          </a>
          <div className="flex  flex-row items-center justify-start gap-2 rounded-md px-2 ring-1 ring-gray-700">
            <a
              className="h-5 w-5 transform cursor-pointer transition-transform duration-300 hover:scale-110 "
              href="mailto: joan17cast@gmail.com"
            >
              <img src={gmailLogo} alt="Gmail" />
            </a>
            <span className="text-white text-sm">joan17cast@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
