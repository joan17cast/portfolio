import { useEffect, useMemo, useState } from "react";
import { iconStack } from "@/utils/staticContent";
import { useNavigate } from "@tanstack/react-router";
import clsx from "clsx";
import {
  fetchSimpleIcons,
  renderSimpleIcon,
  type SimpleIcon,
} from "react-icon-cloud";

import OrbitingCircles from "../animations/orbitingCircles";

const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
    },
  });
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function BentoCardStack() {
  const [data, setData] = useState<IconData | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    void fetchSimpleIcons({ slugs: iconStack }).then(setData);
  }, []);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, "dark"),
    );
  }, [data]);

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
        "transform-gpu bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
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
