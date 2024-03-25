<script setup lang="ts">
import type { Tables } from "@/supabase-types";
import { ref } from "@vue/reactivity";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router/auto";

const router = useRouter();

type Film = Tables<'Film'>;

const props = defineProps<{
    data?: Film;
    id?: string;
}>();

const film = ref<Film>({
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
    bande_originale: null,
    trailer: null,
    pays: null,
    Pays: {
        id: 0,
        nom: "",
        drapeau: null
    },
});

const pays = ref<Tables<'Pays'>[]>([]);


if (props.id !== undefined) {
    const { data, error } = await supabase.from("Film").select("*, pays (*)").eq("id", props.id).single();
    if (error) console.error("error", error);
    else film.value = data;
}

const { data, error } = await supabase.from('Pays').select('*');
if (error) {
    console.error('error', error);
} else {
    pays.value = data;
}

async function upsertFilm(dataForm: any, node: { setErrors: (arg0: string[]) => void; }) {
    const { data, error } = await supabase.from("Film").upsert(dataForm).select("id").single();
    if (error) node.setErrors([error.message])
    else {
        console.log("data :", data);
        node.setErrors([]);
        router.push({ name: "/film/[id]", params: { id: data.id } });
    }
}
</script>


<template>
    <div class="pt-32">
        <!-- On passe la "ref" à FormKit -->
        <FormKit type="form" @submit="upsertFilm" v-model="film" :config="{
            classes: {
                form: 'border-2 border-gray-300 py-8 px-20 rounded-lg w-[50rem] mx-auto',
                input: 'p-1 rounded border-gray-300 shadow-sm border mb-6 w-full',
                label: 'text-gray-600',
            },
        }" :submit-attrs="{ classes: { input: 'bg-red-300 p-4 mt-4 rounded w-full mb-0' } }">
            <FormKit name="nom_original" label="Nom original" />
            <FormKit name="nom_traduit" label="Nom traduit" />
            <FormKit name="cover" label="Cover (lien)" />
            <FormKit name="synopsis" label="Synopsis" />
            <FormKit name="duree" label="Durée" />
            <FormKit name="date_sortie" label="Date de sortie" />
            <FormKit name="banniere" label="Bannière (lien)" />
            <FormKit name="note" label="Note" />
            <FormKit name="trailer" label="Trailer (lien)" />
            <FormKit name="bande_originale" label="Bande originale (lien)" />
            <FormKit name="pays" label="Pays" type="select">
                <option value="pays" disabled>Choisir l'ID du pays lié</option>
                <option v-for="paysItem in pays" :key="paysItem.id" :value="paysItem.id">
                    {{ paysItem.nom }}
                </option>
            </FormKit>
        </FormKit>
    </div>
</template>