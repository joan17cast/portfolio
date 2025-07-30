import profileImage from "@/assets/images/profile.webp";
import { TypingAnimation } from "@/components/animations";
import { useTranslation } from "react-i18next";
import { useTypingAnimationStore } from "@/store/typingAnimationStore";
import React from "react";
import { icons } from "@/utils/icons";

const Navbar = ({ scrolled }: { scrolled: boolean }) => {
  const { i18n } = useTranslation();
  const { hasSeenTyping, setHasSeenTyping } = useTypingAnimationStore();

  const handleTypingComplete = () => {
    setHasSeenTyping(true);
  };

  return (
    <nav
      className={`flex  flex-row justify-center items-center w-full  p-4 transition-all duration-300 z-30  ${
        scrolled && "backdrop-blur-md shadow-lg" 
      }`}
      
    >
      <div className="flex w-full max-w-[1200px]">
      <div
        className="group relative  flex w-full max-w-[1200px] gap-4 flex-row sm:flex-row items-start cursor-pointer    "
        onClick={() => {
          window.history.pushState({}, '', '/');
          window.dispatchEvent(new PopStateEvent('popstate'));
        }}
      >
        <div className="sm:hidden text-slate-100 h-full flex items-center justify-center">
          {icons.home}
        </div>
        <div className="absolute left-0 top-0 h-16 w-16 rounded-full bg-gradient-to-r from-rose-400 via-orange-300 to-red-300 opacity-45 blur transition duration-500 group-hover:opacity-70 pointer-events-none hidden sm:flex" />
        <img
          alt="Profile"
          src={profileImage}
          className="h-16 w-16 rounded-full shadow-md shadow-purple-300/20 relative z-10 hidden sm:flex"
        />
        <div className="relative z-10">
          {!hasSeenTyping ? (
            <TypingAnimation
              className="text-xl font-bold  text-white sm:text-3xl"
              text="Joan Peruchet Castells"
              onComplete={handleTypingComplete}
            />
          ) : (
            <h1 className="text-xl font-bold  text-white sm:text-3xl" >
              Joan Peruchet Castells
            </h1>
          )}
          <p className="text-sm text-gray-400 sm:text-lg">
            Frontend Team Lead at Cipher Prosegur
          </p>
        </div>
      </div>
      <div className="flex flex-row items-start sm:items-center gap-2">
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
      </div>
    </nav>
  );
};

export default Navbar;
