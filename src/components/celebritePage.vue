<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";

type Celebrite = Tables<'Celebrite'>;

const props = defineProps<{
    data?: Celebrite;
    id?: string;
}>();

const prevcelebrites = ref<Celebrite>(props.data as Celebrite || {});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Celebrite").select("*").eq("id", props.id).single();
    if (error) console.error("error", error);
    else prevcelebrites.value = data;
}
</script>


<template>
    <h1>Page 1 celebrite</h1>
    <div class="darkenImg flex flex-col items-center">
        <img class="w-40 rounded-lg" :src="prevcelebrites.portrait || undefined" alt="">
        <p class="font-medium pt-2 text-left">{{ prevcelebrites.prenom }} {{ prevcelebrites.nom }}</p>
    </div>
</template>