<template>
  <form @submit.prevent="submit">
    <input v-model="username" />
  </form>
</template>

<script lang="ts" setup>
import { ref, computed, defineEmits } from 'vue'

const username = ref('')

const emit = defineEmits(['signup'])

const error = computed(() => {
  return username.value.length < 8
})

const submit = () => {
  if (!error.value) {
    emit('signup', username.value)
  }
}
</script>
