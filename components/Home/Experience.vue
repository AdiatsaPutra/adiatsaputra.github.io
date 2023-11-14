<template>
    <div class="py-4">
        <button @click="toggleAccordion" type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right bg-purple-900 text-white rounded gap-3">
            <span>What is Flowbite?</span>
            <svg :class="{ 'rotate-180': isCollapsed }" class="w-3 h-3 shrink-0" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5 5 1 1 5" />
            </svg>
        </button>

        <div v-if="!isCollapsed" class="p-5 bg-purple-950">
            <p class="mb-2 text-white">
                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                dropdowns, modals, navbars, and more.
            </p>
            <p class="text-white">
                Check out this guide to learn how to
                <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get
                    started</a>
                and start developing websites even faster with components on top of Tailwind CSS.
            </p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isCollapsed: true,
        };
    },
    methods: {
        toggleAccordion() {
            this.isCollapsed = !this.isCollapsed;
        },
    },
};
</script>