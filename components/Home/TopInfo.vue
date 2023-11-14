<script setup lang="ts"></script>

<template>
  <section>
    <div
      class="pt-10 flex flex-col-reverse justify-center items-center md:flex-row md:justify-center md:items-center md:pb-36 h-96 md:h-screen">
      <div class="relative">
        <!-- <img src="/background.png" alt="Me" class="w-9/12" /> -->
      </div>
      <div class="absolute">
        <div class="flex flex-col gap-3 text-white pb-10 justify-center items-center">
          <p class="text-6xl md:text-7xl font-bold text-center uppercase">
            Adiatsa Putra
          </p>
          <h1 class="text-sm text-center md:pt-5 uppercase">
            Software Engineer, Mobile Developer & Frontened Developer
          </h1>
          <div class="text-xs text-gray-400 text-center md:pb-5 md:w-4/6">
            With 3 years experience of building fast and scalable frontend
            products with great user experience.
          </div>
          <div class="flex flex-row gap-2 md:gap-4 md:justify-center md:items-center">
            <a href="mailto:adiatsaputraa@gmail.com"
              class="bg-primary text-gray-800 py-1 px-2 md:py-2 md:px-5 text-center transition duration-200 rounded text-xs">
              Contact Me
            </a>
            <a href="/cv.pdf"
              class="bg-gray-100 py-1 px-2 md:py-2 md:px-5 text-center text-gray-900 hover:bg-gray-300 transition duration-200 rounded text-xs">
              Download CV
            </a>
            <a href="https://github.com/AdiatsaPutra" aria-label="Github">
              <Icon name="uil:github" color="white" size="1.5em" class="cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/adiatsa/" aria-label="LinkedIn">
              <Icon name="uil:linkedin" color="white" size="1.5em" class="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
