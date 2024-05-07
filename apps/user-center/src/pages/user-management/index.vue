<template>
  <div>
    <Test :propCount="computedCount" />
    <div>main count:{{ count }}</div>
    <n-button @click="toggleEnable()"
      >toggle Test propCount enable: {{ enable }}
    </n-button>
    <n-button @click="count++">plus count</n-button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import Test from '../../components/Test.vue';

const count = ref(0);
const enable = ref(false);

const toggleEnable = () => {
  enable.value = !enable.value;
};

const computedCount = computed(() => {
  return enable.value ? count.value : undefined;
});
</script>

<style scoped></style>
