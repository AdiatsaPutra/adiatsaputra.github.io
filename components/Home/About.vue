<script setup lang="ts"></script>

<template>
  <section id="about">
    <div class="mb-10" v-motion-slide-visible-bottom>
      <p class="text-xl md:text-2xl font-bold text-white">About Me</p>
      <div
        class="flex flex-col-reverse md:flex-row justify-center items-center md:justify-between my-5"
      >
        <div class="flex flex-col gap-2 text-justify md:w-4/6 leading-relaxed">
          <p class="text-gray-400 text-xs">
            My name is Adiatsa and I'm a student at Muhammadiyah University Of
            Yogyakarta, majoring Information Technology. Tech has been my
            favorite subject since my highschool, so that's why I decided to be
            in Information Technology. I have been interested with Mobile and
            Web Development since the beginning of my college since its
            chalenging and it's super satisfying to solve the problem.
          </p>
          <p class="text-gray-400 text-xs my-3">
            Fast forward today, I've been a freelancher since 2020 and I've
            handle various small and large project with 18hole and Ylabs,
            building mobile apps and ocassionally building web apps too.
          </p>
          <p class="text-gray-400 text-xs">Here are technologies that I use:</p>
          <div class="grid grid-cols-3 md:grid-cols-5 gap-2">
            <p
              class="text-xs text-primary text-center bg-primary py-1 px-3 rounded-full bg-opacity-20"
            >
              Flutter
            </p>
            <p
              class="text-xs text-primary text-center bg-primary py-1 px-3 rounded-full bg-opacity-20"
            >
              Javascript
            </p>
            <p
              class="text-xs text-primary text-center bg-primary py-1 px-3 rounded-full bg-opacity-20"
            >
              Typescript
            </p>
            <p
              class="text-xs text-primary text-center bg-primary py-1 px-3 rounded-full bg-opacity-20"
            >
              Nuxt/Vue
            </p>
            <p
              class="text-xs text-primary text-center bg-primary py-1 px-3 rounded-full bg-opacity-20"
            >
              Golang
            </p>
          </div>
        </div>
        <img
          src="/me_pic.png"
          alt=""
          class="w-40 h-40 mb-5 hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  </section>
</template>
