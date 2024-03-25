<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import filmPreview from "@/components/filmPreview.vue";

type Celebrite = Tables<'Celebrite'>;

const props = defineProps<{
    data?: Celebrite;
    id?: string;
}>();

const celebrites = ref<Celebrite & { Film: any[] }>({
    created_at: "",
    date_mort: null,
    date_naissance: null,
    genre: null,
    id: 0,
    lieu_naissance: null,
    nom: null,
    portrait: null,
    prenom: null,
    Film: []
});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Celebrite").select(`*, Film ( * )`).eq("id", props.id).single();
    if (error) console.error("error", error);
    else celebrites.value = data as unknown as Celebrite & { Film: any[] };
}

const formatDate = (date: string | number | Date) => {
    return format(new Date(date), 'dd MMMM yyyy', { locale: fr })
}
</script>


<template>
    <div class="pt-32 flex md:flex-col md:mx-[10%] justify-center items-center gap-20">
        <img class="w-60 rounded-lg" :src="celebrites.portrait || undefined" alt="">
        <div>
            <h1 class="font-sora font-semibold text-5xl mb-5">{{ celebrites.prenom }} {{ celebrites.nom }}</h1>
            <p class="text-lg mb-14"><span class="font-semibold">Genre :</span> {{ celebrites.genre }}</p>
            <p class="text-xl">{{ celebrites.prenom }} {{ celebrites.nom }} est né(e) le {{
            formatDate(celebrites.date_naissance || '') }} à {{ celebrites.lieu_naissance }}</p>
            <p class="text-xl" v-if="celebrites.date_mort">et mort le {{ formatDate(celebrites.date_mort || '') }}</p>
        </div>
    </div>

    <div class="mx-[7%] mt-28 mb-40">
        <h2 class="font-poppins font-semibold text-3xl uppercase mb-14">Oeuvres majeures : {{ celebrites.prenom }} {{
            celebrites.nom }}</h2>
        <ul>
            <li class="flex gap-10">
                <RouterLink class="w-64" v-for="film in celebrites.Film" :key="film.id" :to="{
            name: '/film/[id]',
            params: { id: film.id },
        }">
                    <filmPreview v-bind="{ ...film, id: film.id.toString() }" />
                </RouterLink>
            </li>
        </ul>
    </div>
</template>