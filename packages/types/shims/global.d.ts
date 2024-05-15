// vue
import type { PropType as VuePropType, VNodeChild } from 'vue';

declare global {
  type PropType<T> = VuePropType<T>;
  type VueNode = VNodeChild | JSX.Element;

  type AnyFunction<T> = (...args: any[]) => T;
  type PartialReturnType<T extends (...args: unknown[]) => unknown> = Partial<
    ReturnType<T>
  >;
  type Nullable<T> = T | null;
  type Recordable<T = any> = Record<string, T>;
  type TimeoutHandle = ReturnType<typeof setTimeout>;
  type IntervalHandle = ReturnType<typeof setInterval>;
  type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };

  interface ImportMetaEnv extends ViteEnv {
    __: never;
  }

  interface ViteEnv {
    VITE_GLOB_APP_SHORT_NAME: string;
    VITE_PUBLIC_PATH: string;
    VITE_DROP_CONSOLE: boolean;
    VITE_ICON_PREFIX: string;
    VITE_ICON_LOCAL_PREFIX: string;
  }
}

export {};
