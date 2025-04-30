<template>
    <div class="splash-screen">
      <img :src="gifSrc" alt="Loading..." />
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  // Accept props if you want to pass a custom gif
  defineProps({
    gifSrc: {
      type: String,
      default: '/splash.gif' // default gif path
    }
  })
  </script>
  
  <style scoped>
  .splash-screen {
    position: fixed;
    inset: 0;
    background: #000; /* You can change background color */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Stay on top */
    transition: opacity 0.4s ease;
  }
  
  img {
    height: auto;
  }
  </style>
  