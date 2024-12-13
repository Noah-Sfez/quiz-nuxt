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
    <article class="flex-1 flex flex-col gap-5 max-w-xl mx-auto items-center text-center">
      <NuxtLink to="/" class="hover:underline">Retour</NuxtLink>
      <h1 v-if="quizData && quizData.quizTitle" class="underline text-6xl">{{ quizData.quizTitle }}</h1>
      <QuestionOne :question="quiz.questions[quiz.currentQuestionIndex.value]" />
    </article>
  </NuxtLayout>
</template>