<template>
  <button @click="onClickAge">update age Event</button>
  <button @click="ageUpdateFn(100)">update Age CB</button>
  <p>The user is {{ age }} years old</p>
  <p>{{ ageDoubled }}</p>
</template>

<script>
  export default {
    name: "User",
    props: {
      age: {
        type: Number,
        required: true
      },
      ageUpdateFn: Function
    },
    emits: ["age-change"],
    computed: {
      ageDoubled() {
        return this.age * 2
      }
    },
    methods: {
      onClickAge() {
        this.$emit("age-change", 3)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>