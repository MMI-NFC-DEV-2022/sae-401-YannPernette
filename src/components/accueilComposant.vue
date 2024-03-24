<script setup lang="ts">
import Logo from '../components/icon/Logo.vue';
import ArrowScroll from '../components/icon/ArrowScroll.vue';
</script>

<template>
    <div class="relative overflow-hidden">
        <img class="h-screen w-full object-cover" src="/images/movie_theatre.webp" alt="Salle de cinéma - Accueil">

        <div class="absolute top-[18%] left-1/2 transform -translate-x-1/2 flex items-center gap-10">
                <Logo class="size-36" color="white" />
                <h1 class="text-white top-20 font-sora text-7xl font-semibold">MovieSpotter</h1>
        </div>

        <div class="absolute top-[40%] left-1/2 transform -translate-x-1/2">
            <p class="text-white text-xl font-semibold uppercase shadow-2xl text-center">Tous vos films préférés en un seul endroit</p>
        </div>

        <div class="absolute bottom-[5%] left-1/2 transform -translate-x-1/2">
            <ArrowScroll class="size-16 slideUp" />
        </div>
    </div>
</template>