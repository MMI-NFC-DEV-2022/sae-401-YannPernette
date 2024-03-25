<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";
import Star from "@/components/icon/Star.vue";
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

type Support = Tables<'Support'>;

const props = defineProps<{
    data?: Support;
    id?: string;
}>();

const supports = ref<Support & { Film: any[] }>({
    created_at: "",
    date_sortie: null,
    format_audio: null,
    format_video: null,
    id: 0,
    id_film: null,
    image_type: null,
    is_location_sponsor: null,
    is_physique: null,
    is_vente_sponsor: null,
    langues_audio: null,
    langues_sous_titres: null,
    lien_location: null,
    lien_vente: null,
    location_dispo: null,
    note: null,
    prix_location: null,
    prix_vente: null,
    type: null,
    vente_dispo: null,
    version_film: null,
    Film: []
});

if (props.id !== undefined) {
    const { data, error } = await supabase.from("Support").select(`*, Film ( * )`).eq("id", props.id).single();
    if (error) console.error("error", error);
    else supports.value = data as unknown as Support & { Film: any[] };
}


const formatDate = (date: string | number | Date) => {
    return format(new Date(date), 'dd MMMM yyyy', { locale: fr })
}
</script>

<template>
    <div class="flex justify-center items-center gap-24">
        <div class="flex flex-col gap-3 items-center">
            <div class="relative flex flex-col items-center">
                <img class="w-60 rounded-t-lg" :src="supports.Film.cover" alt="">
                <div class="absolute bottom-0 backdrop-blur-md">
                    <img class="w-full" :src="supports.image_type ?? ''" alt="">
                </div>
            </div>
            <div>
                <h2 class="font-sora font-semibold text-3xl">{{ supports.Film.nom_traduit }}</h2>
                <h1 class="text-xl">Support : {{ supports.type }}</h1>
            </div>
        </div>

        <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-5">
                <div>
                    <h3 class="font-poppins font-semibold text-3xl uppercase mb-2">Version : {{ supports.version_film }}
                    </h3>
                    <p class="italic text-xl">Sortie le : {{ formatDate(supports.date_sortie || '') }}</p>
                </div>

                <div class="flex items-center gap-2">
                    <p class="text-3xl font-poppins font-light">{{ supports.note }}</p>
                    <Star class="size-8" />
                </div>
            </div>

            <div class="flex flex-col gap-5">
                <div>
                    <p>Format vidéo : {{ supports.format_video }}</p>
                    <p>Format audio : {{ supports.format_audio }}</p>
                </div>
                <div>
                    <p>Langues disponibles : {{ supports.langues_audio }}</p>
                    <p>Sous-titres disponibles : {{ supports.langues_sous_titres }}</p>
                </div>
            </div>

            <div>
                <div v-if="supports.vente_dispo">
                    <a target="_blank" :href="supports.lien_vente ?? ''">
                        <div
                            class="border-2 border-[#FFCB47] hover:bg-[#FFCB47] hover:text-black transition-colors duration-300 rounded-md px-5 py-2 w-fit">
                            <p class="text-lg">Acheter</p>
                        </div>
                    </a>
                    <p v-if="supports.is_vente_sponsor" class="text-xs mt-1">* en cliquant sur ce lien, nous pouvons
                        recevoir
                        une
                        compensation financière ou d'autres avantages
                    </p>
                </div>

                <div v-else>
                    <a target="_blank" :href="supports.lien_location ?? ''">
                        <div
                            class="border-2 border-[#FFCB47] hover:bg-[#FFCB47] hover:text-black transition-colors duration-300 rounded-md px-5 py-2 w-fit">
                            <p class="text-lg">Louer</p>
                        </div>
                    </a>
                    <p v-if="supports.is_location_sponsor" class="text-xs mt-1">* en cliquant sur ce lien, nous pouvons
                        recevoir
                        une
                        compensation financière ou d'autres avantages
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>