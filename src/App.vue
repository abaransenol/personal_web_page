<template>
    <nav-bar></nav-bar>
    <div class="bg-fixed bg-linear-to-t from-purple-700 to-purple-950 flex flex-col space-y-[10vh]">
        <home-section></home-section>
        <div class="flex flex-col space-y-[10vh] xl:space-y-0 xl:flex-row">
            <about-section class="xl:flex-1 flex items-center justify-center"></about-section>
            <projects-section class="xl:flex-1 flex items-center justify-center"></projects-section>
        </div>
        <experience-section></experience-section>
    </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import AboutSection from './components/sections/AboutSection.vue';
import ExperienceSection from './components/sections/ExperienceSection.vue';
import HomeSection from './components/sections/HomeSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';

</script>