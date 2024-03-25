<script setup lang="ts">
import supportPage from '@/components/supportPage.vue';
import { useRoute } from 'vue-router/auto';

const route = useRoute('/support/[id]');
</script>


<template>
    <div class="pt-40">
        <supportPage :id="route.params.id" />
    </div>
</template>