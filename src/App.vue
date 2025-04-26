<script setup>
import Button from 'primevue/button'
</script>
<script>
import Header from './components/Header.vue'


export default {
  components: {
    Header,
  },
};
</script>

<link href="https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap" rel="stylesheet" />
<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>