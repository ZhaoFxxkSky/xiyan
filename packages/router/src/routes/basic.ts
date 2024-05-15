import {Exception} from '../pages';
import {RouteRecordRaw} from 'vue-router';
import {PAGE_NOT_FOUND_NAME} from '@xiyan/constants';

// @ts-ignore
const LAYOUT = () => import('@/layout/index.vue');

const PAGE_NOT_FOUND_ROUTE: RouteRecordRaw = {
    path: '/:path(.*)*',
    name: PAGE_NOT_FOUND_NAME,
    component: LAYOUT,
    meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
        hideMenu: true,
    },
    children: [
        {
            path: '/:path(.*)*',
            name: PAGE_NOT_FOUND_NAME,
            component: Exception,
            meta: {
                title: 'ErrorPage',
                hideBreadcrumb: true,
                hideMenu: true,
            },
        },
    ],
}

export {PAGE_NOT_FOUND_ROUTE};
