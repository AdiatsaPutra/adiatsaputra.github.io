<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col gap-4 rounded bg-gray-800 border-2 border-transparent p-5 hover:border-2 hover:border-gray-700 transition duration-300"
  >
    <div class="flex flex-col md:flex-row gap-4">
      <img src="/me.jpeg" alt="Me" class="rounded w-36 h-36 self-center" />
      <div>
        <p class="text-xl text-white font-bold mb-3">18hole</p>
        <p class="text-xs text-gray-400 text-justify mb-3">
          18 Hole is a golf application that makes it easy for players to know
          the progress of playing golf by converting the total score into a
          handicap index easily and quickly. With 18 holes, communication
          between golf players is also easier because there is a community
          feature that can connect golf players in it.
        </p>
        <div class="flex flex-row gap-2 items-center">
          <Icon
            name="uil:download-alt"
            color="white"
            size="1.5em"
            class="cursor-pointer"
          />
          <p class="text-xs text-white mt-2">2k downloads</p>
        </div>
      </div>
    </div>
  </div>
</template>
