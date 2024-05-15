<template>
  <span class="hover:cursor-pointer" @click="toggleCollapsed">
    <span v-if="getCollapsed">true</span>
    <span v-if="!getCollapsed">false</span>
  </span>
</template>

<script lang="ts" setup>
import { context } from '../../../bridge';

const { useMenuSetting } = context;
const { toggleCollapsed, getCollapsed } = useMenuSetting();
</script>

<style scoped></style>
