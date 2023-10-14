<script setup lang="ts"></script>

<template>
  <header class="sticky top-0 z-50 bg-gray-900 border-b-0.1 border-gray-700">
    <div class="w-screen flex justify-center backdrop-blur-2xl">
      <div class="w-full md:w-5/6 lg:w-3/6 2xl:w-2/6 px-16 md:px-0">
        <div
          class="flex flex-row justify-between items-center gap-4 py-5 sticky"
        >
          <img
            src="/logo.png"
            alt="Me"
            class="w-10 h-15 rounded-lg md:pb-0 cursor-pointer"
          />
          <div class="flex flex-row gap-4">
            <a
              href="#about"
              class="text-xs text-white hover:underline hover:text-primary transition cursor-pointer"
            >
              About
            </a>
            <a
              href="#projects"
              class="text-xs text-white hover:underline hover:text-primary transition cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#contact"
              class="text-xs text-white hover:underline hover:text-primary transition cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
