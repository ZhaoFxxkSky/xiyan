<template>
  <n-space>
    <n-layout-header>
      <slot name="logo">
        <Logo />
        <HeaderTrigger />
      </slot>
    </n-layout-header>
  </n-space>
</template>

<script lang="ts" setup>
import { context } from '../../bridge';
import { HeaderTrigger } from './trigger';

const { Logo } = context;
</script>

<style scoped></style>
