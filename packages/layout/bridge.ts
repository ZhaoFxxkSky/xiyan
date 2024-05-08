import { Component } from 'vue';
import { useAppConfig, useMenuSetting } from '@xiyan/hooks';

type LogoComponent = Component<{ showTitle: boolean }>;

export type ContextOptions = {
  useAppConfig: typeof useAppConfig;
  useMenuSetting: typeof useMenuSetting;
  Logo?: LogoComponent;
};

const defaultOptions: ContextOptions = {
  useAppConfig,
  useMenuSetting,
};

export let context: ContextOptions;

export const initLayout = (options: Partial<ContextOptions>) => {
  context = Object.assign(defaultOptions, options);
};
