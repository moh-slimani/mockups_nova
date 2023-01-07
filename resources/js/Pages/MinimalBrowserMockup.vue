<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core'
import {Listbox, ListboxButton, ListboxOption, ListboxOptions,} from '@headlessui/vue'
import ScreenShot from "../Components/ScreenShot.vue";

const props = defineProps({
    project: Object
})

console.log(JSON.parse(JSON.stringify(props.project)))

const breakpoints = useBreakpoints(breakpointsTailwind)

const dropDownAnimation = ref(true)

const selectedTab = ref(props.project.tabs[0])
const mobileScreen = ref(breakpoints.smallerOrEqual('sm'))

onMounted(() => {
    setTimeout(() => {
        dropDownAnimation.value = false
    }, 10000)
})

const img = computed(() => {
    return selectedTab.value.mobile_screen && mobileScreen.value ? selectedTab.value.mobile_screen : selectedTab.value.screen
})

</script>

<template>

    <div class="relative rounded-xl mx-auto" :class="{'max-w-md': mobileScreen}">
        <div class="absolute top-0 inset-x-0 bg-white z-10 shadow-md">
            <div :class="{'md:px-6 ': !mobileScreen}" class="flex p-3 flex-row rounded-t-xl justify-between">
                <div :class="{'md:flex': !mobileScreen}" class="hidden flex-row space-x-2 items-center">
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-amber-300 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <Listbox as="div" :disabled="!project.tabs.length"
                         :class="[mobileScreen ?'grow mr-2' : 'w-full md:w-1/3']"
                         class="" v-model="selectedTab">
                    <div class="w-full relative">
                        <ListboxButton
                            class="bg-black bg-opacity-5 text-gray-600 text-center relative w-full  rounded-md shadow-sm pl-3 pr-10 py-2
              cursor-pointer focus:outline-none focus:ring-0 sm:text-sm"
                            @click="dropDownAnimation = false">
                            <div class="flex flex-row items-center space-x-2"
                                 :class="[mobileScreen ? 'justify-start': 'justify-center']">
                                <img :src="project.favicon" alt="" class="flex-shrink-0 h-4 w-4 rounded-full"/>
                                <span class="truncate">{{ project.name }} - {{ selectedTab.title }}</span>
                            </div>
                            <span v-if="dropDownAnimation && project.tabs.length > 1"
                                  class="absolute inset-y-1 right-1 w-7 rounded-md bg-gray-300 animate-ping">
            </span>
                            <span v-if="project.tabs.length"
                                  class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <i class="ri-arrow-down-s-line align-middle text-xl" aria-hidden="true"/>
            </span>
                        </ListboxButton>

                        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                                    leave-to-class="opacity-0">
                            <ListboxOptions
                                class="absolute z-10 mt-1 w-full bg-gray-100 shadow-lg max-h-60 rounded-md py-1
                text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                <ListboxOption as="template" v-for="tab in project.tabs" :key="tab.id" :value="tab"
                                               v-slot="{ active, selected }">
                                    <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default rounded-md select-none relative py-2 pl-3 pr-9']">
                                        <div class="flex flex-row space-x-2"
                                             :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                                            <img :src="project.favicon" alt=""
                                                 class="flex-shrink-0 h-4 w-4 rounded-full"/>
                                            <span>{{ tab.title }}</span>
                                        </div>

                                        <span v-if="selected"
                                              :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                  <i class="ri-checkbox-circle-line align-middle text-xl" aria-hidden="true"/>
                </span>
                                    </li>
                                </ListboxOption>
                            </ListboxOptions>
                        </transition>
                    </div>
                </Listbox>
                <div class="text-gray-500 text-xl hidden md:flex flex-row space-x-2 items-center">
                    <a class="p-1 h-9 w-9 active:text-gray-900 hover:bg-gray-200  rounded-md flex items-center justify-center"
                       :href="selectedTab.url" target="_blank">
                        <i class="ri-external-link-line"></i>
                    </a>
                    <button
                        @click="mobileScreen = false"
                        :class="{'bg-gray-200': !mobileScreen}"
                        class="p-1 h-9 w-9 active:text-gray-900 hover:bg-gray-200 rounded-md flex items-center justify-center">
                        <i class="ri-computer-line"></i>
                    </button>
                    <button :disabled="!selectedTab.mobile_screen"
                            @click="mobileScreen = true"
                            :class="{'bg-gray-200': mobileScreen}"
                            class="p-1 h-9 w-9 active:text-gray-900 hover:bg-gray-300 rounded-md flex items-center justify-center
                disabled:text-gray-300 disabled:hover:bg-opacity-0">
                        <i class="ri-smartphone-line"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="pt-[60px]">
            <ScreenShot :key="img" :img="img"/>
        </div>
    </div>

</template>

<script lang="ts">
export default {
    name: 'Browser'
}
</script>

