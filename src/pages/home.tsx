import bonareaImg from "@/assets/images/brands/bonarea.png";
import dammImg from "@/assets/images/brands/damm.png";
import freseniusImg from "@/assets/images/brands/fresenius.png";
import grifolsImg from "@/assets/images/brands/grifols.png";
import puigImg from "@/assets/images/brands/puig.png";
import rdtImg from "@/assets/images/brands/rdt.png";
import trgImg from "@/assets/images/brands/trg.png";
import profileImage from "@/assets/images/profile.webp";
import { TypingAnimation } from "@/components/animations";
import {
  BentoCardContact,
  BentoCardExperience,
  BentoCardProjects,
  BentoCardStack,
} from "@/components/bentoGrid";
import { CompanyCard } from "@/components/card";
import { CompanySlider } from "@/components/slider";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle 1000px at top, rgba(120,119,198,0.3), rgba(20,20,20,0.3))",
      }}
      className="bg-background relative flex h-screen w-full flex-col items-center justify-center gap-4 bg-black p-20"
    >
      <div className="mt-20 flex gap-4">
        <img
          src={profileImage}
          className="mx-auto h-24 w-24 rounded-full shadow-md shadow-purple-300/20"
        />
        <div>
          <TypingAnimation
            className="text-3xl font-bold text-black dark:text-white"
            text="Joan Peruchet Castells"
          />

          <p className="text-xl text-gray-400">
            Senior Frontend Developer at Nexiona
          </p>
        </div>
      </div>
      <section className="grid max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <BentoCardExperience name="Experience" />
        <section className="flex flex-col  justify-start gap-4">
          <BentoCardContact />
          <BentoCardProjects />
        </section>
        <BentoCardStack />
        <div className="relative col-span-1 flex min-h-28 w-full  transform-gpu flex-col items-center justify-center gap-4 overflow-hidden rounded-xl bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] md:col-span-2 lg:col-span-3">
          <CompanySlider pauseOnHover className="[--duration:20s]">
            <CompanyCard icon={<img src={grifolsImg} alt="Grifols" />} />
            <CompanyCard icon={<img src={rdtImg} alt="RDT" />} />
            <CompanyCard icon={<img src={dammImg} alt="Damm" />} />
            <CompanyCard icon={<img src={bonareaImg} alt="BonÀrea" />} />
            <CompanyCard icon={<img src={freseniusImg} alt="Fresenius" />} />
            <CompanyCard icon={<img src={trgImg} alt="TRG" />} />
            <CompanyCard icon={<img src={puigImg} alt="Puig" />} />
          </CompanySlider>
          <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[rgba(20,20,20,0.6)]"></div>
          <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[rgba(20,20,20,0.6)]"></div>
        </div>
      </section>
    </div>
  );
};
export default Home;
