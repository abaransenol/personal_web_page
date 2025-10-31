<template>
    <section ref="sectionRef" id="aboutme">
        <div class="
            text-slate-200
            flex flex-col items-center justify-center mx-auto
            opacity-0 duration-1000 ease-in"
            :class="{'opacity-100': isSectionVisible}"
        >
            <h1 class="text-8xl sm:text-9xl w-fit">{{ $t('aboutSection.greeting') }} </h1>
            <p class="text-2xl sm:text-3xl m-8 text-center w-7/8">{{ $t('aboutSection.aboutMe') }}</p>
            <div class="flex flex-row w-fit m-auto opacity-80 space-x-3">
                <img class="w-13 h-13 hover:w-15 hover:h-15 sm:w-20 sm:h-20 sm:hover:w-22 sm:hover:h-22 duration-300 hover:cursor-pointer"
                    src="/assets/ico/langs/js.svg"
                    alt="js"
                    title="Javascript"
                    @click="() => redirect('https://developer.mozilla.org/en-US/docs/Web/JavaScript')"
                >
                <img class="w-13 h-13 hover:w-15 hover:h-15 sm:w-20 sm:h-20 sm:hover:w-22 sm:hover:h-22 duration-300 hover:cursor-pointer"
                    src="/assets/ico/langs/vue.svg"
                    alt="vue"
                    title="Vue.js"
                    @click="() => redirect('https://vuejs.org/')"
                >
                <img class="w-13 h-13 hover:w-15 hover:h-15 sm:w-20 sm:h-20 sm:hover:w-22 sm:hover:h-22 duration-300 hover:cursor-pointer"
                    src="/assets/ico/langs/flutter.svg"
                    alt="flutter"
                    title="Flutter"
                    @click="() => redirect('https://flutter.dev/')"
                >
                <img class="w-13 h-13 hover:w-15 hover:h-15 sm:w-20 sm:h-20 sm:hover:w-22 sm:hover:h-22 duration-300 hover:cursor-pointer"
                    src="/assets/ico/langs/python.svg"
                    alt="python"
                    title="Python"
                    @click="() => redirect('https://www.python.org/')"
                >
                <img class="w-13 h-13 hover:w-15 hover:h-15 sm:w-20 sm:h-20 sm:hover:w-22 sm:hover:h-22 duration-300 hover:cursor-pointer"
                    src="/assets/ico/langs/java.svg"
                    alt="java"
                    title="Java"
                    @click="() => redirect('https://www.java.com/en/')"
                >
            </div>
        </div>
    </section>
</template>

<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation';

const { sectionRef, isSectionVisible } = useScrollAnimation()
const redirect = (url) => window.location.href = url
</script>