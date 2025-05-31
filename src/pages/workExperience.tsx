import bonareaLogo from "@/assets/images/companies/bonarea.png";
import clibbLogo from "@/assets/images/companies/clibb.webp";
import nexionaLogo from "@/assets/images/companies/nexiona.png";
import cipherLogo from "@/assets/images/companies/cipher.png";
import { CompanyCard, CompanyDetailCard } from "@/components/card";
import { Layout } from "@/components/layout";
import { CompanySlider } from "@/components/slider";
import { icons } from "@/utils/icons";
import { companysData } from "@/utils/staticContent";
import { useTranslation } from "react-i18next";

const WorkExperience = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="flex flex-col w-full max-w-[1000px] space-y-6 ">
        <section className="w-full space-y-4">
          <h1 className="text-5xl font-bold text-white">{t("workExperience.title")}</h1>
        </section>
        <div className="flex  w-full max-w-[1000px] gap-4 ">
          <div className="relative col-span-1 flex w-full transform-gpu flex-col items-center justify-center overflow-hidden rounded-xl bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] md:col-span-2 ">
            <CompanySlider pauseOnHover className="[--duration:20s]">
              {companysData.map((company) => (
                <CompanyCard
                  key={company.alt}
                  icon={<img src={company.icon} alt={company.alt} />}
                  url={company.url}
                />
              ))}
            </CompanySlider>
            <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[rgba(20,20,20,0.6)]"></div>
            <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[rgba(20,20,20,0.6)]"></div>
          </div>
        </div>
        <div className="flex flex-col divide-y gap-4 pb-4">
          <CompanyDetailCard
            companyName={t("workExperience.cipher.companyName")}
            otherInformation={t("workExperience.cipher.otherInformation")}
            companyIcon={<img src={cipherLogo} alt="Nexiona" />}
            listOfInformation={[
              t("workExperience.cipher.info1"),
              t("workExperience.cipher.info2"),
              t("workExperience.cipher.info3"),
              t("workExperience.cipher.info4"),
              t("workExperience.cipher.info5"),
              t("workExperience.cipher.info6"),
              t("workExperience.cipher.info7"),
              t("workExperience.cipher.info8"),
            ]}
            stack={[
              { icon: icons.stackIcons.nextdotjs, label: t("stack.nextjs") },
              { icon: icons.stackIcons.vite, label: t("stack.vite") },
              { icon: icons.stackIcons.zod, label: t("stack.zod") },
              { icon: icons.stackIcons.react, label: t("stack.react") },
              { icon: icons.stackIcons.typescript, label: t("stack.typescript") },
              { icon: icons.stackIcons.git, label: t("stack.git") },
              { icon: icons.stackIcons.zustand, label: t("stack.zustand") },
              { icon: icons.stackIcons.tailwindcss, label: t("stack.tailwindcss") },
              { icon: icons.stackIcons.reactquery, label: t("stack.reactQuery") },
              { icon: icons.stackIcons.figma, label: t("stack.figma") },
              { icon: icons.stackIcons.jest, label: t("stack.jest") },
              { icon: icons.stackIcons.reactRouter, label: t("stack.reactRouter") },
            ]}
          />
          <CompanyDetailCard
            companyName={t("workExperience.nexiona.companyName")}
            otherInformation={t("workExperience.nexiona.otherInformation")}
            companyIcon={<img src={nexionaLogo} alt="Nexiona" />}
            listOfInformation={[
              t("workExperience.nexiona.info1"),
              t("workExperience.nexiona.info2"),
              t("workExperience.nexiona.info3"),
              t("workExperience.nexiona.info4"),
              t("workExperience.nexiona.info5"),
              t("workExperience.nexiona.info6"),
              t("workExperience.nexiona.info7"),
              t("workExperience.nexiona.info8"),
            ]}
            stack={[
              { icon: icons.stackIcons.nextdotjs, label: t("stack.nextjs") },
              { icon: icons.stackIcons.vite, label: t("stack.vite") },
              { icon: icons.stackIcons.react, label: t("stack.react") },
              { icon: icons.stackIcons.typescript, label: t("stack.typescript") },
              { icon: icons.stackIcons.git, label: t("stack.git") },
              { icon: icons.stackIcons.redux, label: t("stack.redux") },
              { icon: icons.stackIcons.zustand, label: t("stack.zustand") },
              { icon: icons.stackIcons.tailwindcss, label: t("stack.tailwindcss") },
              { icon: icons.stackIcons.reactquery, label: t("stack.reactQuery") },
              { icon: icons.stackIcons.playwright, label: t("stack.playwright") },
              { icon: icons.stackIcons.figma, label: t("stack.figma") },
            ]}
          />
          <CompanyDetailCard
            companyName={t("workExperience.bonarea.companyName")}
            otherInformation={t("workExperience.bonarea.otherInformation")}
            companyIcon={<img src={bonareaLogo} alt="BonÀrea Agrupa" />}
            listOfInformation={[
              t("workExperience.bonarea.info1"),
              t("workExperience.bonarea.info2"),
              t("workExperience.bonarea.info3"),
              t("workExperience.bonarea.info4"),
              t("workExperience.bonarea.info5"),
            ]}
            stack={[
              { icon: icons.stackIcons.react, label: t("stack.react") },
              { icon: icons.stackIcons.react, label: t("stack.reactNative") },
              { icon: icons.stackIcons.flutter, label: t("stack.flutter") },
              { icon: icons.stackIcons.javascript, label: t("stack.javascript") },
              { icon: icons.stackIcons.git, label: t("stack.git") },
              { icon: icons.stackIcons.sonarqube, label: t("stack.sonarqube") },
              { icon: icons.stackIcons.materialUI, label: t("stack.materialUI") },
              { icon: icons.stackIcons.css3, label: t("stack.css3") },
              { icon: icons.stackIcons.figma, label: t("stack.figma") },
              { icon: icons.stackIcons.reactRouter, label: t("stack.reactRouter") },
            ]}
          />
          <CompanyDetailCard
            companyName={t("workExperience.clibb.companyName")}
            otherInformation={t("workExperience.clibb.otherInformation")}
            companyIcon={<img src={clibbLogo} alt="Clibb" />}
            listOfInformation={[
              t("workExperience.clibb.info1"),
              t("workExperience.clibb.info2"),
              t("workExperience.clibb.info3"),
            ]}
          />
        </div>
      </div>
    </Layout>
  );
};
export default WorkExperience;
