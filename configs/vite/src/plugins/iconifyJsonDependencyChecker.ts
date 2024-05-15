import { cyan, yellow } from 'picocolors';
import { ViteDevServer } from 'vite';

export default function iconifyJsonDependencyChecker() {
  return {
    name: 'iconify-json-dependency-checker',
    async configureServer(server: ViteDevServer) {
      const env = process.env.NODE_ENV;
      if (env === 'development') {
        try {
          // Attempt to resolve the '@iconify/json' package
          require.resolve('@iconify/json', {
            paths: [server.config.root],
          });
        } catch (error) {
          // If the package is not found, display a professional error message
          console.error(
            `\n${cyan('ERROR:')} Missing critical dependency '@iconify/json'.\n` +
              `This package is essential for rendering icons within the application.\n\n` +
              `To resolve this issue, please follow the steps below:\n` +
              `1. Open your terminal or command prompt.\n` +
              `2. Navigate to your project's root directory.\n` +
              `3. Run the following command to install the missing package:\n` +
              `   ${yellow('pnpm install @iconify/json')}` +
              `\nOnce the installation is complete, please restart the development server.\n`,
          );
        }
      }
    },
  };
}
