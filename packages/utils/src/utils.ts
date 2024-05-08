import { isObject } from 'lodash-es';

export const deepMerge = <T extends Record<string, any>>(
  src: Record<string, any>,
  target: Record<string, any>,
): T => {
  for (const targetKey in target) {
    src[targetKey] =
      isObject(src[targetKey]) && src[targetKey] !== null
        ? deepMerge(src[targetKey], target[targetKey])
        : (src[targetKey] = target[targetKey]);
  }

  return src as T;
};
