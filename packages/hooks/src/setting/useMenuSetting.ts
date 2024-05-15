import { useAppConfig } from '../config';
import { computed, unref } from 'vue';
import { SidebarConfigOptions } from '@xiyan/types';

export function useMenuSetting() {
  const configStore = useAppConfig();

  const getCollapsed = computed(() => configStore.sidebar.value.collapsed);

  const setSidebarSetting = (sidebarSetting: Partial<SidebarConfigOptions>) => {
    configStore.setAppConfig({
      sidebar: sidebarSetting,
    });
  };

  const toggleCollapsed = () => {
    setSidebarSetting({
      collapsed: !unref(getCollapsed),
    });
  };

  return {
    getCollapsed,
    toggleCollapsed,
  };
}
