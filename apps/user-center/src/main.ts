import '@xiyan/styles';
import { createApp } from 'vue';
import App from './App.vue';
import { initApplication } from '@/init-application';
import { setupPinia } from '@xiyan/stores';
import { setupRouteGuard } from '@/router/guard.js';
import { InitRouter } from '@xiyan/router';
// import { InitRouter } from '@xiyan/router';
// import { setupRouteGuard } from '@/router/guard.js';

(async () => {
  const app = createApp(App);
  setupPinia(app);

  await initApplication();

  const router = InitRouter('/');
  app.use(router);
  await setupRouteGuard();
  await router.isReady();

  app.mount('#app');
})();
