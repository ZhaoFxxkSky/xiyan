<template>
  <div>this is logo component</div>
</template>

<script lang="ts" setup>
const props = defineProps({
  /**
   * Whether to show title
   */
  showTitle: { type: Boolean, default: true },
});
</script>

<style scoped></style>
