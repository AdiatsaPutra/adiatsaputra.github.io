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
  <div>
    <div
      class="w-full h-[150px] md:h-[330px] overflow-hidden bg-primary flex justify-center items-center"
    >
      <img
        :src="image"
        class="hover:scale-125 transition duration-500 cursor-pointer"
      />
    </div>
    <div>
      <p class="text-xl text-white font-bold pt-5">{{ title }}</p>
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
            <p class="text-xs text-white mt-2">
              {{ downloads }} downloads (playstore)
            </p>
          </div>
        </div>
      </div>
      <p class="text-xs text-gray-400 text-justify my-2">
        {{ desc }}
      </p>
      <div class="flex flex-row pt-2 gap-4 text-white text-sm">
        <a :href="url">
          <p class="hover:text-primary transition duration-300">
            See On Playstore
          </p>
        </a>
        <a href="">
          <p class="hover:text-primary transition duration-300">See Detail</p>
        </a>
      </div>
    </div>
  </div>
</template>
