import { PluginOption } from 'vite';
import { configUnocssPlugin } from './unocss';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { configUnplugin } from './unplugin';
import { configVisualizerConfig } from './visualizer.js';

export async function configVitePlugins(
  root: string,
  _viteEnv: Record<any, any>,
  _isBuild: boolean,
) {
  const plugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx()];

  // unocss
  plugins.push(configUnocssPlugin());

  // rollup-plugin-visualizer
  plugins.push(configVisualizerConfig());

  // unplugin
  plugins.push(...configUnplugin(root));

  return plugins;
}
