<script setup lang="ts">
// @ts-ignore
import { useMouse } from "@vueuse/core";

const { x, y } = useMouse();
</script>

<template>
  <div>
    <HomeTopInfo />
    <HomeAbout />
    <HomeProjectList :hasViewMore="true" />
    <HomeUpdates />
    <HomeFooter />
  </div>
</template>
