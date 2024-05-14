<template>
  <div>
    <h1>{{ msg }}</h1>
    <SubComponent />
  </div>
</template>

<script setup lang="ts">
import SubComponent from './SubComponent.vue'
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Father Component now mounted')
})

defineProps<{
  msg: string
}>()
</script>
