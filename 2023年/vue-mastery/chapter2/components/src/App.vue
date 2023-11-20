<template>
  <Greeting :age="age"/>
  <User :age="age" @age-change="updateAge" :ageUpdateFn="updateAgeCB"/>
</template>

<script >

import Greeting from './components/Greeting.vue'
import User from './components/User.vue'

export default {
  name: 'App',
  components: {
    Greeting,
    User
  },
  data() {
    return {
      age: 18
    }
  },
  methods: {
    updateAge(num) {
      this.age += num
    },
    updateAgeCB(num) {
      this.age += num
    }
  }
}
</script>



