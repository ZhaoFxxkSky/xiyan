import type {
  DefineAppConfigOptions,
  SidebarConfigOptions,
} from '@xiyan/types';
import { _assign, deepMerge } from '@xiyan/utils';
import { defineStore } from 'pinia';

let defaultOptions: DefineAppConfigOptions = {
  sidebar: {
    collapsed: false,
  },
};

export const initAppConfigStore = (options: DefineAppConfigOptions) => {
  defaultOptions = deepMerge(defaultOptions, options);
  useAppConfig();
};

export const useAppConfig = defineStore({
  id: 'APP_CONFIG',
  state: (): DefineAppConfigOptions => ({ ...defaultOptions }),
  getters: {},
  actions: {
    setSidebar(
      value: Partial<
        Omit<SidebarConfigOptions, 'mixSidebarWidth' | 'collapsedWidth'>
      >,
    ) {
      _assign(this.sidebar, value);
    },
  },
});
