import { router } from './index';
import nProgress from 'nprogress';

export function createBasicGuard() {
  router.beforeEach(() => {
    nProgress.start();
  });

  router.afterEach(() => {
    nProgress.done();
  });
}
