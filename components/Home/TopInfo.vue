<script setup lang="ts"></script>

<template>
  <section>
    <div
      class="pt-10 flex flex-col-reverse justify-center items-center md:flex-row md:justify-between md:pb-72 md:h-screen"
    >
      <div
        class="flex flex-col gap-3 text-white pb-10 justify-center items-center"
      >
        <h1 class="text-xl text-center md:pt-24 text-primary">
          Hi, I'm Adiatsa Putra
        </h1>
        <p class="text-6xl md:text-9xl font-bold text-center">
          Frontend Developer
        </p>
        <div class="text-md text-gray-400 text-center md:py-5 md:w-4/6">
          With 3 years experience of building fast and scalable frontend
          products with great user experience.
        </div>
        <div
          class="flex flex-row gap-2 md:gap-4 md:justify-center md:items-center"
        >
          <a
            href="mailto:adiatsaputraa@gmail.com"
            class="bg-primary text-gray-800 py-1 px-2 md:py-2 md:px-5 text-center transition duration-200 rounded text-xs"
          >
            Contact Me
          </a>
          <a
            href="/cv.pdf"
            class="bg-gray-100 py-1 px-2 md:py-2 md:px-5 text-center text-gray-900 hover:bg-gray-300 transition duration-200 rounded text-xs"
          >
            Download CV
          </a>
          <a href="https://github.com/AdiatsaPutra" aria-label="Github">
            <Icon
              name="uil:github"
              color="white"
              size="1.5em"
              class="cursor-pointer"
            />
          </a>
          <a href="https://www.linkedin.com/in/adiatsa/" aria-label="LinkedIn">
            <Icon
              name="uil:linkedin"
              color="white"
              size="1.5em"
              class="cursor-pointer"
            />
          </a>
        </div>
      </div>
      <!-- <img
        src="/me.jpeg"
        alt="Me"
        class="w-52 h-52 rounded-lg pb-5 md:pb-0 self-center hover:scale-105 transition duration-300"
      /> -->
    </div>
  </section>
</template>
