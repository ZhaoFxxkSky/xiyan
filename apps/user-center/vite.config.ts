import { defineConfig, UserConfig } from 'vite';
import { createViteConfig } from '@config/vite';

export default defineConfig(async ({ command, mode }): Promise<UserConfig> => {
  return await createViteConfig(command, mode, process.cwd());
});
