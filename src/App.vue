<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { supabase, user } from '@/supabase';
</script>

<template>
  <header>
    <nav class="flex gap-10 jushover:bg-white hover:text-gray-600 border-solid border-2 py-2 px-4 h-12">
      Bonjour je suis un header
    </nav>
  </header>


  <Suspense>
    <RouterView />

  </Suspense>


</template>
