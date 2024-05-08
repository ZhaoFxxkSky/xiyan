import { Exception } from '../pages';
import { RouteRecordRaw } from 'vue-router';

const LAYOUT = () => import('@/layout/index.vue');
console.log(LAYOUT);

const PAGE_NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/test',
  name: 'NOT FOUND',
  component: LAYOUT,
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: 'fuck',
      name: 'NOUNT FOUND 1',
      component: Exception,
      meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
        hideMenu: true,
      },
    },
  ],
};

export { PAGE_NOT_FOUND_ROUTE };
