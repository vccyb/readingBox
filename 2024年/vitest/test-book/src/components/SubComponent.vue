<template>
  <div>childComponent</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  console.log('childComponent onMounted')
})
</script>

<style scoped></style>
