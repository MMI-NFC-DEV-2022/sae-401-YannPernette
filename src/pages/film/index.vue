<script setup lang="ts">

import { supabase } from "@/supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const { data: Film, error } = await supabase
    .from('Film')
    .select('*')
</script>



<template>
    <h1>Liste de tous les films</h1>
</template>