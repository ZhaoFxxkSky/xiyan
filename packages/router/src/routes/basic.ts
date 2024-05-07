import { Exception } from '../pages';
import { RouteRecordRaw } from 'vue-router';

const PAGE_NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/test',
  name: 'NOT FOUND',
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: '123',
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
