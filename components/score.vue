<script setup>
const quiz = inject('quiz')
const { score, resetQuiz } = quiz
</script>

<template>
  <div class="flex flex-col items-center justify-center bg-gray-100 text-gray-700 p-4">
    <h1 class="text-4xl font-bold mb-4">Score: {{ score }} / {{ quiz.questions.length * 5 }}</h1>
    <button @click="resetQuiz" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
      Recommencer
    </button>
  </div>
</template>