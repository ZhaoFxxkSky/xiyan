import { ProxyOptions } from 'vite';

/**
 * Wraps the environment configuration into a ViteEnv compliant object.
 * Additionally, sets the processed environment variables into `process.env`.
 * @param envConf An object containing key-value pairs used to initialize Vite environment variables.
 * @returns A ViteEnv compliant object after processing the input configuration.
 */
export function wrapperEnv(envConf: Recordable<any>): ViteEnv {
  const viteEnv: Partial<ViteEnv> = {};

  for (const key of Object.keys(envConf)) {
    let value = envConf[key].replace(/\\n/g, '\n');
    value = value === 'true' ? true : value === 'false' ? false : value;

    if (key === 'VITE_PROXY' && value) {
      try {
        value = JSON.parse(value.replace(/'/g, '"'));
      } catch (error) {
        value = '';
      }
    }

    viteEnv[key] = value;
    if (typeof value === 'string') {
      process.env[key] = value;
    } else if (typeof value === 'object') {
      process.env[key] = JSON.stringify(value);
    }
  }
  return viteEnv as ViteEnv;
}

/**
 * Constructs a proxy configuration object based on the provided list of prefixes and target URLs.
 * @param proxyList An array of two strings where each sub-array contains a prefix and a target URL. Defaults to an empty array.
 * @returns A record object where keys are the prefixes and values are the corresponding proxy configuration objects.
 */
export function resolveProxy(
  proxyList: [string, string][] = [],
): Record<string, ProxyOptions> {
  const proxy: Record<string, ProxyOptions> = {};
  for (const [prefix, target] of proxyList) {
    // Check if the target URL starts with 'https://' to determine secure option
    const isHttps = /^https:\/\//.test(target);
    proxy[prefix] = {
      target: target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      // If the target is HTTPS, set secure to false; otherwise, it will be omitted
      ...(isHttps ? { secure: false } : {}),
    };
  }
  return proxy;
}
