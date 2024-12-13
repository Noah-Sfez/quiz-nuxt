<script setup>
const props = defineProps({
  question: {
    type: Object,
    required: true
  }
})

const quiz = inject('quiz')
const { currentQuestionIndex, nextQuestion, selectedAnswersIndex, checkAnswer } = quiz
</script>

<template>
  <div class="p-6 bg-gray-100 flex flex-col items-center">
    <h1 class="text-3xl font-bold mb-4">Question {{ currentQuestionIndex + 1 }}</h1>
    <div v-if="question" class="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">{{ question.question }}</h2>
      <div class="flex flex-col space-y-2">
        <button
          v-for="(answer, index) in question.answers"
          :key="index"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          @click="checkAnswer(index)"
        >
          {{ answer }}
        </button>
      </div>
      <p class="mt-4 text-gray-600">{{ currentQuestionIndex + 1 }} / {{ quiz.questions.length }}</p>
    </div>
    <div v-else class="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
      <p class="text-red-500">Aucune question trouvée pour ce quiz.</p>
    </div>
  </div>
</template>
