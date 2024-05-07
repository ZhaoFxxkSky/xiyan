declare global {
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
    VITE_ICON_PREFIX: string;
    VITE_ICON_LOCAL_PREFIX: string;
  }
}

export {};
