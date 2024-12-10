<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, inject } from 'vue'

const props = defineProps(
    {
        question: Object,
        required: true
    }
)

const { params } = useRoute()
const quiz = ref(null)
//const firstQuestion = ref(null)
const selectedAnswerIndex = ref(null)

const step = inject("step")

const nextStep = (index) => {
  selectedAnswerIndex.value = index
  step.value += 1
  console.log('Selected answer index:', selectedAnswerIndex.value)
}

//onMounted(async () => {
//  const response = await queryContent(`quiz/${params.quiz}`).findOne()
//  quiz.value = response 
//
//  if (quiz.value && quiz.value.quiz && quiz.value.quiz.questions && quiz.value.quiz.questions.length > 0) {
//    firstQuestion.value = quiz.value.quiz.questions[0]
//  }
//})
</script>

<template>
  <div>
    <h1>Première Question</h1>
    <div v-if="question">
      <h2>{{ question.question }}</h2>
      <div>
        <button
          v-for="(answer, index) in question.answers"
          :key="index"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 m-2"
          @click="nextStep(index)"
        >
          {{ answer }}
        </button>
      </div>
    </div>
    <div v-else>
      <p>Aucune question trouvée pour ce quiz.</p>
    </div>
  </div>
</template>