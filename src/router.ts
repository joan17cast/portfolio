import Home from "@/pages/home";
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

const routeTree = rootRoute.addChildren([
  homeRoute,
  stackRoute.addChildren([stackNotFoundRoute]),
  workExperienceRoute.addChildren([workExperienceNotFoundRoute]),
  notFoundRoute,
]);

export const router = createRouter({ routeTree });
