<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";

type Film = Tables<'Film'>;

const props = defineProps<{
    data?: Film;
    id?: string;
}>();

const prevfilms = ref<Film & { Genre: any[] }>({
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
note: null,
bande_originale: null,
pays: null,
trailer: null,
Pays: {
id: 0,
nom: "",
drapeau: null
}
});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Film").select(`*, Genre ( * ), Pays ( * )`).eq("id", props.id).single();
    if (error) console.error("error", error);
    else prevfilms.value = data as unknown as Film & { Genre: any[] } & { Pays: any[] };
}
</script>


<template>
    <div class="darkenImg flex flex-col items-center">
        <div class="relative">
            <p
                class="absolute z-10 top-0 text-white text-sm p-4 line-clamp-4 opacity-0 transition-opacity duration-300">
                {{
                    prevfilms.synopsis }}</p>
            <img class="w-60 rounded-lg" :src="prevfilms.cover || undefined" alt="Cover Film">
            <ul class="flex flex-wrap-reverse gap-2 absolute z-10 bottom-0 m-4 opacity-0 transition-opacity duration-300">
                <li class="bg-white rounded-full py-1 px-3 text-xs" v-for="genre in prevfilms.Genre" :key="genre.id">{{ genre.nom }}</li>
            </ul>
        </div>

        <h1 class="mt-2 text-center text-2xl font-sora font-medium">{{ prevfilms.nom_traduit }}</h1>
    </div>
</template>
