<script setup lang="ts">

import {ref} from "vue";

const props = defineProps<{
  img: string
}>()

const isLoaded = ref(false)

const onImgLoad = () => {
  isLoaded.value = true
  console.log('image loaded')
}

</script>

<template>
  <div class="overflow-y-scroll rounded-b-xl h-[calc(100vh)] pt-[52px] relative">
    <div v-show="!isLoaded"
         class="absolute inset-0 flex items-center rounded-b-xl justify-center bg-gray-200">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           class="animate-spin"
           style="margin: auto; background: none; display: block; shape-rendering: auto;"
           width="50px"
           height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#1d0e0b"
                stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
        </circle>
      </svg>
    </div>
    <img class="w-full rounded-b-xl"
         @load="onImgLoad"
         :src="img"
         alt="">
  </div>
</template>
<script lang="ts">
export default {
  name: 'ScreenShot'
}
</script>
