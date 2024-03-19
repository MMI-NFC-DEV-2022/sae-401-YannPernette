<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";

type Film = Tables<'Film'>;

const props = defineProps<{
    data?: Film;
    id?: string;
}>();

const films = ref<Film>(props.data ?? {
    cover: null,
    created_at: "",
    date_sortie: null,
    duree: null,
    id: 0,
    nom_original: null,
    nom_traduit: null,
    synopsis: null,
});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Film").select("*").eq("id", props.id).single();
    if (error) console.error("error", error);
    else films.value = data;
}
</script>


<template>
    <p>nom du film</p>
    <h1 class="text-2xl">{{ films.nom_original }}</h1>
</template>
