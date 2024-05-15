import { loadEnv, UserConfig } from 'vite';
import { resolve } from 'path';
import { configVitePlugins } from './plugins';
import { wrapperEnv } from './utils';

export async function createViteConfig(
  command: 'build' | 'serve',
  mode: string,
  cwd: string,
): Promise<UserConfig> {
  const root = cwd;
  const env = loadEnv(mode, root);

  const viteEnv = wrapperEnv(env);

  return {
    root,
    resolve: {
      alias: {
        '@': `${resolve(root, 'src')}`,
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
    plugins: [...(await configVitePlugins(root, viteEnv, command === 'build'))],
  };
}
