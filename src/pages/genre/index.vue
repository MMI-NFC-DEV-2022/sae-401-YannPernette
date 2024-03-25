<script setup lang="ts">
import genrePreview from "@/components/genrePreview.vue";
import { supabase } from "@/supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const { data: Genre, error } = await supabase
    .from('Genre')
    .select('*')
</script>



<template>

    <div class="mx-[10%] pt-20">
        <h1 class="py-20 text-3xl font-sora font-bold uppercase tracking-wider">Tous les genres</h1>

        <div class="flex flex-wrap gap-10">
            <RouterLink v-for="genre in Genre" :key="genre.id" :to="{
                name: '/film/[id]',
                params: { id: genre.id },
            }">
                <genrePreview v-bind="{ ...genre, id: genre.id.toString() }" />
            </RouterLink>
        </div>
    </div>
</template>