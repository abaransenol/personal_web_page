<template>
    <section id="aboutme">
        <div class="h-screen relative">
            <div class="
                text-slate-200
                absolute left-1/2 top-7/12 -translate-y-1/2 w-2/3 h-2/3
                transform opacity-0 duration-1000 ease-in"
                :class="{'-translate-1/2 opacity-100': isSectionVisible}"
            >
                <h1 class="text-8xl sm:text-9xl w-fit m-auto">Hey!</h1>
                <p class="text-2xl m-6 sm:text-3xl sm:m-10 text-center">
                    I am a 20-year-old student who studies computer engineering in Eskisehir
                    Technical University. I have been interested in programming since I was 15 years
                    old. I have high level knowledge about dart language and flutter framework and
                    good enough knowledge about java and python languages.
                </p>
                <div class="flex flex-row w-fit m-auto opacity-80 space-x-3">
                    <img class="w-15 h-15 hover:w-17 hover:h-17 sm:w-20 sm:h-20 sm:hover:w-22 sm:hover:h-22 duration-300 hover:cursor-pointer"
                        src="/src/assets/ico/langs/js.svg"
                        alt="js"
                        title="Javascript"
                        @click="() => redirect('https://developer.mozilla.org/en-US/docs/Web/JavaScript')"
                    >
                    <img class="w-15 h-15 hover:w-17 hover:h-17 sm:w-20 sm:h-20 sm:hover:w-22 sm:hover:h-22 duration-300 hover:cursor-pointer"
                        src="/src/assets/ico/langs/vue.svg"
                        alt="vue"
                        title="Vue.js"
                        @click="() => redirect('https://vuejs.org/')"
                    >
                    <img class="w-15 h-15 hover:w-17 hover:h-17 sm:w-20 sm:h-20 sm:hover:w-22 sm:hover:h-22 duration-300 hover:cursor-pointer"
                        src="/src/assets/ico/langs/flutter.svg"
                        alt="flutter"
                        title="Flutter"
                        @click="() => redirect('https://flutter.dev/')"
                    >
                    <img class="w-15 h-15 hover:w-17 hover:h-17 sm:w-20 sm:h-20 sm:hover:w-22 sm:hover:h-22 duration-300 hover:cursor-pointer"
                        src="/src/assets/ico/langs/python.svg"
                        alt="python"
                        title="Python"
                        @click="() => redirect('https://www.python.org/')"
                    >
                    <img class="w-15 h-15 hover:w-17 hover:h-17 sm:w-20 sm:h-20 sm:hover:w-22 sm:hover:h-22 duration-300 hover:cursor-pointer"
                        src="/src/assets/ico/langs/java.svg"
                        alt="java"
                        title="Java"
                        @click="() => redirect('https://www.java.com/en/')"
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isSectionVisible = ref(false)
onMounted(() => {
    setTimeout(() => isSectionVisible.value = true, 500)
})

const redirect = (url) => window.location.href = url
</script>