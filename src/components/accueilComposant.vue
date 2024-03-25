<script setup lang="ts">
import Logo from '../components/icon/Logo.vue';
import ArrowScroll from '../components/icon/ArrowScroll.vue';
import filmPreview from "@/components/filmPreview.vue";
import celebritePreview from "@/components/celebritePreview.vue";
import collectionPreview from "@/components/collectionPreview.vue";

import { supabase } from "@/supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const { data: Film, error: filmError } = await supabase
    .from('Film')
    .select('*')
    .limit(3);

    const { data: Celebrite, error: celebriteError } = await supabase
    .from('Celebrite')
    .select('*')
    .limit(3);

const { data: Collection, error: collectionError } = await supabase
    .from('Collection')
    .select('*')
    .limit(1);
</script>

<template>
    <div class="relative overflow-hidden">
        <img class="h-screen w-full object-cover" src="/images/movie_theatre.webp" alt="Salle de cinéma - Accueil">

        <div class="absolute top-[18%] left-1/2 transform -translate-x-1/2 flex items-center gap-10">
            <Logo class="size-36" color="white" />
            <h1 class="text-white top-20 font-sora text-7xl font-semibold">MovieSpotter</h1>
        </div>

        <div class="absolute top-[40%] left-1/2 transform -translate-x-1/2">
            <p class="text-white text-xl font-semibold uppercase shadow-2xl text-center">Tous vos films préférés en un
                seul endroit</p>
        </div>

        <div class="absolute bottom-[5%] left-1/2 transform -translate-x-1/2">
            <a href="#Accueil">
                <ArrowScroll class="size-16 slideUp" />
            </a>
        </div>
    </div>


    <div class="mx-[10%] mb-20">
        <h2 id="Accueil" class="pt-20 pb-10 text-3xl font-sora font-bold uppercase tracking-wider">Sélection des films
            du moment</h2>

        <div class="flex flex-wrap gap-20 mb-6">
            <RouterLink class="w-64" v-for="film in Film" :key="film.id" :to="{
                name: '/film/[id]',
                params: { id: film.id },
            }">
                <filmPreview v-bind="{ ...film, id: film.id.toString() }" />
            </RouterLink>
        </div>

        <RouterLink to="/film">
            <div
                class="ml-2 bg-[#FFCB47] hover:bg-black hover:text-[#FFCB47] transition-colors duration-300 rounded-md px-5 py-2 w-fit">
                <p class="text-2xl">Voir plus de films</p>
            </div>
        </RouterLink>


        <h2 id="Accueil" class="pt-28 pb-10 text-3xl font-sora font-bold uppercase tracking-wider">Sélection des
            célébrités
            du moment</h2>

        <div class="flex flex-wrap gap-20 mb-6">
            <RouterLink class="w-64" v-for="celebrite in Celebrite" :key="celebrite.id" :to="{
                name: '/celebrite/[id]',
                params: { id: celebrite.id },
            }">
                <celebritePreview v-bind="{ ...celebrite, id: celebrite.id.toString() }" />
            </RouterLink>
        </div>

        <RouterLink to="/celebrite">
            <div
                class="ml-2 bg-[#FFCB47] hover:bg-black hover:text-[#FFCB47] transition-colors duration-300 rounded-md px-5 py-2 w-fit">
                <p class="text-2xl">Voir plus de célébrités</p>
            </div>
        </RouterLink>


        <h2 id="Accueil" class="pt-28 pb-10 text-3xl font-sora font-bold uppercase tracking-wider">Collection choisie
            par la communauté</h2>

        <div class="flex flex-col gap-20 mb-6">
            <div class="" v-for="collection in Collection" :key="collection.id">
                <collectionPreview v-bind="{ ...collection, id: collection.id.toString() }" />
            </div>
        </div>

        <RouterLink to="/collection">
            <div
                class="ml-2 bg-[#FFCB47] hover:bg-black hover:text-[#FFCB47] transition-colors duration-300 rounded-md px-5 py-2 w-fit">
                <p class="text-2xl">Voir plus de collections</p>
            </div>
        </RouterLink>
    </div>
</template>