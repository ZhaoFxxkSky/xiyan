import type { GlobConfig, GlobEnvConfig } from '@xiyan/types';
import { version } from '../package.json';

/**
 * Retrieves the application configuration file name.
 * @param env An object containing environment variables used to dynamically construct the config file name.
 * @returns A string representing the configuration file name in a predefined format based on the provided environment variables.
 */
export function getAppConfigFileName(env: Record<string, any>) {
  return `__PRODUCTION__${env.VITE_GLOB_APP_SHORT_NAME || '__APP'}__CONF__`
    .toUpperCase()
    .replace(/\s/g, '');
}

/**
 * Retrieves the application's global configuration.
 * @param env An object of environment variables from which the global configuration is extracted.
 * @returns The global configuration object for the application.
 */
function getAppConfig(env: Record<string, any>) {
  const ENV_NAME = getAppConfigFileName(env);

  const ENV = (env.DEV ? env : window[ENV_NAME]) as GlobEnvConfig;

  const { VITE_GLOB_APP_SHORT_NAME } = ENV;

  // Validates that VITE_GLOB_APP_SHORT_NAME contains only alphanumeric characters or underscores.
  if (!/^[a-zA-Z\_]*$/.test(VITE_GLOB_APP_SHORT_NAME)) {
    console.warn(
      `The VITE_GLOB_APP_SHORT_NAME variable should only contain alphanumeric characters or underscores. Please adjust in your environment variables and restart.`,
    );
  }

  return ENV;
}

/**
 * Generates a read-only global configuration object for the application.
 * @param env An object of environment variables necessary to fetch parts of the global configuration.
 * @returns A read-only configuration object including title, API URL, short name, and base URL.
 */
export function getGlobalConfig(
  env: Record<string, any>,
): Readonly<GlobConfig> {
  const {
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_BASE_URL,
  } = getAppConfig(env);

  return {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    baseUrl: VITE_GLOB_BASE_URL,
  };
}

/**
 * Creates a prefix for storage keys based on application configuration and environment.
 * @param env Environment variables needed to generate the storage key prefix.
 * @returns An uppercase string serving as a prefix for storage keys, incorporating the app short name and environment mode.
 */
function createStorageKeyPrefix(env: Record<string, any>) {
  const { VITE_GLOB_APP_SHORT_NAME } = getAppConfig(env);
  return `${VITE_GLOB_APP_SHORT_NAME}_${env.MODE}`.toUpperCase();
}

/**
 * Generates a storage name with version suffix, intended for usage in storing data.
 * @param env Environment variables required to form the complete storage name.
 * @returns An uppercase storage name string, prefixed and suffixed with app-specific details and version number.
 */
export function createStorageName(env: Record<string, any>) {
  return `${createStorageKeyPrefix(env)}${`_${version}`}_`.toUpperCase();
}
