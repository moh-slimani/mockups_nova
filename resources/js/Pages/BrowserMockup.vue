<script setup>
import tabBg from '../assets/img/tab.svg'
import tabSmallBg from '../assets/img/tab-small.svg'
import tabClose from '../assets/img/tab-close-icon.svg'
import tabNew from '../assets/img/new-tab-icon.svg'
import forwardArrow from '../assets/img/forward-arrow-icon.svg'
import backArrow from '../assets/img/back-arrow-icon.svg'
import refresh from '../assets/img/refresh-icon.svg'
import secure from '../assets/img/secure-icon.svg'
import menu from '../assets/img/menu-icon.svg'
import homeIcon from '../assets/img/home-icon.svg'
import RightIcons from '../assets/img/right-icons.svg'
import { ref } from 'vue'
import { Head } from '@inertiajs/inertia-vue3'
import moment from 'moment'

const props = defineProps({
    project: Object
})
console.log(JSON.parse(JSON.stringify(props.project)))

const selectedTab = ref(props.project.tabs[0])
const time = ref(moment().format('HH:mm'))


setInterval(function () {
    time.value = moment().format('HH:mm')
}, 1000)
</script>


<template>
    <head>
        <title>{{ project.name }}</title>
    </head>

    <div>
        <div id="tool-bar" class="h-20">
            <div id="tab-bar"
                 class="bg-[#DFE1E5] h-10 hidden md:flex flex-row pt-2 rounded-t-[5px] overflow-auto w-full scrollbar scrollbar-thin">
                <div id="traffic-lights" class="hidden md:flex flex-row pt-2 pb-[14px] px-3 space-x-2 mr-2">
                    <div id="close" class="bg-[#ED6A5E] border-[.5px] border-[#CE5347] h-3 w-3 rounded-full"></div>
                    <div id="minimize" class="bg-[#F6BE4F] border-[.5px] border-[#D6A243] h-3 w-3 rounded-full"></div>
                    <div id="fullscreen" class="bg-[#62C554] border-[.5px] border-[#58A942] h-3 w-3 rounded-full"></div>
                </div>
                <div v-for="tab in project.tabs"
                     :key="tab.id"
                     :style="{backgroundImage: tab.id === selectedTab.id ? `url(${tabBg})` : ''}"
                     @click="selectedTab = tab"
                     class="hidden md:flex -mx-2 shrink-0 md:w-64 h-[34]
                     flex-row px-[19px] cursor-pointer items-center space-x-2">
                    <img :src="project.favicon"
                         class="h-[18px] w-[18px] rounded-full bg-gray-500"
                         alt="">
                    <h1 class="hidden md:block text-xs grow truncate">{{ tab.title + ' - ' + project.name }}</h1>
                    <img :src="tabClose" class="hidden md:block h-2 w-2" alt="">
                </div>
                <div class="hidden m-1 h-6 w-10 md:flex items-center justify-center">
                    <img :src="tabNew" class="h-3 w-3" alt="">
                </div>
            </div>
            <div id="status_bar" class="md:hidden h-10 -mb-1 flex flex-row mx-5 justify-between items-center">
                <div class="font-sans text-sm">
                    {{ time }}
                </div>
                <div>
                    <img :src="RightIcons" alt="">
                </div>
            </div>
            <div id="toolbar" class="flex flex-row items-center !max-w-[100vw]">
                <div class="shrink-0 flex flex-row md:space-x-[19px] px-4 py-3">
                    <img class="hidden md:inline-block" :src="backArrow" alt="">
                    <img class="hidden md:inline-block" :src="forwardArrow" alt="">
                    <img class="hidden md:inline-block" :src="refresh" alt="">
                    <img class="md:hidden" :src="homeIcon" alt="">
                </div>
                <div class="flex flex-row bg-[#F1F3F4] items-center px-4 rounded-[14px] grow h-7 space-x-2">
                    <img :src="secure" class="h-[10.5px] w-2 shrink-0" alt="">
                    <a :href="selectedTab.url"
                       target="_blank"
                       class="text-[#202124] text-sm line-clamp-1 text-ellipsis overflow-hidden">
                        <span class="text-[#767676]">https://</span>
                        <span>{{
                                selectedTab.url.replace('https://', '').replace('http://', '').replaceAll('&', ' &').replaceAll('/', '/ ')
                            }}</span>
                    </a>
                </div>
                <div class="w-10 h-10 md:hidden flex items-center justify-center shrink-0">
                    <div class="border-2 border-black rounded-[0.25rem] w-4 h-4 flex items-center justify-center">
                        <p class="text-xs font-bold">{{ project.tabs_count }}</p>
                    </div>
                </div>
                <img :src="menu" class="ml-2 md:ml-5 mr-5" alt="">
            </div>
        </div>
        <div class="overflow-auto h-[calc(100vh-80px)]">
            <img :src="selectedTab.screen" class="w-full" alt="">
        </div>
    </div>
</template>
