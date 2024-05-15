import { createPinia } from 'pinia';
import { App } from 'vue';
import { persistGlobalConfig } from './persist';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import { createStorageName } from '@xiyan/utils';

const pinia = createPinia();

pinia.use(
  createPersistedState(persistGlobalConfig(createStorageName(import.meta.env))),
);

export function setupPinia(app: App<Element>) {
  app.use(pinia);
}

export * from 'pinia';
