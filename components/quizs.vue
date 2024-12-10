<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  quizs: {
    type: Array,
    required: true
  }
})
const quizs = await queryContent("quiz").find();
</script>

<template>
  <div>
    <h1>Quiz List</h1>
    <NuxtLink v-for="quiz in quizs" :key="quiz._path" :to="`/quiz/${quiz._path.split('/').pop()}`">{{ quiz.title }}</NuxtLink>
  </div>
</template>