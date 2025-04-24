<script setup lang="ts">
import Sidebar from "~/components/Sidebar.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    <header class="p-4 bg-blue-700 text-white text-xl font-semibold">ServiceTecNica</header>
    <div class="flex flex-row w-full h-full">
      <Sidebar/>
      <main class="relative w-full p-6">
        <slot/>
      </main>
    </div>
  </div>
</template>