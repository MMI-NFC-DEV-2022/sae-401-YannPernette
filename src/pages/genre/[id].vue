<script setup lang="ts">
import genrePage from '@/components/genrePage.vue';
import { useRoute } from 'vue-router/auto';

const route = useRoute('/genre/[id]');
</script>


<template>
    <div class="">
        <genrePage :id="route.params.id" />
    </div>
</template>