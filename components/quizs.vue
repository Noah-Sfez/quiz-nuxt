<script setup>
const quizs = await queryContent("quiz").find();
</script>

<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-4xl font-extrabold mb-8 text-center text-gray-800">Quiz List</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink 
      v-for="quiz in quizs" 
      :key="quiz._path" 
      :to="`/quiz/${quiz._path.split('/').pop()}`" 
      class="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
      >
      <h2 class="text-2xl font-bold mb-3 text-gray-900">{{ quiz.title }}</h2>
      <p class="text-gray-700 mb-4">{{ quiz.quizSynopsis }}</p>
      <div class="mt-auto">
        <p class="text-gray-500">Nombre de questions : {{ quiz.questions.length }}</p>
      </div>
      </NuxtLink>
    </div>
  </div>
</template>