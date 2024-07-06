<template>
  <div>
    <h4 style="color: red">first render</h4>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  const ele = document.querySelector('h4') as Element
  ele.innerHTML = '123'
})
</script>
