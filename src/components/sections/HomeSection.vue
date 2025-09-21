<template>
    <section id="home">
        <div class="
            absolute flex flex-col left-1/2 top-1/2 -translate-x-1/2 w-11/12 h-11/12
            transform opacity-0 duration-1000 ease-in"
            :class="{'-translate-1/2 opacity-100': isSectionVisible}"
        >
            <div class="flex-5 relative">
                <div class="
                    absolute left-1/2 top-1/2 -translate-1/2 w-140 h-140
                    rounded-full border-10 border-purple-800"
                >
                    <img 
                        class="h-full w-full rounded-full"
                        src="/src/assets/img/baran.jpg"
                        alt="Profile Photo"
                    />
                </div>
            </div>
            <div class="flex-2">
                <h1 class="text-7xl font-semibold text-slate-200 w-fit m-auto opacity-70">
                    Ali Baran Şenol
                </h1>
                <h1 class="text-5xl font-semibold text-slate-200 w-fit m-auto opacity-70">
                    Software Engineer
                </h1>
                <div class="flex flex-row mt-5 opacity-70 w-fit m-auto">
                    <img class="w-20 h-20 hover:w-22 hover:h-22 duration-300 hover:cursor-pointer"
                        src="/src/assets/ico/linkedin.svg"
                        alt="in"
                        title="LinkedIn Page"
                        @click="redirectToLinkedin"
                    />
                    <img class="w-20 h-20 hover:w-22 hover:h-22 duration-300 hover:cursor-pointer"
                        src="/src/assets/ico/github.svg"
                        alt="github"
                        title="Github Page"
                        @click="redirectToGithub"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isSectionVisible = ref(false)
onMounted(() => {
    setTimeout(() => isSectionVisible.value = true, 50)
})

const redirectToLinkedin = () => window.location.href = 'https://www.linkedin.com/in/abaransenol'
const redirectToGithub = () => window.location.href = 'https://github.com/abaransenol'
</script>