<script setup>
const { params } = useRoute()

const data = await queryContent(`quiz/${params.quiz}`).findOne()
console.log(data)
const quiz = useQuiz(data)

provide('quiz', quiz)   
</script>

<template>
  <NuxtLayout name="header">
    <article class="flex-1 flex flex-col gap-5 max-w-xl mx-auto items-center text-center">
      <NuxtLink to="/" class="hover:underline">Retour</NuxtLink>
      <h1 v-if="quiz && quiz.quizTitle" class="underline text-6xl">{{ quiz.quizTitle }}</h1>
      <ButtonStart @start="startQuiz" v-if="!showQuestionOne" />
      <QuestionOne :question="quiz.questions[0]"/>
      
    </article>
  </NuxtLayout>
</template>