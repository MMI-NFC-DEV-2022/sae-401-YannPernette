<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";

type Genre = Tables<'Genre'>;

const props = defineProps<{
    data?: Genre;
    id?: string;
}>();

const prevgenres = ref<Genre>(props.data as Genre || {});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Genre").select("*").eq("id", props.id).single();
    if (error) console.error("error", error);
    else prevgenres.value = data;
}
</script>


<template>
    <div class="rounded-full px-5 py-2 border-[3px] border-black hover:text-white hover:bg-black transition-colors duration-300">
        <h1 class="text-2xl font-sora font-medium">{{ prevgenres.nom }}</h1>
    </div>
</template>