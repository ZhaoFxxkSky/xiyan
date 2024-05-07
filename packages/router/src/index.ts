import { createRouter, createWebHashHistory, Router } from 'vue-router';
import { BasicRoutes } from './routes';

export let router: Router;
export function InitRouter(path: string): Router {
  router = createRouter({
    history: createWebHashHistory(path),
    routes: BasicRoutes,
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
  });
  return router;
}

export * from './guard';
