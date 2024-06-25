import Home from "@/pages/home";
import NotFound from "@/pages/notFound";
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
  path: "$",
  component: NotFound,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  stackRoute,
  workExperienceRoute,
  notFoundRoute,
]);

export const router = createRouter({ routeTree });

