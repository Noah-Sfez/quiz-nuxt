<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, inject } from 'vue'

const { params } = useRoute()
const quiz = ref(null)
const fourthQuestion = ref(null)

const step = inject("step");

const nextStep = () => {
    step.value += 1;
}

onMounted(async () => {
  const response = await queryContent(`quiz/${params.quiz}`).findOne()
  quiz.value = response 

  if (quiz.value && quiz.value.quiz && quiz.value.quiz.questions && quiz.value.quiz.questions.length > 0) {
    fourthQuestion.value = quiz.value.quiz.questions[3]
  }
})
</script>


<template>
  <div>
    <h1>Quatrième Question</h1>
    <div v-if="fourthQuestion">
      <h2>{{ fourthQuestion.question }}</h2>
      <ul>
        <li v-for="(answer, index) in fourthQuestion.answers" :key="index">{{ answer }}</li>
      </ul>
      <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" @click="nextStep">Suivant</button>
    </div>
    <div v-else>
      <p>Aucune question trouvée pour ce quiz.</p>
    </div>
  </div>
</template>