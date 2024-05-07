<template>
  <div>
    <div v-if="title" class="flex m-2">
      <div class="ml-2 text-xl">{{ title }}</div>
    </div>

    <vxe-grid v-bind="getProps" ref="xGrid">
      <template v-for="item in Object.keys($slots)" #[item]="data" :key="item">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
    </vxe-grid>
  </div>
</template>

<script
  generic="T extends Record<string, any>, U extends Record<string, any>"
  lang="ts"
  setup
>
import { computed, PropType, ref, unref, useAttrs, watch } from 'vue';
import 'xe-utils';
import { VxeGrid } from 'vxe-table';
import 'vxe-table/styles/index.scss';
import { ReloadType, SetPropsType, XiyanTableProps } from './type.js';
import { isFunction } from '@/utils';
import { VxeGridInstance } from 'vxe-table';

defineOptions({ name: 'XiyanTable' });

const attrs = useAttrs();
const emit = defineEmits<{
  (
    e: 'register',
    payload: { reload: ReloadType; setProps: SetPropsType },
  ): void;
}>();

const props = defineProps({
  options: {
    type: Object as PropType<XiyanTableProps>,
    default: () => {
      return {};
    },
  },
});

const innerProps = ref<Partial<XiyanTableProps>>();

const title = ref('');

const getProxyConfig = (options: XiyanTableProps) => {
  const { api, proxyConfig, data, afterFetch } = options;
  if (proxyConfig || data) return;
  if (api && isFunction(api)) {
    options.proxyConfig = {
      props: {
        result: 'data.list', // 配置响应结果列表字段
        total: 'data.total', // 配置响应结果总页数字段
      },
      ajax: {
        query: async ({ page, sort, filters }) => {
          const { currentPage, pageSize } = page;
          const apiParams = {
            current: currentPage,
            pageSize,
          };

          const apiSort = {};
          if (sort.field) {
            apiSort[sort.field] = sort;
          }

          console.log(page, apiParams, filters);

          let res = await api(apiParams, apiSort);

          if (afterFetch && isFunction(afterFetch)) {
            res = afterFetch(res);
          }

          return res;
        },
      },
    };
  }
};

const getPageConfig = (options: XiyanTableProps) => {
  const { pagination, pagerConfig } = options;
  if (pagerConfig) return;

  if (pagination) {
    if (typeof pagination === 'boolean') {
      options.pagerConfig = {
        pageSize: 50,
        pageSizes: [5, 10, 15, 20, 50, 100, 200, 500, 1000],
      };
      return;
    } else {
      options.pagerConfig = pagination;
    }
  }
};

const getProps = computed(() => {
  const options = innerProps.value || props.options;
  delete options?.title;
  getProxyConfig(options);
  getPageConfig(options);
  // console.log(options);
  return {
    ...options,
    ...attrs,
  };
});

const xGrid = ref<VxeGridInstance>();

const reload = () => {
  const g = unref(xGrid);
  g?.commitProxy('query');
};

const setProps = (prop: Partial<XiyanTableProps>) => {
  innerProps.value = { ...unref(innerProps), ...prop };
};
defineExpose({ reload, Ref: xGrid });
emit('register', { reload, setProps });

watch(
  () => innerProps.value || props.options,
  (newOptions) => {
    title.value = newOptions?.title || '';
  },
  { immediate: true },
);
</script>
<style lang="scss" scoped></style>
