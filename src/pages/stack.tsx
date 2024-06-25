import { TechCard } from "@/components/card";
import { icons } from "@/utils/icons";

const Stack = () => {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle 1000px at top, rgba(120,119,198,0.3), rgba(20,20,20,0.3))",
      }}
      className="bg-background relative flex h-screen w-full flex-col items-center justify-start bg-black p-20 "
    >
      <div className="max-w-[1000px]">
        <section className="w-full">
          <h1 className="text-5xl font-bold text-white">Stack</h1>
          <p className=" text-gray-400">
            Como desarrollador frontend senior, mi objetivo es crear
            experiencias de usuario atractivas, eficientes y accesibles. A lo
            largo de mi carrera, he perfeccionado mis habilidades utilizando una
            variedad de herramientas y tecnologías que me permiten desarrollar
            interfaces robustas y de alto rendimiento.
          </p>
        </section>
        <h3 className="text-xl font-semibold text-white">Development</h3>
        <h3 className="text-xl font-semibold text-white">Design</h3>
        <div className="flex w-full flex-row items-start justify-start gap-4">
          <TechCard icon={icons.contacts} label="Figma" />
          <TechCard icon={icons.contacts} label="Figma" />
        </div>
        <h3 className="text-xl font-semibold text-white">Productivity</h3>
      </div>
    </div>
  );
};
export default Stack;
