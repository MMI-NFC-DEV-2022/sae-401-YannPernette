<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";

type Film = Tables<'Film'>;

const props = defineProps<{
    data?: Film;
    id?: string;
}>();

const prevfilms = ref<Film & { Genre: any[] }>( {
    cover: null,
    created_at: "",
    date_sortie: null,
    duree: null,
    id: 0,
    nom_original: null,
    nom_traduit: null,
    synopsis: null,
    Genre: [],
});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Film").select(`
  id,
  nom_traduit,
  cover,
  synopsis, 
  Genre ( id, nom )
`)
        .eq("id", props.id).single();
    if (error) console.error("error", error);
    else prevfilms.value = {
        ...data,
        created_at: "",
        date_sortie: null,
        duree: null,
        nom_original: null,
    };
}
</script>


<template>
    <div class="relative darkenImg flex flex-col items-center">
        <p class="absolute z-10 top-0 text-white text-sm p-4 line-clamp-4 opacity-0 transition-opacity duration-300">{{
            prevfilms.synopsis }}</p>
        <img class="w-60 rounded-lg" :src="prevfilms.cover || undefined" alt="Cover Film">
        <h1 class="mt-2 text-center text-2xl font-sora font-medium">{{ prevfilms.nom_traduit }}</h1>
        <ul>
            <li v-for="genre in prevfilms.Genre" :key="genre.id">{{ genre.nom }}</li>
        </ul>
    </div>
</template>
