<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import filmPreview from "@/components/filmPreview.vue";

type Genre = Tables<'Genre'>;

const props = defineProps<{
    data?: Genre;
    id?: string;
}>();

const genres = ref<Genre & { Film: any[] }>({
    created_at: "",
    id: 0,
    nom: null,
    Film: []
});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Genre").select(`*, Film ( * )`).eq("id", props.id).single();
    if (error) console.error("error", error);
    else genres.value = data as unknown as Genre & { Film: any[] };
}
</script>


<template>
    <div class="pt-32 mx-[7%]">
        <h1 class="font-sora font-semibold text-5xl mb-16">Tous les films de la catégorie {{ genres.nom }}</h1>
        <ul>
            <li class="flex gap-10">
                <RouterLink class="w-64" v-for="film in genres.Film" :key="film.id" :to="{
            name: '/film/[id]',
            params: { id: film.id },
        }">
                    <filmPreview v-bind="{ ...film, id: film.id.toString() }" />
                </RouterLink>
            </li>
        </ul>
    </div>
</template>