<script setup>
const { params } = useRoute()

const quiz = await queryContent(`quiz/${params.quiz}`).findOne();
</script>

<template>
    <NuxtLayout name="header">
    <article class="flex-1 flex flex-col gap-5 max-w-xl mx-auto items-center text-center">
        <NuxtLink to="/" class="hover:underline">Retour</NuxtLink>

        <h1 class="underline text-6xl">{{ quiz.title }}</h1>
        
    </article>
    </NuxtLayout>
</template>