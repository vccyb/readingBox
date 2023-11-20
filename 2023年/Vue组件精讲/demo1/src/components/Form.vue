<template>
  <form>
    <slot></slot>
  </form>
</template>

<script setup lang="ts">

type PropType = {
  model?: object;
  rules?: object;
}

const props = defineProps<PropType>()

</script>

<style lang="scss" scoped>

</style>