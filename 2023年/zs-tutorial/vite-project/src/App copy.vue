<template>
  {{ man }}
  <div>{{ man2 }}</div>
  <button @click="change">change</button>
  <div ref="dom">我啥dom</div>
</template>

<script setup lang="ts">
import { ref, isRef, shallowRef, triggerRef } from "vue";

const man = ref({ name: "chenyubo1111" });
const man2 = shallowRef({ name: "chenyubo" });

// 直到.value
const change = () => {
  // man.value.name = "chenyubo2222";
  man2.value.name = "我被影响了";
  triggerRef(man2);
  console.log(man2);
  console.log(dom.value?.innerText);
};

const dom = ref<HTMLDivElement>();
</script>

<style scoped></style>
