import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-cover object-cover min-h-screen bg-black p-8 bg-[url('./src/assets/images/background.jpg')] ">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat filter backdrop-blur-2xl bg-black/40 " />
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-3xl font-bold text-white">
          Joan Peruchet Castells
        </h1>
        <p className="text-xl text-gray-600">
          Senior Frontend Developer at Nexiona
        </p>
      </div>
      <div className="relative z-10"></div>
    </div>
  );
};

export default Home;
