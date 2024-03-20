<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import headerComposant from './components/headerComposant.vue';
</script>

<template>

  <headerComposant />

  <Suspense>
    <RouterView />
  </Suspense>


</template>
