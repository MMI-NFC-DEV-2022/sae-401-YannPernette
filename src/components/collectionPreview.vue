<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";
import filmPreview from "@/components/filmPreview.vue";

type Collection = Tables<'Collection'>;

const props = defineProps<{
    data?: Collection;
    id?: string;
}>();

const prevcollections = ref<Collection & { Film: any[] }>({
    created_at: "",
    description: null,
    id: 0,
    nom: null,
    Film: []
});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Collection").select(`
  id,
  nom,
  description,
  Film ( * )
`)
        .eq("id", props.id).single();
    if (error) console.error("error", error);
    else prevcollections.value = {
        ...data,
        created_at: ""
    };
}
</script>


<template>
    <div class="flex gap-20 items-center w-fit py-6 px-10 rounded-lg border-2 border-gray-400">
        <div class="w-40 flex flex-col gap-5">
            <h4 class="font-poppins text-4xl">{{ prevcollections.nom }}</h4>
            <p>{{ prevcollections.description }}</p>
        </div>

        <div class="h-60 border border-gray-400"></div>

        <div>
            <ul>
                <li class="flex gap-10">
                    <RouterLink class="w-64" v-for="film in prevcollections.Film" :key="film.id" :to="{
                name: '/film/[id]',
                params: { id: film.id },
            }">
                        <filmPreview v-bind="{ ...film, id: film.id.toString() }" />
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
