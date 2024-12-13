<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  quizs: {
    type: Array,
    required: true
  }
})
const quizs = await queryContent("quiz").find();
console.log(quizs)
</script>

<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Quiz List</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <NuxtLink 
        v-for="quiz in quizs" 
        :key="quiz._path" 
        :to="`/quiz/${quiz._path.split('/').pop()}`" 
        class="block p-4 bg-white rounded-lg shadow hover:bg-gray-50 transition"
      >
        <h2 class="text-xl font-semibold mb-2">{{ quiz.title }}</h2>
        <p class="text-gray-600">{{ quiz.quizSynopsis }}</p>
      </NuxtLink>
    </div>
  </div>
</template>