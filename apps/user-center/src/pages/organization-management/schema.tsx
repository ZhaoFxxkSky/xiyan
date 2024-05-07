import { XiyanColumns } from '@/components';

export interface OrganizationManagementDataType {
  id: number;
  name: string;
  role: string;
  sex: string;
  age: number;
  address: string;
}

export const organizationManagementColumns: XiyanColumns<OrganizationManagementDataType> =
  [
    {
      field: 'username',
      title: '用户名',
      align: 'center',
    },
    {
      field: 'nickname',
      title: '昵称',
      align: 'center',
    },
    {
      field: 'phone',
      title: '手机号',
      align: 'center',
    },
    {
      field: 'email',
      title: '邮箱',
      align: 'center',
    },
    {
      field: 'status',
      title: '状态',
      align: 'center',
    },
  ];
