<template>
    <section id="projects">
        <div class="h-screen relative">
            <div class="
                absolute left-1/2 top-1/2 -translate-y-1/2 w-3/4 h-1/2
                transform opacity-0 duration-1000 ease-in"
                :class="{'-translate-1/2 opacity-100': isSectionVisible}"
            >
                <h1 class="text-slate-200 text-7xl w-fit m-auto">Projects</h1>
                <div class="w-fit m-auto">
                    <div class="
                        text-slate-200
                        flex flex-col w-150 h-100 border-3 shadow-xl border-purple-950 rounded-3xl mt-10
                    ">
                        <div class="flex flex-col shadow-2xl p-2 rounded-2xl flex-8 relative px-4 mx-5 mt-5 duration-300"
                            :class="{'opacity-0': changingRepo}"
                        >
                            <div class="flex flex-row">
                                <div class="flex-2 flex flex-row m-auto">
                                    <img class="w-12 h-12"
                                        src="/src/assets/ico/github/git-branch.svg"
                                        alt="repo"
                                    >
                                    <h2 
                                        class="text-slate-200 font-semibold ml-1 text-3xl cursor-pointer"
                                        :title="`Go to ${currentRepo.name}`"
                                        @click="() => redirect(currentRepo.url)"
                                    >
                                        {{ currentRepo.name }}
                                    </h2>
                                </div>
                                <div class="flex-1">
                                    <button v-if="currentRepo.license"
                                        class="ml-auto flex flex-row cursor-pointer mt-3 border-2 opacity-40 hover:opacity-60 duration-250 border-amber-900 bg-black rounded-full px-5 py-2 text-sm font-semibold"
                                        :title="currentRepo.license.name"
                                        @click="() => redirect(currentRepo.license.url)"
                                    >
                                        <img class="w-5 h-5"
                                            src="/src/assets/ico/github/license.svg"
                                            alt="licence"
                                        >
                                        <h1 class="m-auto ml-3">
                                            {{ currentRepo.license.spdx_id }}
                                        </h1>
                                    </button>
                                </div>
                            </div>
                            <div class="w-fit my-3 space-x-2">
                                <button class="disabled border-2 opacity-40 border-amber-900 bg-black rounded-full px-5 py-2 text-sm font-semibold"
                                > {{ currentRepo.visibility }} </button>

                                <button v-if="currentRepo.archived"
                                    class="disabled border-2 opacity-40 border-amber-900 bg-black rounded-full px-5 py-2 text-sm font-semibold"
                                >archived</button>
                            </div>
                            <div>
                                <p class="text-slate-200 text-xl ml-1 opacity-90">
                                    {{ currentRepo.description }}
                                </p>
                            </div>
                            <div class="mt-4 ml-1 flex space-x-4">
                                <div class="flex w-fit">
                                    <div
                                        class="rounded-full m-auto w-4 h-4 opacity-90"
                                        :style="{backgroundColor: repoLanguageColor || '#fff'}"
                                    ></div>
                                    <p class="ml-1.5 text-slate-200"> {{ currentRepo.language }} </p> 
                                </div>
                                <div class="flex w-fit">
                                    <img class="opacity-80 m-auto"
                                        src="/src/assets/ico/github/star.svg"
                                        alt="star"
                                        title="Favorites"
                                    >
                                    <p class="ml-1 text-slate-200"> {{ currentRepo.stargazers_count }} </p>
                                </div>
                                <div class="flex w-fit">
                                    <img class="opacity-80 m-auto w-6 h-6"
                                        src="/src/assets/ico/github/watchers.svg"
                                        alt="watchers"
                                        title="Watchers"
                                    >
                                    <p class="ml-1 text-slate-200"> {{ currentRepo.watchers_count }} </p>
                                </div>
                                <div class="flex w-fit">
                                    <img class="opacity-80 m-auto w-6 h-6"
                                        src="/src/assets/ico/github/git-branch.svg"
                                        alt="fork"
                                        title="Forks"
                                    >
                                    <p class="ml-1 text-slate-200"> {{ currentRepo.forks_count }} </p>
                                </div>
                            </div>
                            <div class="mt-auto mb-1 ml-1">
                                <p class=" text-slate-200 text-md font-semibold w-fit opacity-75">
                                    Last Update: {{ currentRepo.last_update }}
                                </p>
                            </div>
                        </div>
                        <div class="flex-1 relative">
                            <div class="absolute left-1/2 top-1/2 -translate-1/2 flex">
                                <img class="w-6 h-6 cursor-pointer m-auto hover:h-8 hover:w-8 duration-300"
                                    src="/src/assets/ico/back.svg"
                                    alt="back"
                                    title="Previous Project"
                                    @click="() => changeRepo(currentRepo.id - 1)"
                                >
                                <img v-if="repos.length > 0" v-for="repo in repos" 
                                    class="w-5 h-5 cursor-pointer m-auto hover:h-7 hover:w-7 duration-300"
                                    :class="{'w-7 h-7 hover:w-10 hover:h-10': repo.id === currentRepo.id && !changingRepo}"
                                    src="/src/assets/ico/dot.svg"
                                    alt="project"
                                    :title="repo.name"
                                    @click="() => changeRepo(repo.id)"
                                >
                                <img class="w-6 h-6 cursor-pointer m-auto hover:h-8 hover:w-8 duration-300"
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