import { PluginOption } from 'vite';
import { configUnocssPlugin } from './unocss';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { configUnplugin } from './unplugin';
import { configVisualizerConfig } from './visualizer.js';
import iconifyJsonDependencyChecker from './iconifyJsonDependencyChecker';

export async function configVitePlugins(
  root: string,
  viteEnv: ViteEnv,
  _isBuild: boolean,
) {
  const plugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx()];

  // @iconify/json dependency checker
  plugins.push(iconifyJsonDependencyChecker());

  // unocss
  plugins.push(configUnocssPlugin(viteEnv));

  // rollup-plugin-visualizer
  plugins.push(configVisualizerConfig());

  // unplugin
  plugins.push(...configUnplugin(root, viteEnv));

  return plugins;
}
