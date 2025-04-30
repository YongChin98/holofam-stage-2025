<!-- src/components/Header.vue -->
<script setup>
import CruiseIcon from '@/assets/icons/cruise.svg';
</script>

<template>
  <header class="bg-transparent text-white p-4 shadow-md flex justify-between items-center pl-10">
    <h1 class="text-3xl font-display">Legend of Houshou Marine</h1>
    <nav>
      <ul class="flex nav-bar">
        <li class="flex items-center justify-center">
          <CruiseIcon class="w-10 h-10"></CruiseIcon>
          <a href="/" class="font-display text-2xl hover:underline">Home</a>
        </li>
        <li class="flex items-center justify-center">
          <CruiseIcon class="w-10 h-10"></CruiseIcon>
          <a href="/cruises" class="font-display text-2xl hover:underline">Cruises</a>
        </li>
        <li class="flex items-center justify-center">
          <CruiseIcon class="w-10 h-10"></CruiseIcon>
          <a href="/chantey" class="font-display text-2xl hover:underline" >Chantey</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>

export default {
  name: "Header",
};

</script>

<style scoped>
/* Optional: additional styling */
</style>
