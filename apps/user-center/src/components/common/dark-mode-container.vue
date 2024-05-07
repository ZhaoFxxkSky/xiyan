<template>
  <div></div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'DarkModeContainer' });

interface DarkModeContainerProps {
  inverted?: boolean;
}

defineProps<DarkModeContainerProps>();
</script>

<style scoped></style>
