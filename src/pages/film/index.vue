<script setup lang="ts">

import filmPreview from "@/components/filmPreview.vue";
import { supabase } from "@/supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const { data: Film, error } = await supabase
    .from('Film')
    .select('*')
</script>



<template>
    <h1>Liste de tous les films</h1>

    <div class="flex flex-wrap gap-2">
            <RouterLink class="w-64" v-for="film in Film" :key="film.id" :to="{
                name: '/film/[id]',
                params: { id: film.id },
            }">
                <filmPreview v-bind="film" />
            </RouterLink>
        </div>
</template>