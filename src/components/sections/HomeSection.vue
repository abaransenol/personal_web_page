<template>
    <section ref="sectionRef" id="home">
        <div class="h-screen relative">
            <div class="
                absolute flex flex-col left-1/2 top-1/2 -translate-x-1/2 w-11/12 h-11/12
                transform opacity-0 duration-1000 ease-in"
                :class="{'-translate-1/2 opacity-100': isSectionVisible}"
            >
                <div class="flex-2 sm:flex-3 relative">
                    <div class="
                        absolute left-1/2 top-1/2 -translate-1/2 aspect-square h-2/3 sm:h-5/6
                        rounded-full border-10 border-purple-800 shadow-2xl shadow-black"
                    >
                        <img 
                            class="h-full w-full rounded-full"
                            src="/assets/img/baran.jpg"
                            alt="Profile Photo"
                        />
                    </div>
                </div>
                <div class="flex-1">
                    <h1 class="text-5xl sm:text-7xl font-semibold text-slate-200 w-fit m-auto opacity-90">
                        Ali Baran Şenol
                    </h1>
                    <h1 class="text-4xl sm:text-6xl font-semibold text-slate-200 w-fit m-auto opacity-90">
                        Software Engineer
                    </h1>
                    <div class="flex flex-row mt-5 opacity-80 w-fit m-auto space-x-2">
                        <img class="w-20 h-20 hover:w-22 hover:h-22 duration-300 hover:cursor-pointer"
                            src="/assets/ico/sites/linkedin.svg"
                            alt="in"
                            title="LinkedIn Page"
                            @click="() => redirect('https://www.linkedin.com/in/abaransenol')"
                        />
                        <img class="w-20 h-20 hover:w-22 hover:h-22 duration-300 hover:cursor-pointer"
                            src="/assets/ico/sites/github.svg"
                            alt="github"
                            title="Github Page"
                            @click="() => redirect('https://github.com/abaransenol')"
                        />
                        <img class="w-20 h-20 hover:w-22 hover:h-22 duration-300 hover:cursor-pointer"
                            src="/assets/ico/sites/save_cv.svg"
                            alt="cv"
                            title="Resume"
                            @click="() => openPDF('/assets/files/Ali Baran Şenol (English).pdf')"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isSectionVisible = ref(false)
const sectionRef = ref()
onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                isSectionVisible.value = true
                observer.unobserve(entry.target)
            }
        })
    }, {
        threshold: 0.5
    })

    observer.observe(sectionRef.value)
})

const redirect = (url) => window.location.href = url
const openPDF = (dir) => window.open(dir)
</script>