<template>
    <section ref="sectionRef" id="experience">
        <div class="flex flex-col space-y-[10vh] xl:flex-row xl:space-y-0 mb-[10vh] opacity-0 duration-1000 ease-in"
            :class="{'opacity-100': isSectionVisible}"
        >
            <div class="flex-1 flex items-center justify-center">
                <div class="flex flex-col items-center justify-center w-3/4 mx-auto space-y-10">
                    <div class="text-slate-200 text-6xl sm:text-8xl w-fit">
                        <h1>{{ $t('experienceSection.title') }}</h1>
                    </div>
                    <div class="items-center justify-center w-7/8 mx-auto">
                        <p class="text-slate-200 text-xl sm:text-3xl text-center whitespace-pre-line w-fit m-auto">{{ $t('experienceSection.experience') }}</p>
                    </div>
                </div>
            </div>
            <div class="flex-1 flex items-center justify-center">
                <div class="flex flex-col items-center justify-center w-7/8 mt-auto">
                    <div class="flex flex-col duration-400"
                        :class="{'opacity-0': isCurrentLanguageChanging}"
                    >
                        <div 
                            class="flex w-full h-3/4 border-b-4 border-purple-950 rounded-md md:rounded-xl overflow-hidden drop-shadow-2xl duration-400"
                            :class="{'opacity-0': isCurrentPhotoIndexChanging}"
                        >
                            <img 
                                class="mt-auto object-contain rounded-sm md:rounded-xl cursor-pointer"
                                :src="currentLang[currentPhotoIndex]"
                                :alt="$t('experienceSection.image.alt')"
                                :title="$t('experienceSection.image.title')"
                                @click="() => openPhoto(currentLang[currentPhotoIndex])"
                            >
                        </div>
                        <div class="w-fit m-auto flex">
                            <img class="aspect-square h-5 md:h-6 cursor-pointer m-auto hover:scale-125 duration-300"
                                src="/assets/ico/back.svg"
                                :alt="$t('experienceSection.previous.alt')"
                                :title="$t('experienceSection.previous.title')"
                                @click="() => changePhotoIndex(currentPhotoIndex - 1)"
                            >
                            <img v-for="i in currentLang.length"
                                class="aspect-square h-4 md:h-5 cursor-pointer m-auto hover:scale-150 duration-300"
                                :class="{'h-6 md:h-7': currentPhotoIndex === i-1 && !isCurrentPhotoIndexChanging}"
                                src="/assets/ico/dot.svg"
                                :alt="$t('experienceSection.dot.alt')"
                                :title="$t('experienceSection.dot.title', { index: i })"
                                @click="() => changePhotoIndex(i - 1)"
                            >
                            <img class="aspect-square h-5 md:h-6 cursor-pointer m-auto hover:scale-125 duration-300"
                                src="/assets/ico/forward.svg"
                                :alt="$t('experienceSection.next.alt')"
                                :title="$t('experienceSection.next.title')"
                                @click="() => changePhotoIndex(currentPhotoIndex + 1)"
                            >
                        </div>
                    </div>
                    <div class="mt-5">
                        <div 
                            class="w-fit m-auto flex space-x-3 opacity-90">
                            <img class="aspect-square h-16 md:h-20 hover:scale-110 hover:cursor-pointer duration-300"
                                src="/assets/ico/langs/vue.svg"
                                alt="vue"
                                title="Vue.js"
                                @click="() => changeCurrentLanguage(langs2ImageSources.vue)"
                            >
                            <img class="aspect-square h-16 md:h-20 hover:scale-110 hover:cursor-pointer duration-300"
                                src="/assets/ico/langs/flutter.svg"
                                alt="flutter"
                                title="Flutter"
                                @click="() => changeCurrentLanguage(langs2ImageSources.flutter)"
                            >
                            <img class="aspect-square h-16 md:h-20 hover:scale-110 hover:cursor-pointer duration-300"
                                src="/assets/ico/langs/qt.svg"
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
import { useScrollAnimation } from '@/composables/useScrollAnimation';
import { ref } from 'vue';

const { sectionRef, isSectionVisible } = useScrollAnimation()

const langs2ImageSources = {
    vue: [
        "/assets/img/vue/Website_Main.png",
        "/assets/img/vue/Website_Login.png",
    ],
    flutter: [
        "/assets/img/flutter/Mobile_Application_Midas.png",
        "/assets/img/flutter/Mobile_Application_Dorlion.png",
    ],
    pyside6: [
        "/assets/img/pyside6/ADAS_HUB_open.png",
        "/assets/img/pyside6/ADAS_HUB_closed.png",
        "/assets/img/pyside6/Navigation.png"
    ]
}

const currentLang = ref(langs2ImageSources.vue)
const currentPhotoIndex = ref(0)
const isCurrentLanguageChanging = ref(false)
const isCurrentPhotoIndexChanging = ref(false)

const changeCurrentLanguage = async (lang) => {
    if (lang[0] == currentLang.value[0]) return

    await loadImg(lang[0])
    isCurrentLanguageChanging.value = true

    await wait(350)
    currentPhotoIndex.value = 0
    currentLang.value = lang
    isCurrentLanguageChanging.value = false
}

const changePhotoIndex = async (newIndex) => {
    if (newIndex === currentPhotoIndex.value) return
    if (newIndex < 0) {
        newIndex = currentLang.value.length - 1
    }

    const index = newIndex % currentLang.value.length

    await loadImg(currentLang.value[index])
    isCurrentPhotoIndexChanging.value = true
    
    await wait(350)
    currentPhotoIndex.value = index
    isCurrentPhotoIndexChanging.value = false
}

const openPhoto = (dir) => window.open(dir)
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const loadImg = async (src) => {
    return new Promise((resolve) => {
        const img = new Image()
        img.src = src
        img.onload = resolve
    })
}
</script>