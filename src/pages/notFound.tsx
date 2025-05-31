import notFoundImage from "@/assets/images/notFound.svg";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle 1000px at top, rgba(120,119,198,0.3), rgba(20,20,20,0.3))",
      }}
      className="relative flex h-screen w-full flex-col items-center justify-start gap-4 overflow-auto bg-black p-4 pt-14 md:px-20"
    >
      <h1 className="">{t("notFound")}</h1>
      <img src={notFoundImage} className="h-96 w-96" />
    </div>
  );
};
export default NotFound;
