<template>
    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-blue-600' : 'bg-gray-200'"
      class="relative inline-flex h-10 w-16 items-center rounded-full"
    >
      <span
        :class="enabled ? 'translate-x-6' : 'translate-x-1'"
        class="inline-block h-9 w-9 transform rounded-full bg-white transition"
      ></span>
    </Switch>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import { Switch } from '@headlessui/vue'
  
    const enabled = ref(false)
  </script>