<template>
  <div>
    <transition name="fade">
      <SplashScreen v-if="showSplash" :gifSrc="`/images/background/hololive-sync-splash.gif?t=${Date.now()}`" />
    </transition>
      <router-view  />
  </div>
</template>

<script setup>
import SplashScreen from './components/Splashscreen.vue'
import { ref, onMounted } from 'vue'

const showSplash = ref(true)

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false
  }, 2500) // 1 second = 1000ms
})
</script>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>