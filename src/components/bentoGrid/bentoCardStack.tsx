import { iconStack } from "@/utils/staticContent";
import { useNavigate } from "@tanstack/react-router";
import clsx from "clsx";

import { icons } from "@/utils/icons";
import OrbitingCircles from "../animations/orbitingCircles";

export default function BentoCardStack() {
  const navigate = useNavigate();

  const renderedIcons = (iconStack as Array<keyof typeof icons.stackIcons>).map((slug) => icons.stackIcons[slug]);

  const radii = [50, 90, 130, 170];
  const iconDistribution = [
    4,
    6,
    8,
    renderedIcons ? renderedIcons.length - 18 : 0,
  ];
  const cumulativeIconDistribution = iconDistribution.reduce(
    (acc: number[], current, index) => {
      if (index === 0) {
        acc.push(current);
      } else {
        const lastIndex = acc[acc.length - 1];
        if (lastIndex !== undefined) {
          acc.push(lastIndex + current);
        }
      }
      return acc;
    },
    [] as number[],
  );

  return (
    <div
      className={clsx(
        "group relative flex min-h-96 h-full flex-col justify-start overflow-hidden rounded-xl",
        "cursor-pointer transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        "relative flex w-full  items-center justify-center overflow-hidden rounded-lg",
      )}
      onClick={() => navigate({ to: "/stack" })}
    >
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Stack
      </span>
      {renderedIcons?.map((icon, index) => {
        const circleIndex = cumulativeIconDistribution.findIndex(
          (value) => index < value,
        );

        const radius = radii[circleIndex];
        const reverse = circleIndex % 2 !== 0;

        return (
          <OrbitingCircles
            key={index}
            className="h-[25px] w-[25px] border-none"
            duration={20}
            delay={index * 3}
            radius={radius}
            reverse={reverse}
          >
            {icon}
          </OrbitingCircles>
        );
      })}
    </div>
  );
}
