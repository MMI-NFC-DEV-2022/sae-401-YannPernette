<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";
import celebritePreview from "./celebritePreview.vue";
import supportPreview from "./supportPreview.vue";
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import Horloge from '@/components/icon/Horloge.vue';

type Film = Tables<'Film'>;

const props = defineProps<{
    data?: Film;
    id?: string;
}>();

const films = ref<Film & { Genre: any[] } & { Celebrite: any[] } & { Support: any[] }>({
    cover: null,
    created_at: "",
    date_sortie: null,
    duree: null,
    id: 0,
    nom_original: null,
    nom_traduit: null,
    synopsis: null,
    banniere: null,
    note: null,
    Genre: [],
    Celebrite: [],
    Support: [],
    bande_originale: null,
    trailer: null,
    pays: null,
    Pays: {
        id: 0,
        nom: "",
        drapeau: null
    },
});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Film").select(`*, Genre ( * ), Celebrite ( * ), Support ( * ), Pays ( * )`).eq("id", props.id).single();
    if (error) console.error("error", error);
    else films.value = data as unknown as Film & { Genre: any[] } & { Celebrite: any[] } & { Support: any[] } & { Pays: any[] };
}


const formatDate = (date: string | number | Date) => {
    return format(new Date(date), 'dd MMMM yyyy', { locale: fr })
}
</script>



<template>

    <div class="h-[30%] relative">
        <img class="w-screen h-96 object-cover brightness-50" :src="films.banniere || undefined" alt="">

        <div class="absolute bottom-0 w-full justify-center flex gap-20 items-center text-white">
            <div class="mb-[-65px] z-20">
                <img class="h-72" :src="films.cover || undefined" alt="">
            </div>

            <div class="flex flex-col gap-4">
                <h1 class="font-sora font-semibold text-5xl">{{ films.nom_traduit }}</h1>
                <h4 v-show="films.nom_original !== null && films.nom_original !== films.nom_traduit"
                    class="font-sora font-semibold text-2xl">
                    ({{ films.nom_original }})
                </h4>
                <p class="text-xl">{{ formatDate(films.date_sortie || '') }}</p>
                <ul>
                    <li class="flex flex-wrap-reverse gap-4">
                        <RouterLink class="bg-white text-black rounded-full py-1 px-3" v-for="genre in films.Genre"
                            :key="genre.id" :to="{
            name: '/genre/[id]',
            params: { id: genre.id },
        }">
                            {{ genre.nom }}
                        </RouterLink>
                    </li>
                </ul>
            </div>

            <div class="flex flex-col gap-6">
                <div class="flex gap-4 items-center">
                    <img class="w-10" :src="(films.Pays.drapeau) || undefined" alt="Drapeau du pays d'origine">
                    <p>{{ films.Pays.nom }}</p>
                </div>
                <div class="flex gap-2 items-center font-light text-lg">
                    <Horloge class="w-10" />
                    <p>{{ films.duree }}</p>
                </div>
                <p class="text-4xl font-sora border-2 py-3 px-4 rounded-lg">{{ films.note }} <span
                        class="text-lg font-light">/ 10</span></p>
            </div>
        </div>
    </div>

    <div class="mx-[7%] mb-40">

        <div class="mt-28 mb-16">
            <h2 class="font-poppins font-semibold text-3xl uppercase mb-6">Synopsis</h2>
            <p class="max-w-[70%]">{{ films.synopsis }}</p>
        </div>

        <div class="mb-20">
            <h2 class="font-poppins font-semibold text-3xl uppercase mb-6">Cast</h2>

            <ul>
                <li class="flex flex-wrap-reverse gap-14">
                    <RouterLink v-for=" celebrite  in  films.Celebrite " :key="celebrite.id" :to="{
            name: '/celebrite/[id]',
            params: { id: celebrite.id },
        }
            ">
                        <celebritePreview v-bind="{ ...celebrite, id: celebrite.id.toString() }" />
                    </RouterLink>
                </li>
            </ul>
        </div>

        <div class="mb-20">
            <h2 class="font-poppins font-semibold text-3xl uppercase mb-8">Où regarder ce film ?</h2>

            <div class="flex justify-between">
                <div>
                    <h4 class="font-semibold text-2xl mb-8">Supports physiques</h4>
                    <ul>
                        <li class="flex flex-col gap-8">
                            <div v-for=" support  in  films.Support " :key="support.id">
                                <supportPreview v-if="support.is_physique"
                                    v-bind="{ ...support, id: support.id.toString() }" />
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-semibold text-2xl mb-8">Supports digitaux</h4>
                    <ul>
                        <li class="flex flex-col">
                            <div v-for=" support  in  films.Support " :key="support.id">
                                <supportPreview v-if="!support.is_physique"
                                    v-bind="{ ...support, id: support.id.toString() }" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="flex justify-between">
            <div class="w-[50%]">
                <h2 class="font-poppins font-semibold text-3xl uppercase mb-6">Trailer</h2>
                <iframe width="100%" height="400" :src="films.trailer ?? undefined" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>

            <div class="w-[40%]">
                <h2 class="font-poppins font-semibold text-3xl uppercase mb-6">Bande originale</h2>
                <iframe :src="films.bande_originale ?? undefined" width="100%" height="400" frameborder="0"
                    allowtransparency="true"></iframe>
            </div>
        </div>

    </div>
</template>
