export interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  // Project abbreviation
  shortName: string;
  //Backend url
  baseUrl: string;
}

export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string;
  //Backend url
  VITE_GLOB_BASE_URL: string;
}

export type SidebarConfigOptions = {
  collapsed: boolean;
};

export type DefineAppConfigOptions = {
  sidebar: SidebarConfigOptions;
};
