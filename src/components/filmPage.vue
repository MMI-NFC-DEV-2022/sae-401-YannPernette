<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";

type Film = Tables<'Film'>;

const props = defineProps<{
    data?: Film;
    id?: string;
}>();

const films = ref<Film & { Genre: any[] }>({
    cover: null,
    created_at: "",
    date_sortie: null,
    duree: null,
    id: 0,
    nom_original: null,
    nom_traduit: null,
    synopsis: null,
    Genre: [],
    banniere: null,
    note: null
});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Film").select(`
  id,
  nom_traduit,
  cover,
  banniere,
  synopsis, 
  Genre ( id, nom )
`)
        .eq("id", props.id).single();
    if (error) console.error("error", error);
    else films.value = {
        ...data,
        created_at: "",
        date_sortie: null,
        duree: null,
        nom_original: null,
        // banniere: null,
        note: null
    };
}
</script>


<template>

    <div class="h-[30%] overflow-hidden relative">
        <img class="w-screen h-96 object-cover brightness-50" :src="films.banniere || undefined" alt="">

        <div class="absolute bottom-0">
            <img class="h-80" :src="films.cover || undefined" alt="">
        </div>
    </div>

    <div class="mx-[10%]">

        <ul class="flex flex-wrap-reverse gap-2 m-4">
            <li class="bg-white rounded-full py-1 px-3 text-xs" v-for="genre in films.Genre" :key="genre.id">{{
            genre.nom }}</li>
        </ul>

        <div class="mb-20">
            <h2 class="font-poppins font-semibold text-xl uppercase">Synopsis</h2>
            <p>{{ films.synopsis }}</p>
        </div>

        <div>
            <h2 class="font-poppins font-semibold text-xl uppercase">Cast</h2>

        </div>

    </div>
</template>
