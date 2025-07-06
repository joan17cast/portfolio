import { TechCard } from "@/components/card";
import { Layout } from "@/components/layout";
import { icons } from "@/utils/icons";
import { useTranslation } from "react-i18next";

const stackData = [
	{
		titleKey: "stack.webDevelopment",
		cards: [
			{ icon: icons.stackIcons.nodedotjs, labelKey: "stack.nodejs" },
			{ icon: icons.stackIcons.react, labelKey: "stack.react" },
			{ icon: icons.stackIcons.typescript, labelKey: "stack.typescript" },
			{ icon: icons.stackIcons.javascript, labelKey: "stack.javascript" },
			{ icon: icons.stackIcons.git, labelKey: "stack.git" },
			{ icon: icons.stackIcons.zod, labelKey: "stack.zod" },
			{ icon: icons.stackIcons.html5, labelKey: "stack.html5" },
			{ icon: icons.stackIcons.pnpm, labelKey: "stack.pnpm" },
			{ icon: icons.stackIcons.axios, labelKey: "stack.axios" },
			{ icon: icons.stackIcons.leaflet, labelKey: "stack.leaflet" },
			{ icon: icons.stackIcons.mapbox, labelKey: "stack.mapbox" },
			{ icon: icons.stackIcons.chartdotjs, labelKey: "stack.reactCharts" },
			{ icon: icons.stackIcons.reactquery, labelKey: "stack.reactQuery" },
			{ icon: icons.stackIcons.reactRouter, labelKey: "stack.reactRouter" },
		],
		titleClass: "text-xl font-bold text-white",
	},
	{
		titleKey: "stack.frameworks",
		cards: [
			{ icon: icons.stackIcons.vite, labelKey: "stack.vite" },
			{ icon: icons.stackIcons.nextdotjs, labelKey: "stack.nextjs" },
		],
		titleClass: "font-regular text-lg text-white",
	},
	{
		titleKey: "stack.stateManagement",
		cards: [
			{ icon: icons.stackIcons.redux, labelKey: "stack.redux" },
			{ icon: icons.stackIcons.zustand, labelKey: "stack.zustand" },
			{ icon: icons.stackIcons.jotai, labelKey: "stack.jotai" },
		],
		titleClass: "font-regular text-lg text-white",
	},
	{
		titleKey: "stack.testingQA",
		cards: [
			{ icon: icons.stackIcons.playwright, labelKey: "stack.playwright" },
			{ icon: icons.stackIcons.jest, labelKey: "stack.jest" },
			{ icon: icons.stackIcons.sonarqube, labelKey: "stack.sonarqube" },
		],
		titleClass: "font-regular text-lg text-white",
	},
	{
		titleKey: "stack.styles",
		cards: [
			{ icon: icons.stackIcons.tailwindcss, labelKey: "stack.tailwindcss" },
			{ icon: icons.stackIcons.css3, labelKey: "stack.css3" },
			{ icon: icons.stackIcons.materialUI, labelKey: "stack.materialUI" },
		],
		titleClass: "font-regular text-lg text-white",
	},
	{
		titleKey: "stack.design",
		cards: [
			{ icon: icons.stackIcons.figma, labelKey: "stack.figma" },
			{ icon: icons.stackIcons.photoshop, labelKey: "stack.photoshop" },
		],
		titleClass: "text-xl font-semibold text-white",
	},
	{
		titleKey: "stack.cloud",
		cards: [
			{ icon: icons.stackIcons.rancher, labelKey: "stack.rancher" },
			{ icon: icons.stackIcons.portainer, labelKey: "stack.portainer" },
		],
		titleClass: "text-xl font-semibold text-white",
	},
	{
		titleKey: "stack.mobileDevelopment",
		cards: [
			{ icon: icons.stackIcons.react, labelKey: "stack.reactNative" },
			{ icon: icons.stackIcons.flutter, labelKey: "stack.flutter" },
			{ icon: icons.stackIcons.androidstudio, labelKey: "stack.androidStudio" },
		],
		titleClass: "text-xl font-semibold text-white",
	},
	{
		titleKey: "stack.productivity",
		cards: [
			{ icon: icons.stackIcons.gitlab, labelKey: "stack.gitlab" },
			{ icon: icons.stackIcons.github, labelKey: "stack.github" },
			{ icon: icons.stackIcons.linear, labelKey: "stack.linear" },
			{ icon: icons.stackIcons.slack, labelKey: "stack.slack" },
			{ icon: icons.stackIcons.visualstudiocode, labelKey: "stack.visualStudioCode" },
			{ icon: icons.stackIcons.docker, labelKey: "stack.docker" },
			{ icon: icons.stackIcons.notion, labelKey: "stack.notion" },
		],
		titleClass: "text-xl font-semibold text-white",
	},
];

const Stack = () => {
	const { t } = useTranslation();
	return (
		<Layout>
			<div className="max-w-[1050px] space-y-6 h-full py-5">
				<section className="w-full space-y-4">
					<h1 className="text-5xl font-bold text-white">
						{t("stack.title")}
					</h1>
					<p className=" text-gray-400">{t("stack.intro")}</p>
				</section>
				{stackData.map((section) => (
					<div
						key={section.titleKey}
						className="space-y-4 border-l-2 border-gray-600 pl-4"
					>
						<h3 className={section.titleClass}>{t(section.titleKey)}</h3>
						<div className="w-full gap-4 grid grid-cols-2  sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
							{section.cards.map((card) => (
								<TechCard
									key={card.labelKey}
									icon={card.icon}
									label={t(card.labelKey)}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</Layout>
	);
};
export default Stack;
