<template>
  <div>
    <label v-if="label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">

  type PropType = {
    label?: string;
    prop?: string
  }

  const prop = withDefaults(defineProps<PropType>(), {
    label: ''
  })

</script>

<style lang="scss" scoped>

</style>