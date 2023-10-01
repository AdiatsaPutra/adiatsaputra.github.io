<script setup lang="ts">
// @ts-ignore
import { useMouse } from "@vueuse/core";

const { x, y } = useMouse();
</script>

<template>
  <MainNavbar />
  <div
    class="w-screen bg-gray-900 relative scroll-smooth flex justify-center overflow-hidden"
  >
    <div
      class="absolute bg-indigo-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
      :style="{
        left: `${x}px`,
        top: `${y}px`,
        width: `200px`,
        height: `200px`,
      }"
    ></div>
    <div class="md:w-5/6 lg:w-3/6 2xl:w-2/6 px-16 md:px-0">
      <HomeTopInfo />
      <HomeProjectList />
      <HomeUpdates />
      <HomeFooter />
    </div>
  </div>
</template>
