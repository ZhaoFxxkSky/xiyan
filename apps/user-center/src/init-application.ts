import { initLayout } from '@xiyan/layouts';
import { initAppConfig, useAppConfig } from '@xiyan/hooks';
import Logo from '@/layout/components/logo.vue';

async function initPackages() {
  const _initLayout = async () =>
    initLayout({
      useAppConfig,
      Logo,
    });

  await Promise.all([_initLayout()]);
}

export async function initApplication() {
  await initPackages();

  initAppConfig({});
}
