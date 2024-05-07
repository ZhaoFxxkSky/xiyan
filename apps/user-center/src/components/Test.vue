<template>
  <div>user-management</div>
  <p>current num is {{ count }}</p>
  <p>computedCount is {{ computedCount }}</p>
  <n-button type="primary" @click="plus">plus</n-button>
  <n-button @click="minus">minus</n-button>
</template>

<script lang="ts" setup>
defineOptions({ name: 'Test' });

import { computed, PropType, ref } from 'vue';

const props = defineProps({
  propCount: {
    type: Number,
    // required: ,
  },
});

const count = ref(0);

const plus = () => {
  count.value++;
};

const minus = () => {
  count.value--;
};

const computedCount = computed(() => {
  console.log(props.propCount);
  const countValue = props?.propCount ?? count.value;
  return countValue + 1;
});
</script>

<style scoped></style>
