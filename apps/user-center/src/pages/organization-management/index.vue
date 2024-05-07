<template>
  <div>
    <XiyanTable @register="organizationTableRegister" />
    <div class="font-800">123</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useTable, XiyanTable } from '@/components';
import {
  organizationManagementColumns,
  OrganizationManagementDataType,
} from '@/pages/organization-management/schema.tsx';
import { geSysUserListByPage } from '@/services/user-center/sys-user-controller.ts';

const [organizationTableRegister, organizationTableRef] =
  useTable<OrganizationManagementDataType>({
    columns: organizationManagementColumns,
    pagination: true,
    border: 'none',
    minHeight: '700px',
    maxHeight: '700px',
    rowConfig: {
      isHover: true,
    },
    stripe: true,
    round: true,
    api: geSysUserListByPage,
  });

onMounted(() => {});
</script>
