<script setup lang="ts">
// @ts-ignore
import LearnVueLogo from './components/LearnVueLogo.vue'
import { useMouse, } from '@vueuse/core'

const { x, y } = useMouse()

</script>

<template>
  <div
    class="w-screen h-screen bg-gray-900 relative pt-16"
  >
    <div
      class="absolute bg-gray-500/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
      :style="{
        left: `${x}px`,
        top: `${y}px`,
        width: `200px`,
        height: `300px`
      }"
    ></div>
    <div>
      <UconventionalTab></UconventionalTab>
    </div>
  </div>
</template>