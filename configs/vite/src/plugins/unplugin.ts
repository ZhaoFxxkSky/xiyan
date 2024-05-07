import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';
import { PluginOption } from 'vite';

export function configUnplugin(root: string): PluginOption[] {
  return [
    Components({
      dts: resolve(root, 'src/types/components.d.ts'),
      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
      resolvers: [NaiveUiResolver()],
    }),
  ] as PluginOption[];
}
