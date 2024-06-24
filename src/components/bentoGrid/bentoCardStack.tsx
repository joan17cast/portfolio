"use client";

import { useEffect, useMemo, useState } from "react";
import { icons } from "@/utils/icons";
import clsx from "clsx";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

const iconSlugs = [
  "typescript",
  "javascript",
  "tailwindcss",
  "react",
  "flutter",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "jest",
  "docker",
  "git",
  "slack",
  "github",
  "redux",
  "reactquery",
  "trpc",
  "zod",
  "playwright",
  "axios",
  "linear",
  "vite",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
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
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function BentoCardStack() {
  const [data, setData] = useState<IconData | null>(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, "dark"),
    );
  }, [data]);

  return (
    <div
      className={clsx(
        "group relative  flex flex-col justify-start overflow-hidden rounded-xl",
        "transform-gpu bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="pointer-events-none  flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 ">
        <div className="flex flex-row items-center justify-start gap-4 pb-4">
          <div className=" text-gray-300">{icons.stack}</div>
          <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            Stack
          </h3>
        </div>
        <Cloud {...cloudProps}>
          <>{renderedIcons}</>
          <></>
        </Cloud>
      </div>
    </div>
  );
}
