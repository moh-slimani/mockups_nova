<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3'
import BrowserMockup from './BrowserMockup.vue'

const props = defineProps({ projects: Array })
</script>

<template>
    <head>
        <title>Mockups</title>
    </head>

    <div class="max-w-7xl mx-auto flex flex-col space-y-20 p-10">

        <div v-for="project in projects"
             :key="project.id"
             class="space-y-4"
        >


            <div class="flex flex-row bg-[#DFE1E5] rounded-lg p-4 items-center space-x-2 shadow-md">
                <img :src="project.favicon" alt="" class="h-[18px] w-[18px]">
                <h3 class=""> {{ project.name }}</h3>

                <Link v-if="$page.props.user"
                      :href="route('projects.show', project.id)"
                      target="_blank"
                      class="text-sm text-gray-700 dark:text-gray-500 underline">
                   view in Full screen
                </Link>
            </div>

            <div v-html="project.embedded_code">
            </div>


            <div class="bg-[#DFE1E5] rounded-lg p-4 shadow-md">
                <h3 class="font-bold mb-4">Code</h3>
                <div class="overflow-x-auto bg-gray-800 rounded-lg text-white p-4">
                    <code class="prose-invert whitespace-pre max-w-full" v-text="project.embedded_code"></code>
                </div>
            </div>
        </div>
    </div>


</template>
