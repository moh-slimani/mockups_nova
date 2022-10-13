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

import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue'

const props = defineProps({
    project: Object
})
console.log(JSON.parse(JSON.stringify(props.project)))

const selectedTab = ref(props.project.tabs[0])
const time = ref(moment().format('HH:mm'))
const openAbout = ref(false)
const openTabs = ref(false)
const desktopVersion = ref(false)


setInterval(function () {
    time.value = moment().format('HH:mm')
}, 1000)
</script>


<template>
    <head>
        <title>{{ project.name }}</title>
    </head>

    <div class="relative pt-20">
        <div class="">
            <div class="overflow-y-scroll h-[calc(100vh-80px)]"
                 :class="[selectedTab.mobile_screen && !desktopVersion ? 'hidden md:block' : '']">
                <img :src="selectedTab.screen" class="w-full" alt="">
            </div>
            <template v-if="selectedTab.mobile_screen && !desktopVersion">
                <div class="overflow-y-scroll z-0 h-[calc(100vh-80px)] md:hidden">
                    <img :src="selectedTab.mobile_screen" class="w-full" alt="">
                </div>
            </template>
        </div>
        <div id="tool-bar" class="absolute top-0 inset-x-0 h-20 z-10 shadow-md">
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
                         class="h-[18px] w-[18px]"
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
                    <div @click="openTabs = true"
                         class="border-2 border-black rounded-[0.25rem] w-4 h-4 flex pt-[2px] items-center justify-center">
                        <p class="text-xs font-bold m-0">{{ project.tabs_count }}</p>
                    </div>
                </div>
                <Menu as="div" class="relative inline-block text-left">
                    <div>
                        <MenuButton
                            class="focus:ring-0 ">
                            <img :src="menu" class="ml-2 md:ml-5 mr-5" alt="">
                        </MenuButton>
                    </div>

                    <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                        <MenuItems
                            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                            <div class="py-1 md:hidden">
                                <MenuItem v-slot="{ active }">
                                    <p
                                        @click="desktopVersion = !desktopVersion"
                                        class="group flex items-center px-4 py-2 text-sm w-full"
                                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', '']">
                                        <span v-if="!desktopVersion">
                                            Desktop version
                                        </span>
                                        <span v-else>
                                            Mobile version
                                        </span>
                                    </p>
                                </MenuItem>
                            </div>
                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                    <p
                                        @click="openAbout = true"
                                        class="group flex items-center px-4 py-2 text-sm w-full"
                                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', '']">
                                        <!--<UserAddIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />-->
                                        About
                                    </p>
                                </MenuItem>
                            </div>

                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </div>
    </div>


    <TransitionRoot as="template" :show="openAbout">
        <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="openAbout = false">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                                 enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100"
                                 leave-to="opacity-0">
                    <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </TransitionChild>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <TransitionChild as="template" enter="ease-out duration-300"
                                 enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                 enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                                 leave-from="opacity-100 translate-y-0 sm:scale-100"
                                 leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <div
                        class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                        <div>
                            <div class="mt-3 text-center sm:mt-5">
                                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
                                    Mockups by WiTec
                                </DialogTitle>
                                <div class="mt-2">
                                    <a href="https://witec.dev" class="text-sm text-gray-500">
                                        Visit As At <span class="text-blue-600 underline">WiTec</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 sm:mt-6">
                            <button type="button"
                                    class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                    @click="openAbout = false">
                                Done
                            </button>
                        </div>
                    </div>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>

    <TransitionRoot as="template" :show="openTabs">
        <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="openTabs = false">
            <div class="bg-white h-screen">
                <div>
                    <div class="md:hidden h-10 -mb-1 flex flex-row px-5 justify-between items-center">
                        <div class="font-sans text-sm">
                            {{ time }}
                        </div>
                        <div>
                            <img :src="RightIcons" alt="">
                        </div>
                    </div>
                    <div class="h-9 flex flex-row items-center justify-between">
                        <img :src="tabNew" class="ml-5 mr-2" alt="">
                        <img :src="menu" class="ml-2 mr-4" alt="">
                    </div>
                </div>
                <div class="grow bg-white grid grid-cols-2 gap-4 p-4">
                    <div v-for="tab in project.tabs" :key="tab.id"
                         @click="selectedTab = tab; openTabs = false"
                         class="flex flex-col p-1 bg-gray-200 h-64 rounded-xl">
                        <div class="flex flex-row p-2 items-center space-x-2">
                            <img :src="project.favicon"
                                 class="h-[18px] w-[18px] rounded-full bg-gray-500"
                                 alt="">
                            <h1 class="text-sm grow truncate">{{ tab.title }}</h1>
                            <img :src="tabClose" class="h-3 w-3" alt="">
                        </div>
                        <div class="bg-gray-500 overflow-hidden grow rounded-lg">
                            <img :src="tab.mobile_screen || tab.screen" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
