import Unocss from '@unocss/vite';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import presetUno from '@unocss/preset-uno';
import { createUnocssPreset } from '../presets';
import * as path from 'node:path';
import presetIcons from '@unocss/preset-icons';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

export function configUnocssPlugin() {
  // const { VITE_ICON_PREFIX, VITE_ICON_LOCAL_PREFIX } = viteEnv;

  const localIconPath = path.join(process.cwd(), 'src/assets/svg-icon');

  // const collectionName = VITE_ICON_LOCAL_PREFIX.replace(
  //   `${VITE_ICON_PREFIX}-`,
  //   '',
  // );

  return Unocss({
    content: {
      pipeline: {
        exclude: ['node_modules', 'dist'],
      },
    },
    presets: [
      presetUno({ dark: 'class' }),
      createUnocssPreset(),
      // presetIcons({
      //   prefix: `${VITE_ICON_PREFIX}-`,
      //   scale: 1,
      //   extraProperties: {
      //     display: 'inline-block',
      //   },
      //   collections: {
      //     [collectionName]: FileSystemIconLoader(localIconPath, (svg) =>
      //       svg.replace(/^<svg\s/, '<svg width="1em" height="1em" '),
      //     ),
      //   },
      //   warn: true,
      // }),
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
  });
}
