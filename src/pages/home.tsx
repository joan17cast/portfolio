import profileImage from "@/assets/images/profile.webp";
import { TypingAnimation } from "@/components/animations";
import {
  BentoCardContact,
  BentoCardEducation,
  BentoCardExperience,
  BentoCardProjects,
  BentoCardStack,
} from "@/components/bentoGrid";
import { CompanyCard } from "@/components/card";
import { CompanySlider } from "@/components/slider";
import { companysData } from "@/utils/staticContent";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle 1000px at top, rgba(120,119,198,0.3), rgba(20,20,20,0.3))",
      }}
      className="relative flex h-screen w-full flex-col items-center justify-start gap-4 overflow-auto bg-black p-4 md:px-20 pt-14"
    >
      <div className="flex  w-full max-w-[1200px] gap-4 ">
        <img
          src={profileImage}
          className="h-24 w-24 rounded-full shadow-md shadow-purple-300/20"
        />
        <div>
          <TypingAnimation
            className="text-3xl font-bold text-black dark:text-white"
            text="Joan Peruchet Castells"
          />
          <p className="text-lg text-gray-400">
            Senior Frontend Developer at Nexiona
          </p>
        </div>
      </div>
      <section className="grid max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <section className="col-span-1 flex flex-col justify-start gap-4 md:col-span-2 md:flex-row lg:col-span-1 lg:flex-col">
          <BentoCardExperience name="Experience" />
          <BentoCardEducation name="Experience" />
        </section>
        <div className="col-span-1 grid grid-cols-1 gap-4 md:col-span-2 md:grid-cols-2">
          <section className="flex flex-col  justify-start gap-4">
            <BentoCardContact />
            <BentoCardProjects />
          </section>
          <BentoCardStack />
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
            <CompanySlider pauseOnHover className="[--duration:20s]" reverse>
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
      </section>
    </div>
  );
};
export default Home;
