import linakLogo from "@/assets/images/projects/LogoIkeaIdasenLinakCtrl.ico";
import linakScreenshot from "@/assets/images/projects/Ikea-Linak-main-screen.png";
import { ProjectDetailCard } from "@/components/card";
import { Layout } from "@/components/layout";
import { icons } from "@/utils/icons";
import { useTranslation } from "react-i18next";

const LinakController = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="flex w-full max-w-[1200px] flex-col space-y-6">
        <section className="w-full space-y-4">
          <h1 className="text-5xl font-bold text-white">
            {t("projectItems.linak.name")}
          </h1>
        </section>
        <p className="text-justify text-gray-400">
          {t("projectItems.linak.intro")}
        </p>
        <div className="flex flex-col gap-4 pb-4">
          <ProjectDetailCard
            id="linak"
            name={t("projectItems.linak.name")}
            otherInformation={t("projectItems.linak.otherInformation")}
            icon={<img src={linakLogo} alt="LINAK Controller" />}
            screenshot={linakScreenshot}
            screenshotAlt={t("projectItems.linak.screenshotAlt")}
            listOfInformation={[
              t("projectItems.linak.info1"),
              t("projectItems.linak.info2"),
              t("projectItems.linak.info3"),
              t("projectItems.linak.info4"),
              t("projectItems.linak.info5"),
              t("projectItems.linak.info6"),
              t("projectItems.linak.info7"),
              t("projectItems.linak.info8"),
            ]}
            stack={[
              {
                icon: icons.stackIcons.javascript,
                label: t("stack.javascript"),
              },
              { icon: icons.stackIcons.html5, label: t("stack.html5") },
              { icon: icons.stackIcons.nodedotjs, label: t("stack.nodejs") },
              { icon: icons.stackIcons.git, label: t("stack.git") },
              { icon: icons.stackIcons.github, label: t("stack.github") },
            ]}
            repoUrl="https://github.com/joan17cast/linak-controller"
            repoLabel={t("projectItems.linak.github")}
          />
        </div>
      </div>
    </Layout>
  );
};

export default LinakController;
