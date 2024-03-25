<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import headerComposant from './components/headerComposant.vue';
import footerComposant from './components/footerComposant.vue';
</script>

<template>

  <headerComposant />

  <Suspense>
    <RouterView />
  </Suspense>

  <footerComposant />

</template>
