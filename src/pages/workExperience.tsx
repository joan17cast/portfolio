import { CompanySlider } from "@/components/slider";

const WorkExperience = () => {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle 1000px at top, rgba(120,119,198,0.3), rgba(20,20,20,0.3))",
      }}
      className="bg-background relative flex h-screen w-full flex-col items-center justify-center bg-black p-20 "
    >
      <CompanySlider />
    </div>
  );
};
export default WorkExperience;
