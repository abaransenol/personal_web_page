<template>
    <div class="fixed z-50 scroll-smooth w-screen p-3 border-b-2 bg-black opacity-50">
        <nav class="
            max-w-fit m-auto text-slate-200 text-2xl space-x-5
            transform -translate-y-full opacity-0 duration-1000 ease-in-out"
            :class="{ 'translate-y-0 opacity-100': isNavBarVisible }"
        >
            <a class="hover:text-3xl hover:opacity-50 duration-300" href="#">
                Home 
            </a>
            <a class="hover:text-3xl hover:opacity-50 duration-300" href="#about"> 
                About Me
            </a>
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