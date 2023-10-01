<script setup lang="ts"></script>

<template>
  <section>
    <div
      class="pt-10 flex flex-col-reverse justify-center md:flex-row md:justify-between md:pb-10"
    >
      <div class="flex flex-col gap-3 text-white pb-10">
        <h1 class="text-2xl md:text-4xl font-bold">Adiatsa Putra</h1>
        <p class="text-md md:text-xl">Frontend Developer</p>
        <div class="text-sm text-gray-400 md:pr-16 text-justify">
          A frontend developer with 3 years of experience building fast and
          scalable frontend products with great user experience.
        </div>
        <div class="flex flex-col md:flex-row gap-4 md:items-center">
          <a
            href="mailto:adiatsaputraa@gmail.com"
            class="bg-primary py-1 px-2 md:py-2 md:px-5 text-center transition duration-200 rounded text-xs"
          >
            Contact Me
          </a>
          <a
            href="mailto:adiatsaputraa@gmail.com"
            class="bg-gray-100 py-1 px-2 md:py-2 md:px-5 text-center text-gray-900 hover:bg-gray-300 transition duration-200 rounded text-xs"
          >
            Download CV
          </a>
          <div class="flex gap-2">
            <Icon
              name="uil:github"
              color="white"
              size="1.5em"
              class="cursor-pointer"
            />
            <Icon
              name="uil:linkedin"
              color="white"
              size="1.5em"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <img
        src="/me.jpeg"
        alt="Me"
        class="w-52 h-52 rounded-lg pb-5 md:pb-0 self-center md:self-start hover:scale-105 transition duration-300"
      />
    </div>
  </section>
</template>
