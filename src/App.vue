<template>
    <nav-bar></nav-bar>
    <div class="xl:flex h-screen bg-linear-to-t from-purple-700 to-purple-950">
        <div class="h-screen relative flex-1">
            <home-section></home-section>
        </div>
        <div class="flex-1">
            <about-section></about-section>
        </div>
    </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import AboutSection from './components/sections/AboutSection.vue';
import HomeSection from './components/sections/HomeSection.vue';

</script>