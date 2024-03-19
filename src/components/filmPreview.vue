<script setup lang="ts">
import type { Film } from "@/types";
import { ref } from "vue";
import { supabase } from "@/supabase";

const props = defineProps<{
    data?: Film;
    id?: string;
}>();

const prevfilms = ref<Film>(props.data ?? {});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Film").select("*").eq("id", props.id).single();
    if (error) console.error("error", error);
    else prevfilms.value = data;
}
</script>


<template>
    <p>nom du film prev</p>
    <h1 class="text-2xl">{{ prevfilms.nom_original }}</h1>
    <img :src="prevfilms.cover" alt="">
</template>
