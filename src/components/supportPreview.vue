<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "vue";
import { supabase } from "@/supabase";
import Star from "@/components/icon/Star.vue";

type Support = Tables<'Support'>;

const props = defineProps<{
    data?: Support;
    id?: string;
}>();

const prevsupports = ref<Support & { Film: any[] }>({
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
    else prevsupports.value = data as unknown as Support & { Film: any[] };
}
</script>

<template>
    <div class="flex gap-10 items-center">
        <img class="w-20" :src="prevsupports.image_type ?? ''" alt="">
        <div class="flex flex-col w-40">
            <p class="font-medium text-lg leading-tight">{{ prevsupports.type }}</p>
            <p class="italic">{{ prevsupports.version_film }}</p>
        </div>
        <div class="flex items-center gap-1">
            <p class="text-xl font-poppins font-light">{{ prevsupports.note }}</p>
            <Star class="size-5" />
        </div>
        <p class="text-xl font-light">{{ prevsupports.prix_vente }} €</p>

        <RouterLink to="/film">
            <div
                class="ml-2 bg-[#FFCB47] hover:bg-black hover:text-[#FFCB47] transition-colors duration-300 rounded-md px-5 py-2 w-fit">
                <p class="text-lg">Voir</p>
            </div>
        </RouterLink>
    </div>
</template>