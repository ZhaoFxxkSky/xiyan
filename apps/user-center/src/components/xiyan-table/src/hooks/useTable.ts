import { ref, unref } from 'vue';
import { XiyanTableProps } from '../type.js';

interface TableInstance<T = any, U = any> {
  reload: () => void;
  setProps: (props: XiyanTableProps<T, U>) => void;
}

export function useTable<T = any, U = any>(props?: XiyanTableProps<T, U>) {
  const tableRef = ref<Nullable<TableInstance<T, U>>>(null);

  const register = (instance: TableInstance<T, U>) => {
    tableRef.value = instance;
    if (props) instance.setProps(props);
  };

  const getInstance = () => {
    const instance = unref(tableRef);
    if (!instance) throw new Error('Table instance is not registered.');
    return instance;
  };

  const methods: TableInstance<T, U> = {
    reload: () => getInstance().reload(),
    setProps: (props) => getInstance().setProps(props),
  };

  return [register, methods] as const;
}
