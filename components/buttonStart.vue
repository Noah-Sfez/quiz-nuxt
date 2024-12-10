<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['start'])

const handleClick = () => {
  emit('start')
}
</script>

<template>
  <button @click="handleClick" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
    Commencer le Quiz
  </button>
</template>