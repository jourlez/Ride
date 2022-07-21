import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite';

import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    Unocss({
      preflight: true,
      presets: [
        presetUno(),
        presetIcons({
          scale: 1.3,
        }),
      ],
    }),
  ],
};

export default config;
