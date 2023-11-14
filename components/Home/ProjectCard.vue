<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  downloads: { type: String, required: true },
  image: { type: String, required: true },
  technology: { type: String, required: true },
  url: { type: String, required: true },
  firstImage: { type: Boolean, default: false },
});
</script>

<template>
  <div>
    <div v-if="firstImage"
      class="w-[700px] h-[240px] md:h-[270px] overflow-hidden bg-gray-400 flex justify-center items-center rounded-t">
      <img :src="image" class="hover:scale-125 transition duration-500" />
    </div>
    <div v-else
      class="w-full h-[240px] md:h-[270px] overflow-hidden bg-gray-400 flex justify-center items-center rounded-t">
      <img :src="image" class="hover:scale-125 transition duration-500" />
    </div>
    <div class="bg-gray-800 p-5 h-40 rounded-b">
      <p class="text-xl text-white font-bold">{{ title }}</p>
      <div class="flex flex-row gap-4 items-center">
        <p class="text-xs text-primary mt-2 bg-primary py-1 px-3 rounded-full bg-opacity-20">
          {{ technology }}
        </p>
        <div v-if="downloads != ''">
          <a :href="url">
            <div class="flex flex-row gap-2 items-center">
              <Icon name="uil:download-alt" color="white" size="1.5em" class="cursor-pointer" />
              <p class="text-xs text-white mt-2 hover:text-primary hover:transition duration-300">
                {{ downloads }} downloads (playstore)
              </p>
            </div>
          </a>
        </div>
      </div>
      <!-- <p class="text-xs text-gray-400 text-justify my-2">
        {{ desc }}
      </p> -->

      <p class="hover:text-primary transition text-white duration-300 text-sm mt-5 cursor-pointer">See Detail</p>
    </div>
  </div>
</template>
