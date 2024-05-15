import { RouteRecordRaw } from '@xiyan/router';

const userManagement: RouteRecordRaw = {
  path: '/user-management',
  name: 'user-management',
  component: () => import('@/pages/user-management/index.vue'),
  meta: {
    title: '用户管理',
    icon: 'user',
    hideBreadcrumb: true,
    hideMenu: false,
  },
};

export default userManagement;
