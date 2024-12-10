<script setup>
import { ref, onMounted } from 'vue'
import { useQuiz } from '~/composables/useQuiz'
import Quizs from '~/components/quizs.vue'

const { quiz, loadQuiz, getQuizArray } = useQuiz()
const quizData = ref([])

onMounted(async () => {
  await loadQuiz()
  quizData.value = getQuizArray()
})
</script>

<template>
  <div>
    <NuxtLayout name="header">
      <h1>Quizzzzzzzzzzzzzz</h1>
      <Quizs :quizs="quizData" />
    </NuxtLayout>
  </div>
</template>