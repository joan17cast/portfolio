import Navbar from "@/components/layout/navbar";
import { BentoCardContact, BentoCardEducation, BentoCardExperience, BentoCardProjects, BentoCardStack, } from "@/components/bentoGrid";
import { CompanyCard } from "@/components/card";
import { CompanySlider } from "@/components/slider";
import { companyListData, companyListData2 } from "@/utils/staticContent";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle 1000px at top, rgba(166, 166, 163, 0.3), rgba(20,20,20,0.3))",
      }}
      className="relative flex min-h-screen w-full flex-col items-center justify-start gap-1 bg-black px-4  md:px-20"


    >
      <Navbar scrolled={false}/>
      <section className="grid max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 h-full pb-4">
        <section className="col-span-1 flex flex-col justify-start gap-4 md:col-span-2 md:flex-row lg:col-span-1 lg:flex-col">
          <BentoCardExperience name={t("experience")} />
          <BentoCardEducation name={t("education")} />
        </section>
        <div className="col-span-1 grid grid-cols-1 gap-4 md:col-span-2 md:grid-cols-2 ">
          <section className="flex flex-col  justify-start gap-4 h-full">
            <BentoCardContact />
            <BentoCardProjects />
          </section>
          <BentoCardStack />
          <div className="h-full py-6  gap-6 col-span-1 flex w-full  flex-col items-center justify-center overflow-hidden rounded-xl bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] md:col-span-2 self-start ">
            <CompanySlider pauseOnHover className="[--duration:20s]">
              {companyListData.map((company) => (
                <CompanyCard
                  key={company.alt}
                  icon={<img src={company.icon} alt={company.alt} className="h-7 w-20 object-contain"/>}
                  url={company.url}
                />
              ))}
            </CompanySlider>
            <CompanySlider pauseOnHover className="[--duration:20s]" reverse>
              {companyListData2.map((company) => (
                <CompanyCard
                  key={company.alt}
                  icon={<img src={company.icon} alt={company.alt} className="h-7 w-20 object-contain"/>}
                  url={company.url}
                />
              ))}
            </CompanySlider>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[rgba(20,20,20,0.6)]"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[rgba(20,20,20,0.6)]"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
