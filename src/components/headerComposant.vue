<script setup lang="ts">
import Logo from '@/components/icon/Logo.vue';
</script>

<template>
    <header>
        <nav
            class="fixed z-50 bgHeader text-white flex items-center justify-between w-full px-5 pt-2 pb-4 uppercase font-light tracking-wider">

            <RouterLink to="/">
                <logo class="w-16" color="white" />
            </RouterLink>

            <ul class="md:hidden flex text-lg gap-10">
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

            <ul class="md:hidden flex uppercase font-poppins gap-4">
                <li class="bg-white text-black rounded-sm px-2 py-1">
                    <RouterLink to="/">S'inscrire</RouterLink>
                </li>
                <li class="border rounded-sm px-3 py-1">
                    <RouterLink to="/">Se connecter</RouterLink>
                </li>
            </ul>

            <button class="md:block lg:hidden xl:hidden  menubtn">
                <span class="menubtn_bar"></span>
            </button>

        </nav>
    </header>
</template>