<template>
    <div class="fixed z-50 scroll-smooth w-screen p-3 border-b-2/50 bg-black/50">
        <nav class="
            max-w-fit flex m-auto text-slate-200 text-md md:text-2xl space-x-3 md:space-x-5
            transform -translate-y-full opacity-0 duration-1000 ease-in-out"
            :class="{ 'translate-y-0 opacity-100': isNavBarVisible }"
        >
            <a class="inline-block hover:scale-115 hover:opacity-50 duration-300 text-center" href="#">
                {{ $t('navbar.home') }} 
            </a>
            <a class="inline-block hover:scale-115 hover:opacity-50 duration-300 text-center" href="#aboutme"> 
                {{ $t('navbar.aboutme') }} 
            </a>
            <a class="inline-block hover:scale-115 hover:opacity-50 duration-300 text-center" href="#projects">
                {{ $t('navbar.projects') }} 
            </a>
            <a class="inline-block hover:scale-115 hover:opacity-50 duration-300 text-center" href="#experience">
                {{ $t('navbar.experience') }}  
            </a>
            <div class="w-fit my-auto cursor-pointer duration-300 justify-self-center ease-in"
                    :class="{'opacity-0': isLangChanging}"
            >
                <img class="aspect-square w-5 md:w-8 hover:scale-120 duration-300"
                    :src="`/assets/ico/flags/${locale}.svg`" 
                    :alt="$t('navbar.changeLang.alt')"
                    :title="$t('navbar.changeLang.title')"
                    @click="changeLanguage"
                >
            </div>
        </nav>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()

const isNavBarVisible = ref(false)
const isLangChanging = ref(false)

onMounted(() => {
    setTimeout(() => isNavBarVisible.value = true, 50)
})

const changeLanguage = async () => {
    const nextLanguage = locale.value === 'en' ? 'tr' : 'en'

    isLangChanging.value = true

    await wait(250)
    locale.value = nextLanguage
    localStorage.setItem('lang', nextLanguage)

    isLangChanging.value = false
}
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
</script>