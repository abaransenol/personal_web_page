<template>
    <div class="fixed z-50 scroll-smooth w-screen p-3 border-b-2 bg-black opacity-40">
        <nav class="
            max-w-fit m-auto
            text-white text-2xl [&>*]:hover:opacity-50 space-x-5
            transform -translate-y-full opacity-0 duration-1000 ease-in-out"
        :class="{ 'translate-y-0 opacity-100': isNavBarVisible }">
            <a href="#"> Home </a>
            <a href="#about"> About Me </a>
        </nav>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isNavBarVisible = ref(false)
onMounted(() => {
    setTimeout(() => isNavBarVisible.value = true, 50)
})
</script>