import bonareaLogo from "@/assets/images/companies/bonarea.png";
import clibbLogo from "@/assets/images/companies/clibb.webp";
import nexionaLogo from "@/assets/images/companies/nexiona.webp";
import cipherLogo from "@/assets/images/companies/cipher.webp";
import { CompanyDetailCard } from "@/components/card";
import { Layout } from "@/components/layout";
import { icons } from "@/utils/icons";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const WorkExperience = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <Layout>
      <div className="flex flex-col w-full max-w-[1200px] space-y-6 ">
        <section className="w-full space-y-4">
          <h1 className="text-5xl font-bold text-white">{t("workExperience.title")}</h1>
        </section>
        <p className="text-gray-400 text-justify ">
          {t("workExperience.intro")}
        </p>
        <div className="flex flex-col gap-4 pb-4">
          <CompanyDetailCard
            id="cipher"
            companyName={t("workExperience.cipher.companyName")}
            otherInformation={t("workExperience.cipher.otherInformation")}
            companyIcon={<img src={cipherLogo} alt="Cipher" />}
            listOfPositions={[
              {
                listOfInformation: [
                  t("workExperience.cipher.info1"),
                  t("workExperience.cipher.info2"),
                  t("workExperience.cipher.info3"),
                  t("workExperience.cipher.info4"),
                  t("workExperience.cipher.info10"),
                ]
              },
              {
                position: t("workExperience.cipher.position2"),
                listOfInformation: [
                  t("workExperience.cipher.info5"),
                  t("workExperience.cipher.info6"),
                  t("workExperience.cipher.info7"),
                  t("workExperience.cipher.info8"),
                  t("workExperience.cipher.info9"),
                ]
              }
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
            id="nexiona"
            companyName={t("workExperience.nexiona.companyName")}
            otherInformation={t("workExperience.nexiona.otherInformation")}
            companyIcon={<img src={nexionaLogo} alt="Nexiona" />}
            listOfPositions={[{listOfInformation:[
              t("workExperience.nexiona.info1"),
              t("workExperience.nexiona.info2"),
              t("workExperience.nexiona.info3"),
              t("workExperience.nexiona.info4"),
              t("workExperience.nexiona.info5"),
              t("workExperience.nexiona.info6"),
              t("workExperience.nexiona.info7"),
              t("workExperience.nexiona.info8"),
            ]}]}
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
            id="bonarea"
            companyName={t("workExperience.bonarea.companyName")}
            otherInformation={t("workExperience.bonarea.otherInformation")}
            companyIcon={<img src={bonareaLogo} alt="BonÀrea Agrupa" />}
            listOfPositions={[{listOfInformation:[
              t("workExperience.bonarea.info1"),
              t("workExperience.bonarea.info2"),
              t("workExperience.bonarea.info3"),
              t("workExperience.bonarea.info4"),
              t("workExperience.bonarea.info5"),
              t("workExperience.bonarea.info6"),
              t("workExperience.bonarea.info7"),
            ]}]}
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
            id="clibb"
            companyName={t("workExperience.clibb.companyName")}
            otherInformation={t("workExperience.clibb.otherInformation")}
            companyIcon={<img src={clibbLogo} alt="Clibb" />}
            listOfPositions={[{listOfInformation:[
              t("workExperience.clibb.info1"),
              t("workExperience.clibb.info2"),
              t("workExperience.clibb.info3"),
            ]}]}
          />
        </div>
      </div>
    </Layout>
  );
};
export default WorkExperience;
