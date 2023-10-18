<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

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
          <div
            class="hidden md:visible md:flex flex-row gap-4"
            :class="{ hidden: isMenuOpen }"
          >
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
          <div class="md:hidden">
            <button @click="toggleMenu" class="text-white">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          class="visible md:hidden text-center mb-3"
          :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
        >
          <a
            href="#about"
            class="text-xs text-white hover:underline hover:text-primary transition cursor-pointer block py-2"
          >
            About
          </a>
          <a
            href="#projects"
            class="text-xs text-white hover:underline hover:text-primary transition cursor-pointer block py-2"
          >
            Projects
          </a>
          <a
            href="#contact"
            class="text-xs text-white hover:underline hover:text-primary transition cursor-pointer block py-2"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
