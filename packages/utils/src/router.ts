import type { RouteRecordRaw } from 'vue-router';

export const loadRoutesFromModules = (
  modules: Record<string, { default: RouteRecordRaw | RouteRecordRaw[] }>,
): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = [];

  Object.keys(modules).forEach((key) => {
    const module = modules[key];
    if (module.default) {
      if (Array.isArray(module.default)) {
        routes.push(...module.default);
      } else {
        routes.push(module.default);
      }
    }
  });
  return routes;
};
