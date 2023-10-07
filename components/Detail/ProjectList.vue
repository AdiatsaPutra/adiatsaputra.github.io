<script setup lang="ts"></script>

<template>
  <div>
    <div class="flex flex-row text-white text-xs">
      <p class="w-16 text-gray-400">2022</p>
      <p class="w-36">18hole</p>
      <p class="w-36 text-gray-400">18hole</p>
      <div class="w-36">
        <p class="text-xs">Mobile Apps</p>
      </div>
      <div class="w-36">
        <p
          class="text-xs text-primary bg-primary py-1 px-3 rounded-full bg-opacity-20 w-min"
        >
          Flutter
        </p>
      </div>
      <a href="">
        <div class="flex flex-row w-40">
          <Icon
            name="uil:link"
            color="white"
            size="1.5em"
            class="cursor-pointer"
          />
          <p class="text-xs">
            {{
              $formatText(
                "https://play.google.com/store/apps/details?id=com.eighteenhole.gamatechno"
              )
            }}
          </p>
        </div>
      </a>
    </div>
    <div class="h-0.1 bg-gray-800 mt-3"></div>
  </div>
</template>
