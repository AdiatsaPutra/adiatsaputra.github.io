<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel, TransitionRoot } from '@headlessui/vue'

interface Tab {
  title: string
  img: string
  tag: string
  excerpt: string
  link: string
}

const tabs: Tab[] = [
  {
    title: 'Lassen Peak',
    img: '',
    tag: 'Mountain',
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: '#0'
  },
  {
    title: 'Mount Shasta',
    img: '',
    tag: 'Mountain',
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: '#0'
  },
  {
    title: 'Eureka Peak',
    img: '',
    tag: 'Mountain',
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: '#0'
  },
]
</script>

<template>
  <TabGroup v-slot="{ selectedIndex }">

    <!-- Buttons -->
    <div class="flex justify-around items-start">
      <ThemeSwitch></ThemeSwitch>
      <TabList class="max-[480px]:max-w-[180px] inline-flex flex-wrap justify-center bg-slate-200 rounded-[20px] p-1 mb-8 min-[480px]:mb-12">      
        <Tab :key="index" v-for="(tab, index) in tabs" as="template">
          <button
            class="flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out"
            :class="selectedIndex === index ? 'bg-white text-slate-900' : 'text-slate-600 hover:text-slate-900'"
          >{{ tab.title }}</button>          
        </Tab>
      </TabList>
    </div>

    <!-- Tab panels -->
    <TabPanels class="max-w-[6400px] mx-auto">
      <div class="relative flex flex-col">
        <TabPanel
          :key="index"
          v-for="(tab, index) in tabs"
          :static="true"
          class="focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
          :class="selectedIndex !== index ? 'order-first' : ''"
        >
          <TransitionRoot
            as="article"
            :show="selectedIndex === index"
            enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 transform"
            enterFrom="opacity-0 -translate-y-8"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-300 transform absolute"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-12"
          >
            <div class="flex flex-col lg:flex-row justify-center items-center gap-9 px-6">
                <MiddleCard></MiddleCard>
                <MiddleCard></MiddleCard>
                <MiddleCard></MiddleCard>
            </div>
          </TransitionRoot>        
        </TabPanel>

      </div>
    </TabPanels>

  </TabGroup>  
</template>