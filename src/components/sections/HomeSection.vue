<template>
    <section ref="sectionRef" id="home">
        <div class="
            flex flex-col items-center justify-center mx-auto space-y-10 mt-[10vh]
            opacity-0 duration-1000 ease-in"
            :class="{'opacity-100': isSectionVisible}"
        >
            <div class="
                flex items-center justify-center aspect-square w-4/5 md:w-1/2 xl:w-1/3
                rounded-full border-10 border-purple-800 shadow-2xl shadow-black"
            >
                <img 
                    class="h-full w-full rounded-full"
                    src="/assets/img/baran.jpg"
                    alt="Profile Photo"
                />
            </div>
            <div class="flex-1">
                <h1 class="text-5xl sm:text-7xl font-semibold text-slate-200 w-fit m-auto opacity-90">
                    {{ $t('homeSection.name') }} 
                </h1>
                <h1 class="text-4xl sm:text-6xl font-semibold text-slate-200 w-fit m-auto opacity-90">
                    {{ $t('homeSection.jobTitle') }} 
                </h1>
                <div class="flex flex-row mt-5 opacity-80 w-fit m-auto space-x-2">
                    <img class="w-20 h-20 hover:w-22 hover:h-22 duration-300 hover:cursor-pointer"
                        src="/assets/ico/sites/linkedin.svg"
                        :alt="$t('homeSection.linkedin.alt')"
                        :title="$t('homeSection.linkedin.title')"
                        @click="() => redirect('https://www.linkedin.com/in/abaransenol')"
                    />
                    <img class="w-20 h-20 hover:w-22 hover:h-22 duration-300 hover:cursor-pointer"
                        src="/assets/ico/sites/github.svg"
                        :alt="$t('homeSection.github.alt')"
                        :title="$t('homeSection.github.title')"
                        @click="() => redirect('https://github.com/abaransenol')"
                    />
                    <img class="w-20 h-20 hover:w-22 hover:h-22 duration-300 hover:cursor-pointer"
                        src="/assets/ico/sites/save_cv.svg"
                        :alt="$t('homeSection.resume.alt')"
                        :title="$t('homeSection.resume.title')"
                        @click="openPDF"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { sectionRef, isSectionVisible } = useScrollAnimation()
const { locale } = useI18n()

const PDFLocation = computed(() => {
    const lang = locale.value === 'en' ? "English" : "Türkçe"
    return `/assets/files/Ali Baran Şenol (${lang}).pdf`
})

const redirect = (url) => window.location.href = url
const openPDF = () => window.open(PDFLocation.value)
</script>