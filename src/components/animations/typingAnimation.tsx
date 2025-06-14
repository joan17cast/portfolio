import { useEffect, useState } from "react";
import clsx from "clsx";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypingAnimation({
  text,
  duration = 100,
  className,
  onComplete,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
        if (onComplete) onComplete();
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text, onComplete]);

  return (
    <h1 className={clsx("font-display text-left font-bold ", className)}>
      {displayedText ? displayedText : text}
    </h1>
  );
}
