<script setup lang="ts">
// @ts-ignore
import { useMouse } from "@vueuse/core";

const title = ref("Adiatsa");
const description = ref(
  "Adiatsa is a Frontend Developer with 3 years experience of building fast and scalable frontend products with great user experience."
);

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});

const { x, y } = useMouse();
</script>

<template>
  <div>
    <MainNavbar />
    <div class="bg-gray-900">
      <div
        class="w-screen relative scroll-smooth flex justify-center overflow-hidden"
      >
        <div
          class="absolute bg-indigo-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
          :style="{
            left: `${x}px`,
            top: `${y}px`,
            width: `500px`,
            height: `500px`,
          }"
        ></div>
        <div class="md:w-5/6 lg:w-3/6 2xl:w-2/6 px-16 md:px-0">
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </div>
      </div>
    </div>
  </div>
</template>
