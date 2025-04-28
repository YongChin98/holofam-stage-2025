<template>
  <div class="w-full max-w-2xl mx-auto">
    <Swiper
      v-if="messages.length > 0"
      :modules="[Autoplay]"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :loop="true"
      :spaceBetween="30"
      :slidesPerView="1"
      class="rounded-2xl shadow-lg"
    >
      <SwiperSlide
        v-for="message in messages"
      >
        <div class="p-8 bg-white rounded-2xl text-center text-xl font-semibold text-gray-800 shadow">
          "{{ message.message }}"
          <p class="pt-5 ">~ {{ message.name }}</p>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Loading State -->
    <div v-else class="text-center text-gray-500 py-10">
      Loading messages...
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Receive messages as props
defineProps({
  messages: {
    type: Array,
    required: true,
  },
});
</script>