<template>
    <nav-bar></nav-bar>
    <div class="bg-fixed bg-linear-to-t from-purple-700 to-purple-950">
        <home-section class="flex-1"></home-section>
        <div class="xl:flex h-fit">
            <about-section class="flex-1"></about-section>
            <projects-section class="flex-1"></projects-section>
        </div>
    </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import AboutSection from './components/sections/AboutSection.vue';
import HomeSection from './components/sections/HomeSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';

</script>