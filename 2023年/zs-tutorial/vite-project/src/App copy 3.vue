<template>
  <div>
    <button @click="flag = !flag">switch</button>
    <transition
      leave-active-class="animate__animated animate__bounceInLeft"
      enter-active-class="animate__animated animate__bounceInRight"
    >
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import "animate.css";
import { ref } from "vue";

const flag = ref<boolean>(true);
</script>

<style scoped>
.box {
  height: 200px;
  width: 200px;
  background-color: red;
}

.fade-enter-from {
  width: 0;
  height: 0;
}

.fade-enter-active {
  transition: all 1.5s ease;
}

.fade-enter-to {
  width: 200px;
  height: 200px;
}
</style>
