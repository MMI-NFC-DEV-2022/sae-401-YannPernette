<script setup lang="ts">
import celebritePage from '@/components/celebritePage.vue';
import { useRoute } from 'vue-router/auto';

const route = useRoute('/celebrite/[id]');
</script>


<template>
    <div class="">
        <celebritePage :id="route.params.id" />
    </div>
</template>