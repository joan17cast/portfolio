import { TechCard } from "@/components/card";
import { Layout } from "@/components/layout";
import { icons } from "@/utils/icons";
import { useTranslation } from "react-i18next";

const Stack = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="max-w-[1000px] space-y-6">
        <section className="w-full space-y-4">
          <h1 className="text-5xl font-bold text-white">{t("stack.title")}</h1>
          <p className=" text-gray-400">{t("stack.intro")}</p>
        </section>
        <div className="space-y-4 border-l-2 border-gray-600 pl-4">
          <h3 className="text-xl font-bold text-white">
            {t("stack.webDevelopment")}
          </h3>
          <div className="flex w-full flex-wrap items-start justify-start gap-4">
            <TechCard
              icon={icons.stackIcons.nodedotjs}
              label={t("stack.nodejs")}
            />
            <TechCard icon={icons.stackIcons.react} label={t("stack.react")} />
            <TechCard
              icon={icons.stackIcons.typescript}
              label={t("stack.typescript")}
            />
            <TechCard
              icon={icons.stackIcons.javascript}
              label={t("stack.javascript")}
            />
            <TechCard icon={icons.stackIcons.git} label={t("stack.git")} />
            <TechCard icon={icons.stackIcons.zod} label={t("stack.zod")} />
            <TechCard icon={icons.stackIcons.html5} label={t("stack.html5")} />
            <TechCard icon={icons.stackIcons.pnpm} label={t("stack.pnpm")} />
            <TechCard icon={icons.stackIcons.axios} label={t("stack.axios")} />
            <TechCard icon={icons.stackIcons.leaflet} label={t("stack.leaflet")} />
            <TechCard icon={icons.stackIcons.mapbox} label={t("stack.mapbox")} />
            <TechCard
              icon={icons.stackIcons.chartdotjs}
              label={t("stack.reactCharts")}
            />
            <TechCard
              icon={icons.stackIcons.reactquery}
              label={t("stack.reactQuery")}
            />
            <TechCard
              icon={icons.stackIcons.reactRouter}
              label={t("stack.reactRouter")}
            />
          </div>
          <h3 className="font-regular text-lg text-white">
            {t("stack.frameworks")}
          </h3>
          <div className="flex w-full flex-wrap items-start justify-start gap-4">
            <TechCard icon={icons.stackIcons.vite} label={t("stack.vite")} />
            <TechCard icon={icons.stackIcons.nextdotjs} label={t("stack.nextjs")} />
          </div>
          <h3 className="font-regular text-lg text-white">
            {t("stack.stateManagement")}
          </h3>
          <div className="flex w-full flex-wrap items-start justify-start gap-4">
            <TechCard icon={icons.stackIcons.redux} label={t("stack.redux")} />
            <TechCard icon={icons.stackIcons.zustand} label={t("stack.zustand")} />
            <TechCard icon={icons.stackIcons.jotai} label={t("stack.jotai")} />
          </div>
          <h3 className="font-regular text-lg text-white">
            {t("stack.testingQA")}
          </h3>
          <div className="flex w-full flex-wrap items-start justify-start gap-4">
            <TechCard
              icon={icons.stackIcons.playwright}
              label={t("stack.playwright")}
            />
            <TechCard icon={icons.stackIcons.jest} label={t("stack.jest")} />
            <TechCard
              icon={icons.stackIcons.sonarqube}
              label={t("stack.sonarqube")}
            />
          </div>
          <h3 className="font-regular text-lg text-white">{t("stack.styles")}</h3>
          <div className="flex w-full flex-wrap items-start justify-start gap-4">
            <TechCard
              icon={icons.stackIcons.tailwindcss}
              label={t("stack.tailwindcss")}
            />
            <TechCard icon={icons.stackIcons.css3} label={t("stack.css3")} />
            <TechCard
              icon={icons.stackIcons.materialUI}
              label={t("stack.materialUI")}
            />
          </div>
        </div>

        <div className="space-y-4 border-l-2 border-gray-600 pl-4">
          <h3 className="text-xl font-semibold text-white">
            {t("stack.design")}
          </h3>
          <div className="flex w-full flex-row items-start justify-start gap-4">
            <TechCard icon={icons.stackIcons.figma} label={t("stack.figma")} />
            <TechCard
              icon={icons.stackIcons.photoshop}
              label={t("stack.photoshop")}
            />
          </div>
        </div>
        <div className="space-y-4 border-l-2 border-gray-600 pl-4">
          <h3 className="text-xl font-semibold text-white">
            {t("stack.cloud")}
          </h3>
          <div className="flex w-full flex-row items-start justify-start gap-4">
            <TechCard icon={icons.stackIcons.rancher} label={t("stack.rancher")} />
            <TechCard icon={icons.stackIcons.portainer} label={t("stack.portainer")} />
          </div>
        </div>
        <div className="space-y-4 border-l-2 border-gray-600 pl-4">
          <h3 className="text-xl font-semibold text-white">
            {t("stack.mobileDevelopment")}
          </h3>
          <div className="flex w-full flex-wrap items-start justify-start gap-4">
            <TechCard
              icon={icons.stackIcons.react}
              label={t("stack.reactNative")}
            />
            <TechCard icon={icons.stackIcons.flutter} label={t("stack.flutter")} />
            <TechCard
              icon={icons.stackIcons.androidstudio}
              label={t("stack.androidStudio")}
            />
          </div>
        </div>
        <div className="space-y-4 border-l-2 border-gray-600 pl-4">
          <h3 className="text-xl font-semibold text-white">
            {t("stack.productivity")}
          </h3>
          <div className="flex w-full flex-wrap items-start justify-start gap-4">
            <TechCard icon={icons.stackIcons.gitlab} label={t("stack.gitlab")} />
            <TechCard icon={icons.stackIcons.github} label={t("stack.github")} />
            <TechCard icon={icons.stackIcons.linear} label={t("stack.linear")} />
            <TechCard icon={icons.stackIcons.slack} label={t("stack.slack")} />
            <TechCard
              icon={icons.stackIcons.visualstudiocode}
              label={t("stack.visualStudioCode")}
            />
            <TechCard icon={icons.stackIcons.docker} label={t("stack.docker")} />
            <TechCard icon={icons.stackIcons.notion} label={t("stack.notion")} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Stack;
