import Home from "@/pages/home";
import Stack from "@/pages/stack";
import WorkExperience from "@/pages/workExperience";
import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute();

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const stackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/stack",
  component: Stack,
});

const workExperienceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/work-experience",
  component: WorkExperience,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: Home,
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
