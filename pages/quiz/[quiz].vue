<script setup>
const { params } = useRoute()
const quizData = ref(null)

const response = await queryContent(`quiz/${params.quiz}`).findOne()
quizData.value = response
const quiz = useQuiz(quizData.value)
provide('quiz', quiz)
</script>

<template>
  <NuxtLayout name="header">
    <article class="flex-1 flex flex-col gap-8 max-w-2xl mx-auto items-center text-center py-10 px-5">
      <NuxtLink to="/" class="hover:underline text-blue-500 text-lg">Autre quiz</NuxtLink>
      <h1 v-if="quizData && quizData.quizTitle" class="underline text-4xl font-bold text-gray-800">{{ quizData.quizTitle }}</h1>
      <div v-if="quiz.currentQuestionIndex.value < quiz.questions.length" class="w-full mt-5">
        <QuestionOne :question="quiz.questions[quiz.currentQuestionIndex.value]" />
      </div>
      <div v-else class="w-full mt-5">
        <Score />
      </div>
    </article>
  </NuxtLayout>
</template>
