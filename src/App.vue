<template>
    <nav-bar></nav-bar>
    <div class="xl:flex h-fit bg-linear-to-t from-purple-700 to-purple-950">
        <home-section class="flex-1"></home-section>
        <about-section class="flex-1"></about-section>
    </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import AboutSection from './components/sections/AboutSection.vue';
import HomeSection from './components/sections/HomeSection.vue';

</script>