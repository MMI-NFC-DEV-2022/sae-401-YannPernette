<script setup lang="ts">
import celebritePreview from "@/components/celebritePreview.vue";
import { supabase } from "@/supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const { data: Celebrite, error } = await supabase
    .from('Celebrite')
    .select('*')
</script>



<template>

    <div class="mx-[10%]">
        <h1 class="py-20 text-2xl">Liste de toutes les célébrités</h1>

        <div class="flex flex-wrap gap-20">
            <RouterLink class="w-64" v-for="celebrite in Celebrite" :key="celebrite.id" :to="{
                name: '/celebrite/[id]',
                params: { id: celebrite.id },
            }">
                <celebritePreview v-bind="{ ...celebrite, id: celebrite.id.toString() }" />
            </RouterLink>
        </div>
    </div>
</template>