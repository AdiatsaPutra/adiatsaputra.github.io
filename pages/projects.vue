<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex flex-col mt-5 mb-10">
      <a href="/">
        <Icon
          name="uil:arrow-left"
          color="white"
          size="1.5em"
          class="cursor-pointer"
        />
      </a>
      <p class="text-2xl text-white font-bold">All Projects</p>
    </div>
    <div class="flex flex-row text-gray-200 text-xs">
      <p class="w-16">Year</p>
      <p class="w-36">Project</p>
      <p class="w-36">Made at</p>
      <p class="w-36">Tag</p>
      <p class="w-36">Built with</p>
      <p class="w-40">Link</p>
    </div>
    <div class="h-0.1 bg-gray-800 mt-3 mb-5"></div>
    <div class="flex flex-col gap-5">
      <DetailProjectList />
      <DetailProjectList />
      <DetailProjectList />
      <DetailProjectList />
      <DetailProjectList />
      <DetailProjectList />
    </div>
  </div>
</template>
