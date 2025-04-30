<template>
  <nav class="nav-sidebar">
    <ul>
      <li v-for="item in items" :key="item.label" @click="scrollToSection(item.target)" class="nav-link"
        :data-tooltip="item.label">
        <component :is="loadSvgIcon(item.icon)" class="icon w-10 h-10" />
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'
import '/src/assets/stylesheet/nav-sidebar.css'

const loadSvgIcon = (path) => defineAsyncComponent(() => import(/* @vite-ignore */ `/src/assets/icons/${path}.svg`))

defineProps({
  items: Array
});

function scrollToSection(id) {
  if (id != "section1") {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      console.warn(`[Sidebar] Could not find element with id: #${id}`)
    }
  } else {
    window.scrollTo(0, 0);
  }
}

</script>