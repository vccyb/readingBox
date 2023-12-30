<template>
  <div>
    {{ $env }}
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";

const app = getCurrentInstance();
console.log("-----", app.proxy.$env);
</script>

<style scoped></style>
