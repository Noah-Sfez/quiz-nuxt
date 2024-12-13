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
  <div>
    <h1>Question {{ currentQuestionIndex + 1 }}</h1>
    <div v-if="question">
      <h2>{{ question.question }}</h2>
      <div>
        <button
          v-for="(answer, index) in question.answers"
          :key="index"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 m-2"
          @click="checkAnswer(index)"
        >
          {{ answer }}
        </button>
      </div>
      <p>{{ currentQuestionIndex + 1 }} / {{ quiz.questions.length }}</p>
    </div>
    <div v-else>
      <p>Aucune question trouvée pour ce quiz.</p>
    </div>
  </div>
</template>