<script setup lang="ts"></script>

<template>
  <section id="about">
    <div class="w-full flex justify-center items-center py-7">
      <div class="">
        <p class="text-xl md:text-4xl font-bold text-white pb-7">My Expertise</p>
        <div class="flex flex-col md:flex-row items-center border-2 border-gray-400">
          <div class="flex flex-col w-full h-64 p-10 justify-center">
            <div class="flex flex-row gap-5">
              <Icon name="mi:computer" color="white" size="4em" class="cursor-pointer" />
              <div class="flex flex-col items-start">
                <p class="before:block before:absolute before:-inset-1 before:bg-pink-500 relative inline-block">
                  <span class="relative text-white">Software</span>
                </p>
                <p class="text-white py-2">Development</p>
              </div>
            </div>
            <p class="text-xs text-white pt-5 leading-relaxed">4 Years Experience in OOP and functional Dart, Javascript,
              Typescript and Golang</p>
          </div>
          <div class="flex flex-col border-y-2 md:border-x-2 border-gray-400 w-full h-64 p-10 justify-center">
            <div class="flex flex-row gap-5">
              <Icon name="material-symbols:flutter" color="white" size="4em" class="cursor-pointer" />
              <div class="flex flex-col items-start">
                <p class="before:block before:absolute before:-inset-1 before:bg-blue-500 relative inline-block">
                  <span class="relative text-white">Mobile</span>
                </p>
                <p class="text-white py-2">Development</p>
              </div>
            </div>
            <p class="text-xs text-white pt-5 leading-relaxed">3 years experience in developing cross platform mobile
              application
              using Flutter
              Framework</p>
          </div>
          <div class="flex flex-col w-full h-64 p-10 justify-center">
            <div class="flex flex-row gap-5">
              <Icon name="akar-icons:vue-fill" color="white" size="4em" class="cursor-pointer" />
              <div class="flex flex-col items-start">
                <p class="before:block before:absolute before:-inset-1 before:bg-orange-500 relative inline-block">
                  <span class="relative text-white">Web</span>
                </p>
                <p class="text-white py-2">Development</p>
              </div>
            </div>
            <p class="text-xs text-white pt-5 leading-relaxed">Experienced in Nuxtjs as a Frontend Framework, Go as
              Backend Framework and
              Mysql as Database</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
