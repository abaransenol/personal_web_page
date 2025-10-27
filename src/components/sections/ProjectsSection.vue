<template>
    <section id="projects">
        <div class="h-[50vh] sm:h-screen relative">
            <div class="
                absolute left-1/2 top-1/2 -translate-y-1/2 w-3/4 h-full sm:h-1/2
                transform opacity-0 duration-1000 ease-in"
                :class="{'-translate-1/2 opacity-100': isSectionVisible}"
            >
                <h1 class="text-slate-200 text-6xl sm:text-7xl w-fit m-auto">Projects</h1>
                <div class="w-fit m-auto">
                    <div class="
                        text-slate-200
                        flex flex-col aspect-square sm:aspect-3/2 h-75 md:h-100 border-3 shadow-xl border-purple-950 rounded-3xl mt-10
                    ">
                        <div class="flex-8 flex flex-col shadow-2xl rounded-2xl duration-300 p-1 px-2 mx-2.5 mt-2.5 md:p-2 md:px-4 md:mx-5 md:mt-5"
                            :class="{'opacity-0': changingRepo}"
                        >
                            <div class="flex flex-row">
                                <div class="flex-2 flex flex-row m-auto">
                                    <img class="aspect-square h-8 sm:h-10 md:h-12"
                                        src="/src/assets/ico/github/git-branch.svg"
                                        alt="repo"
                                    >
                                    <h2 
                                        class="text-slate-200 font-semibold ml-1 text-2xl sm:text-3xl cursor-pointer"
                                        :title="`Go to ${currentRepo.name}`"
                                        @click="() => redirect(currentRepo.url)"
                                    >
                                        {{ currentRepo.name }}
                                    </h2>
                                </div>
                                <div class="flex-1">
                                    <button v-if="currentRepo.license"
                                        class="ml-auto flex flex-row cursor-pointer border-2 opacity-40 hover:opacity-60 duration-250 border-amber-900 bg-black rounded-full font-semibold mt-1 px-2.5 py-1.5 text-xs sm:mt-2 sm:px-3.5 md:mt-3 md:px-5 md:py-2 md:text-sm"
                                        :title="currentRepo.license.name"
                                        @click="() => redirect(currentRepo.license.url)"
                                    >
                                        <img class="aspect-square w-3.5 sm:w-4 md:w-5"
                                            src="/src/assets/ico/github/license.svg"
                                            alt="licence"
                                        >
                                        <h1 class="m-auto ml-1.5 md:ml-3">
                                            {{ currentRepo.license.spdx_id }}
                                        </h1>
                                    </button>
                                </div>
                            </div>
                            <div class="w-fit my-3 space-x-2">
                                <button class="disabled border-2 opacity-40 border-amber-900 bg-black rounded-full font-semibold px-2.5 py-1.5 text-xs sm:px-3.5 sm:py-2 md:px-5 md:text-sm"
                                > {{ currentRepo.visibility }} </button>

                                <button v-if="currentRepo.archived"
                                    class="disabled border-2 opacity-40 border-amber-900 bg-black rounded-full font-semibold px-2.5 py-1.5 text-xs sm:px-3.5 sm:py-2 md:px-5 md:text-sm"
                                >archived</button>
                            </div>
                            <div>
                                <p class="text-slate-200 text-base sm:text-lg md:text-xl ml-1 opacity-90">
                                    {{ currentRepo.description }}
                                </p>
                            </div>
                            <div class="flex space-x-3 md:space-x-4 mt-1 ml-1 sm:mt-2.5 md:mt-4">
                                <div class="flex w-fit">
                                    <div
                                        class="rounded-full m-auto aspect-square h-3 sm:h-3.5 md:h-4 opacity-90"
                                        :style="{backgroundColor: repoLanguageColor || '#fff'}"
                                    ></div>
                                    <p class="ml-1.5 text-slate-200"> {{ currentRepo.language }} </p> 
                                </div>
                                <div class="flex w-fit">
                                    <img class="opacity-80 m-auto scale-75 sm:scale-85 md:scale-100"
                                        src="/src/assets/ico/github/star.svg"
                                        alt="star"
                                        title="Favorites"
                                    >
                                    <p class="md:ml-1 text-slate-200"> {{ currentRepo.stargazers_count }} </p>
                                </div>
                                <div class="flex w-fit">
                                    <img class="opacity-80 m-auto scale-85 sm:scale-90 md:scale-100"
                                        src="/src/assets/ico/github/watchers.svg"
                                        alt="watchers"
                                        title="Watchers"
                                    >
                                    <p class="ml-0.5 sm:ml-1 text-slate-200"> {{ currentRepo.watchers_count }} </p>
                                </div>
                                <div class="flex w-fit">
                                    <img class="opacity-80 m-auto scale-115 md:scale-120 sm:scale-125"
                                        src="/src/assets/ico/github/git-branch.svg"
                                        alt="fork"
                                        title="Forks"
                                    >
                                    <p class="ml-1 text-slate-200"> {{ currentRepo.forks_count }} </p>
                                </div>
                            </div>
                            <div class="mt-auto mb-0.5 ml-0.5 sm:mb-1 sm:ml-1">
                                <p class=" text-slate-200 text-sm sm:text-md md:text-lg font-semibold w-fit opacity-80">
                                    Last Update: {{ currentRepo.last_update }}
                                </p>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="flex w-fit mt-1.5 md:mt-2 m-auto">
                                <img class="aspect-square h-4 sm:h-5 md:h-6 cursor-pointer m-auto hover:scale-125 duration-300"
                                    src="/src/assets/ico/back.svg"
                                    alt="back"
                                    title="Previous Project"
                                    @click="() => changeRepo(currentRepo.id - 1)"
                                >
                                <img v-if="repos.length > 0" v-for="repo in repos" 
                                    class="aspect-square h-4 md:h-5 cursor-pointer m-auto hover:scale-150 duration-300"
                                    :class="{'scale-150 hover:scale-175': repo.id === currentRepo.id && !changingRepo}"
                                    src="/src/assets/ico/dot.svg"
                                    alt="project"
                                    :title="repo.name"
                                    @click="() => changeRepo(repo.id)"
                                >
                                <img class="aspect-square h-4 sm:h-5 md:h-6 cursor-pointer m-auto hover:scale-125 duration-300"
                                    src="/src/assets/ico/forward.svg"
                                    alt="forward"
                                    title="Next Project"
                                    @click="() => changeRepo(currentRepo.id + 1)"
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios';
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import { load } from 'js-yaml';

