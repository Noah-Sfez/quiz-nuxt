<template>
  <NuxtLayout name="header">
  <div class="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-700 p-4">
    <h1 class="text-4xl font-bold mb-4">Erreur</h1>
    <p class="text-lg mb-6">Une erreur est survenue. Veuillez réessayer plus tard.</p>
    <NuxtLink to="/" class="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition duration-300">
      Retour à l'accueil
    </NuxtLink>
  </div>
  </NuxtLayout>
</template>
