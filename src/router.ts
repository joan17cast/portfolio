import Home from "@/pages/home";
import LinakController from "@/pages/linakController";
import Stack from "@/pages/stack";
import WorkExperience from "@/pages/workExperience";
import { pageMeta, updateMeta } from "@/utils/meta";
import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  beforeLoad: () => {
    updateMeta(pageMeta.home);
  },
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
  beforeLoad: () => {
    updateMeta(pageMeta.home);
  },
});

const stackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/stack",
  component: Stack,
  beforeLoad: () => {
    updateMeta(pageMeta.stack);
  },
});

const workExperienceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/work-experience",
  component: WorkExperience,
  beforeLoad: () => {
    updateMeta(pageMeta.workExperience);
  },
});

const linakControllerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/linak-controller",
  component: LinakController,
  beforeLoad: () => {
    updateMeta(pageMeta.linakController);
  },
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: Home,
  beforeLoad: () => {
    updateMeta(pageMeta.home);
  },
});

const workExperienceNotFoundRoute = createRoute({
  getParentRoute: () => workExperienceRoute,
  path: "*",
  component: WorkExperience,
});

const stackNotFoundRoute = createRoute({
  getParentRoute: () => stackRoute,
  path: "*",
  component: Stack,
});

const linakControllerNotFoundRoute = createRoute({
  getParentRoute: () => linakControllerRoute,
  path: "*",
  component: LinakController,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  stackRoute.addChildren([stackNotFoundRoute]),
  workExperienceRoute.addChildren([workExperienceNotFoundRoute]),
  linakControllerRoute.addChildren([linakControllerNotFoundRoute]),
  notFoundRoute,
]);

export const router = createRouter({ routeTree });
