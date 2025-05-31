import bonareaLogo from "@/assets/images/companies/bonarea.png";
import clibbLogo from "@/assets/images/companies/clibb.webp";
import nexionaLogo from "@/assets/images/companies/nexiona.png";
import cipherLogo from "@/assets/images/companies/cipher.png";
import { CompanyCard, CompanyDetailCard } from "@/components/card";
import { Layout } from "@/components/layout";
import { CompanySlider } from "@/components/slider";
import { icons } from "@/utils/icons";
import { companysData } from "@/utils/staticContent";

const WorkExperience = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full max-w-[1000px] space-y-6 ">
        <section className="w-full space-y-4">
          <h1 className="text-5xl font-bold text-white">Work experience</h1>
          
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
            companyName={"Cipher - Cibersecurity"}
            otherInformation={
              "Frontend team lead, 2024 - actual (Remoto)"
            }
            companyIcon={<img src={cipherLogo} alt="Nexiona" />}
            listOfInformation={[
              "Participación en el desarrollo de una nueva plataforma de ciberseguridad (xMDR)",
              "Participación activa en la librería de componentes (Storybook)",
              "Onboarding de nuevos compañeros (Pair programming)",
              "Participación en decisiones técnicas y de arquitectura del proyecto.",
              "Onboarding de nuevos compañeros (Pair programming).",
              "Testing con Jest y Vitest.",
              "Experiencia trabajando con metodología Scrum / AGILE",
              "Administracion del tablero, tareas y equipo",
            ]}
            stack={[
              { icon: icons.stackIcons.nextdotjs, label: "Next.js" },
              { icon: icons.stackIcons.vite, label: "RsPack" },
              { icon: icons.stackIcons.zod, label: "Zod" },
              { icon: icons.stackIcons.react, label: "React" },
              { icon: icons.stackIcons.typescript, label: "TypeScript" },
              { icon: icons.stackIcons.git, label: "Git" },
              { icon: icons.stackIcons.zustand, label: "Zustand" },
              { icon: icons.stackIcons.tailwindcss, label: "tailwindcss" },
              { icon: icons.stackIcons.reactquery, label: "React Query" },
              { icon: icons.stackIcons.figma, label: "Figma" },
              { icon: icons.stackIcons.jest, label: "Jest" },
              { icon: icons.stackIcons.reactRouter, label: "React router" },
            ]}
          />
          <CompanyDetailCard
            companyName={"Nexiona IOT Consultan Company"}
            otherInformation={
              "Senior Frontend developer, 2022 - actual (Remoto)"
            }
            companyIcon={<img src={nexionaLogo} alt="Nexiona" />}
            listOfInformation={[
              "Participación en 6 proyectos web para clientes. (Fresenius, TRG, RDT, Damm, Grifols y Puig).",
              "Creación de la librería de componentes Miimetiq UI.",
              "Diseño de las aplicaciones web con Figma.",
              "Implementación de test E2E con Playwright.",
              "Onboarding de nuevos compañeros (Pair programming).",
              "Participación en las reuniones con los clientes.",
              "Experiencia trabajando con metodología AGILE.",
              "Participación en el proceso de selección de nuevos empleados.",
            ]}
            stack={[
              { icon: icons.stackIcons.nextdotjs, label: "Next.js" },
              { icon: icons.stackIcons.vite, label: "Vite" },
              { icon: icons.stackIcons.react, label: "React" },
              { icon: icons.stackIcons.typescript, label: "TypeScript" },
              { icon: icons.stackIcons.git, label: "Git" },
              { icon: icons.stackIcons.redux, label: "Redux" },
              { icon: icons.stackIcons.zustand, label: "Zustand" },
              { icon: icons.stackIcons.tailwindcss, label: "tailwindcss" },
              { icon: icons.stackIcons.reactquery, label: "React Query" },
              { icon: icons.stackIcons.playwright, label: "Playwright" },
              { icon: icons.stackIcons.figma, label: "Figma" },
            ]}
          />
          <CompanyDetailCard
            companyName={"BonÀrea Agrupa"}
            otherInformation={
              "Junior Frontend developer, 2017 - 2022 (Guissona)"
            }
            companyIcon={<img src={bonareaLogo} alt="BonÀrea Agrupa" />}
            listOfInformation={[
              "Creación y mantenimiento de un back office (React JS)",
              "Creación y mantenimiento de un CRM dedicado a Atención al cliente (React JS)",
              "Creación y mantenimiento de mas de 6 aplicaciones (React Native / NFC / BC/QR scan / Redsys)",
              "Creación y mantenimiento de mas de 2 aplicaciones (Flutter)",
              "Onboarding de nuevos compañeros",
            ]}
            stack={[
              { icon: icons.stackIcons.react, label: "React" },
              { icon: icons.stackIcons.react, label: "React Native" },
              { icon: icons.stackIcons.flutter, label: "Flutter" },
              { icon: icons.stackIcons.javascript, label: "Javascript" },
              { icon: icons.stackIcons.git, label: "Git" },
              { icon: icons.stackIcons.sonarqube, label: "sonarQube" },
              { icon: icons.stackIcons.materialUI, label: "Material UI" },
              { icon: icons.stackIcons.css3, label: "CSS 3" },
              { icon: icons.stackIcons.figma, label: "Figma" },
              { icon: icons.stackIcons.reactRouter, label: "React router" },
            ]}
          />
          <CompanyDetailCard
            companyName={"Clibb"}
            otherInformation={"Junior developer, 2016 - 2017 (Lleida)"}
            companyIcon={<img src={clibbLogo} alt="Clibb" />}
            listOfInformation={[
              "Retail application for an external company",
              "SISS for Captio ( C# )",
              "QA Web para JTI y Trota ( C# )",
            ]}
          />
        </div>
      </div>
    </Layout>
  );
};
export default WorkExperience;
