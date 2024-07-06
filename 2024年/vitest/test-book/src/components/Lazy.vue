<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const AsyncPdf = defineAsyncComponent({
  loader: () => import('./AsyncPdf.vue'),
  delay: 200
})
</script>
<template>
  <h4 style="color: red">测试 async</h4>
  <br />
  <AsyncPdf></AsyncPdf>
</template>
