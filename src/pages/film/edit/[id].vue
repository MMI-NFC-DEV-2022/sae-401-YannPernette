<script setup lang="ts">
import formulaireFilm from '@/components/formulaireFilm.vue';
import { useRoute } from 'vue-router/auto';

const route = useRoute('/film/edit/[id]');
</script>


<template>
    <formulaireFilm :id="route.params.id" />
</template>