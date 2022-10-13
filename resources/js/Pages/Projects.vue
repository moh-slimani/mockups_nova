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
             v-html="project.embedded_code">
        </div>
    </div>

    <Link v-if="$page.props.user" :href="route('dashboard')" class="text-sm text-gray-700 dark:text-gray-500 underline">
        Dashboard
    </Link>
</template>
