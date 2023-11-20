<template>
  <div>
    <input v-model="val" />
    <!-- v-model 指令其实是下面的语法糖 -->
    <input :vaule="val" @input="vaule = $event.target.value">
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>