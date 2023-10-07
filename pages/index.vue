<script setup lang="ts">
// @ts-ignore
import { useMouse } from "@vueuse/core";

const { x, y } = useMouse();
</script>

<template>
  <div>
    <HomeTopInfo />
    <HomeAbout />
    <HomeProjectList />
    <HomeUpdates />
    <HomeFooter />
  </div>
</template>
