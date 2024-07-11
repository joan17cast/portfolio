import { TechCard } from "@/components/card";
import { Layout } from "@/components/layout";
import { icons } from "@/utils/icons";

const Stack = () => {
  return (
    <Layout>
      <div className="max-w-[1000px] space-y-6">
        <section className="w-full space-y-4">
          <h1 className="text-5xl font-bold text-white">Stack</h1>
          <p className=" text-gray-400">
            Como desarrollador frontend senior, mi objetivo es crear
            experiencias de usuario atractivas, eficientes y accesibles. A lo
            largo de mi carrera, he perfeccionado mis habilidades utilizando una
            variedad de herramientas y tecnologías que me permiten desarrollar
            interfaces robustas y de alto rendimiento.
          </p>
        </section>
        <div className="space-y-4 border-l-2 border-gray-600 pl-4">
          <h3 className="text-xl font-bold text-white">Web Development</h3>
          <div className="flex w-full flex-wrap items-start justify-start gap-4">
            <TechCard icon={icons.stackIcons.nodedotjs} label="Node.js" />
            <TechCard icon={icons.stackIcons.react} label="React" />
            <TechCard icon={icons.stackIcons.typescript} label="TypeScript" />
            <TechCard icon={icons.stackIcons.javascript} label="Javascript" />
            <TechCard icon={icons.stackIcons.git} label="Git" />
            <TechCard icon={icons.stackIcons.zod} label="Zod" />
            <TechCard icon={icons.stackIcons.html5} label="HTML5" />
            <TechCard icon={icons.stackIcons.pnpm} label="pnpm" />
            <TechCard icon={icons.stackIcons.axios} label="Axios" />
            <TechCard icon={icons.stackIcons.leaflet} label="Leaflet" />
            <TechCard icon={icons.stackIcons.mapbox} label="Mapbox" />
            <TechCard icon={icons.stackIcons.chartdotjs} label="React Charts" />
            <TechCard icon={icons.stackIcons.reactquery} label="React Query" />
            <TechCard
              icon={icons.stackIcons.reactRouter}
              label="React Router"
            />
          </div>
          <h3 className="font-regular text-lg text-white">Frameworks</h3>
          <div className="flex w-full flex-wrap items-start justify-start gap-4">
            <TechCard icon={icons.stackIcons.vite} label="Vite" />
            <TechCard icon={icons.stackIcons.nextdotjs} label="Next.js" />
          </div>
          <h3 className="font-regular text-lg text-white">State management</h3>
          <div className="flex w-full flex-wrap items-start justify-start gap-4">
            <TechCard icon={icons.stackIcons.redux} label="Redux" />
            <TechCard icon={icons.stackIcons.zustand} label="Zustand" />
            <TechCard icon={icons.stackIcons.jotai} label="Jotai" />
          </div>
          <h3 className="font-regular text-lg text-white">Testing / QA</h3>
          <div className="flex w-full flex-wrap items-start justify-start gap-4">
            <TechCard icon={icons.stackIcons.playwright} label="Playwright" />
            <TechCard icon={icons.stackIcons.jest} label="Jest" />
            <TechCard icon={icons.stackIcons.sonarqube} label="Sonarqube" />
          </div>
          <h3 className="font-regular text-lg text-white">Styles</h3>
          <div className="flex w-full flex-wrap items-start justify-start gap-4">
            <TechCard
              icon={icons.stackIcons.tailwindcss}
              label="Tailwind CSS"
            />
            <TechCard icon={icons.stackIcons.css3} label="CSS3" />
            <TechCard icon={icons.stackIcons.materialUI} label="Material UI" />
          </div>
        </div>

        <div className="space-y-4 border-l-2 border-gray-600 pl-4">
          <h3 className="text-xl font-semibold text-white">Design</h3>
          <div className="flex w-full flex-row items-start justify-start gap-4">
            <TechCard icon={icons.stackIcons.figma} label="Figma" />
            <TechCard icon={icons.stackIcons.photoshop} label="Photoshop" />
          </div>
        </div>
        <div className="space-y-4 border-l-2 border-gray-600 pl-4">
          <h3 className="text-xl font-semibold text-white">Cloud</h3>
          <div className="flex w-full flex-row items-start justify-start gap-4">
            <TechCard icon={icons.stackIcons.rancher} label="Rancher" />
            <TechCard icon={icons.stackIcons.portainer} label="Portainer" />
          </div>
        </div>
        <div className="space-y-4 border-l-2 border-gray-600 pl-4">
          <h3 className="text-xl font-semibold text-white">
            Mobile Development
          </h3>
          <div className="flex w-full flex-wrap items-start justify-start gap-4">
            <TechCard icon={icons.stackIcons.react} label="React Native" />
            <TechCard icon={icons.stackIcons.flutter} label="Flutter" />
            <TechCard
              icon={icons.stackIcons.androidstudio}
              label="Android studio"
            />
          </div>
        </div>
        <div className="space-y-4 border-l-2 border-gray-600 pl-4">
          <h3 className="text-xl font-semibold text-white">Productivity</h3>
          <div className="flex w-full flex-wrap items-start justify-start gap-4">
            <TechCard icon={icons.stackIcons.gitlab} label="Gitlab" />
            <TechCard icon={icons.stackIcons.github} label="Github" />
            <TechCard icon={icons.stackIcons.linear} label="Linear" />
            <TechCard icon={icons.stackIcons.slack} label="Slack" />
            <TechCard
              icon={icons.stackIcons.visualstudiocode}
              label="Visual Studio Code"
            />
            <TechCard icon={icons.stackIcons.docker} label="Docker" />
            <TechCard icon={icons.stackIcons.notion} label="Notion" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Stack;
