<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { toRef } from "vue";

import { useStore } from "vuex";
const store = useStore();
console.log(store.state.count);
const count = toRef(store.state, "count");

function increment() {
  store.commit("increment", { count: 10 });
}
</script>

<template>
  <div>
    <button @click="increment">Add</button> {{ count }}
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
