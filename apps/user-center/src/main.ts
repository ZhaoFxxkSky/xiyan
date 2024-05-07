import '@xiyan/styles';
import { createApp } from 'vue';
import App from './App.vue';
import { InitRouter } from '@xiyan/router';
import { setupRouteGuard } from '@/router/guard.js';

(async () => {
  const app = createApp(App);

  const router = InitRouter('/');
  app.use(router);
  await setupRouteGuard();
  await router.isReady();

  console.log(router.getRoutes());

  app.mount('#app');
})();
