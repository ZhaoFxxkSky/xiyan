import { loadRoutesFromModules } from '@xiyan/utils';
import { RouteRecordRaw } from 'vue-router';

const routeModuleRecord = import.meta.glob<{
  default: RouteRecordRaw | RouteRecordRaw[];
}>('./modules/**/*.ts', {
  eager: true,
});

const routeModules: RouteRecordRaw[] = loadRoutesFromModules(routeModuleRecord);

export const asyncRoutes = [...routeModules];
