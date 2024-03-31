<template>
  <div>
    <h1>Father</h1>
    <Child></Child>
  </div>
</template>

<script>
import Child from "./components/Child.vue";
export default {
  components: { Child },
  data() {
    return {
      aaa: "123",
    };
  },
};
</script>

<style scoped></style>