const redirect = (url) => window.location.href = url

const isSectionVisible = ref(false)
let languageColors = {}
const repoLanguageColor = ref('#ffffff')

onBeforeMount(async () => {
    await axios.get('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml')
    .then((res) => res.data)
    .then((data) => languageColors = load(data))
})

onMounted(() => {
    setTimeout(() => isSectionVisible.value = true, 500)

    // Fetching and processing repos from github
    axios.get('https://api.github.com/users/abaransenol/repos')
        .then((res) => processRepos(res.data))
})

const repos = []
const currentRepo = ref({})
const changingRepo = ref(false)

watch(
    () => currentRepo.value.id,
    () => {
        determineColor(currentRepo.value.language)
    },
)
const processRepos = async (data) => {
    data.forEach((repo, index) => {
        repos.push({
            id: index,
            name: repo.name,
            url: repo.svn_url,
            visibility: repo.visibility,
            archived: repo.archived,
            description: repo.description ?? "No description found on this repository.",
            language: repo.language,
            stargazers_count: repo.stargazers_count,
            watchers_count: repo.watchers_count,
            forks_count: repo.forks,
            last_update: new Date(repo.updated_at).toDateString(),
            license: repo.license
        })
    });

    currentRepo.value = repos[0]
}

const changeRepo = (id) => {
    if (id == currentRepo.value.id) return
    if (id < 0) {
        id = repos.length - 1
    }
    
    id = id % repos.length

    changingRepo.value = true
    setTimeout(() => {
        currentRepo.value = repos[id]
        changingRepo.value = false
    }, 500)
}

const determineColor = (language) => {
    if (!language) return
    repoLanguageColor.value = languageColors[language].color
}
</script>