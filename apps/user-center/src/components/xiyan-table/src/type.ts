import type {
  VxeGridProps,
  VxeGridPropTypes,
  VxeTableEvents,
  VxeTablePropTypes,
} from 'vxe-table';

export type RequestData<T> = {
  data: T[] | undefined;
  success?: boolean;
  total?: number;
} & Record<string, any>;

export type XiyanTableProps<T = any, U = any> = VxeGridProps<T> & {
  api?: (
    params: U & {
      pageSize?: number;
      current?: number;
      keyword?: string;
    },
    sort: Record<string, VxeTablePropTypes.SortOrder>,
    // filter: Record<string, VxeTableDefines.FilterCheckedParams>,
  ) => Promise<Partial<RequestData<T>>>;
  params?: Object;
  title?: string;
  pagination?: boolean | VxeGridPropTypes.PagerConfig;
  afterFetch?: Function;
};

export type XiyanColumns<D extends Record<string, any>> =
  VxeGridPropTypes.Columns<D>;

export type XiyanCellClick = VxeTableEvents.CellClick;

export type ReloadType = () => void;
export type SetPropsType = (prop: Partial<XiyanTableProps>) => void;
