<script setup lang="ts">
import collectionPreview from "@/components/collectionPreview.vue";
import { supabase } from "@/supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const { data: Collection, error } = await supabase
    .from('Collection')
    .select('*')
</script>



<template>

    <div class="mx-[10%] pt-20 mb-20">
        <h1 class="py-20 text-3xl font-sora font-bold uppercase tracking-wider">Toutes les collections</h1>

        <div class="flex flex-col gap-20">
            <div class="" v-for="collection in Collection" :key="collection.id">
                <collectionPreview v-bind="{ ...collection, id: collection.id.toString() }" />
            </div>
        </div>
    </div>
</template>