<template>
  <Teleport to="#modal"> 下面渲染子组件 <Signup></Signup> </Teleport>
</template>

<script setup>
import Signup from './Signup.vue'
</script>
