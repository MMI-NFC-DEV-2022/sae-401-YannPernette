<script setup lang="ts">
import type { Film } from "@/types";
import { ref } from "vue";
import { supabase } from "@/supabase";

const props = defineProps<{
    data?: Film;
    id?: string;
}>();

const films = ref<Film>(props.data ?? {});

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
