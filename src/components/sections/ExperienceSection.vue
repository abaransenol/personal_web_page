<template>
    <section id="experience">
        <div class="flex-col xl:flex xl:flex-row">
            <div class="flex-1 h-screen relative">
                <div class="flex flex-col absolute left-1/2 top-1/2 -translate-1/2 w-3/4 h-3/4">
                    <div class="flex-1 text-slate-200 text-8xl w-fit m-auto">
                        <h1>Experience</h1>
                    </div>
                    <div class="flex-6 relative">
                        <div class="absolute left-1/2 top-1/2 -translate-1/2 w-7/8 h-7/8">
                            <p class="text-slate-200 text-3xl text-center w-fit m-auto">
                                Hidroana - Hydrogen Powered Vehicle Project (October 2024 - September 2025)
                                <br><br>
                                Built real-time data visualization
                                dashboards using Vue.js and ApexCharts.

                                Developed interactive maps with Vue-Leaflet
                                to visualize GPS and navigation data.

                                Designed and implemented responsive user
                                interfaces with TailwindCSS, ensuring
                                compatibility across devices.

                                Implemented both session-based and JWT
                                authentication for a secure Vue.js +
                                Express.js application.

                                Created a Flutter mobile application for
                                tracking the latest data on a web server.

                                Built an user-friendly car-display UI
                                application on PySide6 for gathering
                                separate ADAS (Advanced Driving
                                Assistance Systems) functions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 h-screen relative">
                <div class="flex flex-col absolute left-1/2 top-12/25 -translate-1/2 w-9/10 h-2/3">
                    <div class="flex-9 flex flex-col">
                        <div 
                            class="flex-19 flex w-full h-3/4 border-b-4 border-purple-950 rounded-xl overflow-hidden drop-shadow-2xl duration-400"
                            :class="{'opacity-0': isCurrentLanguageChanging || isCurrentPhotoIndexChanging}"
                        >
                            <img 
                                class="mt-auto object-contain rounded-xl"
                                :src="currentLang[currentPhotoIndex]"
                                alt="img"
                            >
                        </div>
                        <div class="flex-1 relative">
                            <div
                                class="absolute left-1/2 top-1/2 -translate-1/2 flex duration-400"
                                :class="{'opacity-0': isCurrentLanguageChanging}"    
                            >
                                <img class="w-6 h-6 cursor-pointer m-auto hover:scale-125 duration-300"
                                    src="/src/assets/ico/back.svg"
                                    alt="back"
                                    title="Previous Photo"
                                    @click="() => changePhotoIndex(currentPhotoIndex - 1)"
                                >
                                <img v-for="i in currentLang.length"
                                    class="w-5 h-5 cursor-pointer m-auto hover:scale-150 duration-300"
                                    :class="{'w-7 h-7': currentPhotoIndex === i-1 && !isCurrentPhotoIndexChanging}"
                                    src="/src/assets/ico/dot.svg"
                                    alt="project"
                                    :title="`Photo ${i}`"
                                    @click="() => changePhotoIndex(i - 1)"
                                >
                                <img class="w-6 h-6 cursor-pointer m-auto hover:scale-125 duration-300"
                                    src="/src/assets/ico/forward.svg"
                                    alt="forward"
                                    title="Next Photo"
                                    @click="() => changePhotoIndex(currentPhotoIndex + 1)"
                                >
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 mt-5">
                        <div 
                            class="w-fit m-auto flex space-x-3 opacity-90">
                            <img class="w-20 h-20 hover:scale-110 hover:cursor-pointer duration-300"
                                src="/src/assets/ico/langs/vue.svg"
                                alt="vue"
                                title="Vue.js"
                                @click="() => changeCurrentLanguage(langs2ImageSources.vue)"
                            >
                            <img class="w-20 h-20 hover:scale-110 hover:cursor-pointer duration-300"
                                src="/src/assets/ico/langs/flutter.svg"
                                alt="flutter"
                                title="Flutter"
                                @click="() => changeCurrentLanguage(langs2ImageSources.flutter)"
                            >
                            <img class="w-20 h-20 hover:scale-110 hover:cursor-pointer duration-300"
                                src="/src/assets/ico/langs/qt.svg"
                                alt="qt"
                                title="PySide6"
                                @click="() => changeCurrentLanguage(langs2ImageSources.pyside6)"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const langs2ImageSources = {
    vue: [
        "/src/assets/img/vue/Website_Main.png",
        "/src/assets/img/vue/Website_Login.png",
    ],
    flutter: [
        "/src/assets/img/flutter/Mobile_Application_Midas.png",
        "/src/assets/img/flutter/Mobile_Application_Dorlion.png",
    ],
    pyside6: [
        "/src/assets/img/pyside6/ADAS_HUB_open.png",
        "/src/assets/img/pyside6/ADAS_HUB_closed.png",
        "/src/assets/img/pyside6/Navigation.png"
    ]
}

const currentLang = ref(langs2ImageSources.vue)
const currentPhotoIndex = ref(0)
const isCurrentLanguageChanging = ref(false)
const isCurrentPhotoIndexChanging = ref(false)

const changeCurrentLanguage = (lang) => {
    if (lang[0] == currentLang.value[0]) return

    isCurrentLanguageChanging.value = true
    setTimeout(() => {
        currentPhotoIndex.value = 0
        currentLang.value = lang
        isCurrentLanguageChanging.value = false
    }, 400)
}

const changePhotoIndex = (newIndex) => {
    if (newIndex === currentPhotoIndex.value) return
    if (newIndex < 0) {
        newIndex = currentLang.value.length - 1
    }

    const index = newIndex % currentLang.value.length

    isCurrentPhotoIndexChanging.value = true
    setTimeout(() => {
        currentPhotoIndex.value = index
        isCurrentPhotoIndexChanging.value = false
    }, 400)
}
</script>