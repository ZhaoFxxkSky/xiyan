import {
  initAppConfigStore,
  storeToRefs,
  useAppConfig as appConfigStore,
} from '@xiyan/stores';
import { _merge } from '@xiyan/utils';
import type { DefineAppConfigOptions } from '@xiyan/types';
import { unref } from 'vue';

export const initAppConfig = (options: DefineAppConfigOptions) => {
  initAppConfigStore(options);
};

export const useAppConfig = () => {
  const useAppConfigStore = appConfigStore();
  const appConfigOptions = storeToRefs(useAppConfigStore);
  const { sidebar } = appConfigOptions;

  const preDealConfig = (configs: DeepPartial<DefineAppConfigOptions>) => {
    return configs;
  };

  const setAppConfig = (configs: DeepPartial<DefineAppConfigOptions>) => {
    useAppConfigStore.$patch((state) => {
      _merge(state, preDealConfig(configs));
    });
  };

  function toggleCollapse() {
    useAppConfigStore.setSidebar({ collapsed: !unref(sidebar).collapsed });
  }

  return {
    ...appConfigOptions,
    setAppConfig,
    toggleCollapse,
  };
};
