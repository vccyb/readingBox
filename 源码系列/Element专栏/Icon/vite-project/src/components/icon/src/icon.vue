<template>
  <div>
    <i :style="{ '--color': color }" class="info">
      <slot></slot>
      <slot></slot>
    </i>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "ElIcon",
});
// import { iconProps } from "./icon";
import { computed, type CSSProperties, ref } from "vue";

const color = ref("red");

// const props = defineProps(iconProps);
// const style = computed<CSSProperties>(() => {
//   if (!props.size && !props.color) return {};
//   return {
//     fontSize: props.size + "px",
//     "--color": props.color, // 通过 CSS 变量方式进行设置 color
//   };
// });
</script>

<style scoped>
.info {
  color: var(--color);
}
</style>
