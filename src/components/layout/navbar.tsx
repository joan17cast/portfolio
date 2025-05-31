import profileImage from "@/assets/images/profile.webp";
import { TypingAnimation } from "@/components/animations";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  return (
    <nav className="flex flex-row justify-between items-center w-full max-w-[1200px] p-4">
      <div className="flex w-full max-w-[1200px] gap-4 flex-col sm:flex-row items-center sm:items-start">
        <img
          src={profileImage}
          className="h-16 w-16 rounded-full shadow-md shadow-purple-300/20"
        />
        <div className="cursor-default">
          <TypingAnimation
            className="text-3xl font-bold text-black dark:text-white "
            text="Joan Peruchet Castells"
          />
          <p className="text-lg text-gray-400 ">
            Frontend Team Lead at Cipher Prosegur
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <button
          onClick={() => i18n.changeLanguage('es')}
          className={`transform rounded-md bg-transparent px-2 text-gray-200 transition-transform duration-300 [border:1px_solid_rgba(255,255,255,.1)] hover:scale-110 ${i18n.language === 'es' ? 'font-bold bg-zinc-800' : 'text-zinc-400'}`}
        >
          ES
        </button>
        <button
          onClick={() => i18n.changeLanguage('en')}
          className={`transform rounded-md bg-transparent px-2 text-gray-200 transition-transform duration-300 [border:1px_solid_rgba(255,255,255,.1)] hover:scale-110 ${i18n.language === 'en' ? 'font-bold bg-zinc-800' : 'text-zinc-400'}`}
        >
          EN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
