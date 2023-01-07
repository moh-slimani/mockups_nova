<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'


const minimal = ref(true)
</script>

<template>
    <div class="flex flex-row bg-[#DFE1E5] rounded-lg p-4 items-center space-x-2 shadow-md">
        <img :src="project.favicon" alt="" class="h-[18px] w-[18px]">
        <h3 class=""> {{ project.name }}</h3>

        <Link v-if="$page.props.user"
              :href="route('projects.show', { project: project.id, _query: {minimal}})"
              target="_blank"
              class="text-sm text-gray-700 dark:text-gray-500 underline">
            view in Full screen
        </Link>

        <div class="grow"></div>
        <div class="space-x-2">
            <span>Minimal</span>
            <Switch
                v-model="minimal"
                :class="minimal ? 'bg-blue-600' : 'bg-gray-400'"
                class="relative inline-flex h-6 w-11 items-center rounded-full"
            >
                <span class="sr-only">Enable notifications</span>
                <span
                    :class="minimal ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                />
            </Switch>
        </div>
    </div>
    <template v-if="minimal">
        <div v-html="project.embedded_code_minimal">
        </div>
        <div class="bg-[#DFE1E5] rounded-lg p-4 shadow-md">
            <h3 class="font-bold mb-4">Code</h3>
            <div class="overflow-x-auto bg-gray-800 rounded-lg text-white p-4">
                <code class="prose-invert whitespace-pre max-w-full" v-text="project.embedded_code_minimal"></code>
            </div>
        </div>
    </template>
    <template v-else>
        <div v-html="project.embedded_code">
        </div>
        <div class="bg-[#DFE1E5] rounded-lg p-4 shadow-md">
            <h3 class="font-bold mb-4">Code</h3>
            <div class="overflow-x-auto bg-gray-800 rounded-lg text-white p-4">
                <code class="prose-invert whitespace-pre max-w-full" v-text="project.embedded_code"></code>
            </div>
        </div>
    </template>
</template>

<script>
export default {
    name: 'ProjectItem',
    props: {
        project: {}
    }
}
</script>
