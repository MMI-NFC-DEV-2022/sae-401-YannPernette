<script setup lang="ts">
import Logo from '@/components/icon/Logo.vue';
</script>


<template>
    <footer>
        <div class="bg-black text-white mt-32 py-10 flex flex-col items-center gap-10">
            <RouterLink to="/">
                <logo class="w-20" color="white" />
            </RouterLink>
            <nav>
                <ul class="flex md:flex-col text-lg gap-10 md:gap-4 uppercase font-light tracking-wider">
                    <li>
                        <RouterLink to="/film">Films</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/celebrite">Célébrités</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/collection">Collections</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/genre">Genres</RouterLink>
                    </li>
                </ul>
            </nav>
            <div class="w-[80%] border border-white"></div>
            <p class="text-center">© 2024 MovieSpotter Inc., Tous droits réservés</p>
        </div>
    </footer>
</template>