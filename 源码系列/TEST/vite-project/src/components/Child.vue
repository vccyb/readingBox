<template>
  <div>
    <h2>Child</h2>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    msg: {
      type: String,
      default(props) {
        console.log("props", props);
      },
    },
  },
  data() {
    return {
      childMsg: "Hello from child",
    };
  },
  methods: {
    getChildMSg() {
      console.log("method", this);
      return this.childMsg;
    },
  },
};
</script>

<style lang="scss" scoped></style>
