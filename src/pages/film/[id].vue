<script setup lang="ts">
import filmPage from '@/components/filmPage.vue';
import { useRoute } from 'vue-router/auto';

const route = useRoute('/film/[id]');
</script>


<template>
    <div class="">
        <filmPage :id="route.params.id" />
    </div>
</template>