<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  downloads: { type: String, required: true },
  image: { type: String, required: true },
  technology: { type: String, required: true },
  url: { type: String, required: true },
});
</script>

<template>
  <div
    class="flex flex-col gap-4 rounded-lg bg-gray-800 border-2 border-transparent p-5 hover:border-2 hover:border-gray-700 transition duration-300 cursor-pointer"
  >
    <a :href="url">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="relative pb-40 pr-0 md:pr-40">
          <img
            :src="image"
            alt="Me"
            class="absolute top-0 rounded w-full h-full self-center object-contain hover:scale-150 transition duration-300"
          />
        </div>
        <div>
          <p class="text-xl text-white font-bold mb-3">{{ title }}</p>
          <p class="text-xs text-gray-400 text-justify mb-3 h-20">
            {{ desc }}
          </p>
          <div class="flex flex-row gap-4 items-center">
            <p
              class="text-xs text-primary mt-2 bg-primary py-1 px-3 rounded-full bg-opacity-20"
            >
              {{ technology }}
            </p>
            <div v-if="downloads != ''">
              <div class="flex flex-row gap-2 items-center">
                <Icon
                  name="uil:download-alt"
                  color="white"
                  size="1.5em"
                  class="cursor-pointer"
                />
                <p class="text-xs text-white mt-2">{{ downloads }} downloads</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
