<script setup lang="ts">

import filmPreview from "@/components/filmPreview.vue";
import { supabase } from "@/supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const { data: Film, error } = await supabase
    .from('Film')
    .select('*')
</script>



<template>

    <div class="mx-[10%]">
        <h1 class="py-20 text-2xl">Liste de tous les films</h1>

        <div class="flex flex-wrap gap-20">
            <RouterLink class="w-64" v-for="film in Film" :key="film.id" :to="{
                name: '/film/[id]',
                params: { id: film.id },
            }">
                <filmPreview v-bind="{ ...film, id: film.id.toString() }" />
            </RouterLink>
        </div>
    </div>
</template>