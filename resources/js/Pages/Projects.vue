<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import ProjectItem from './ProjectItem.vue'

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

            <ProjectItem :project="project"/>

        </div>
    </div>


</template>
