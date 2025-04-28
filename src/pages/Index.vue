<template>
  <!--- Section 1 -->
  <div
    class="pt-10 flex flex-wrap justify-center bg-cover bg-center bg-fixed mx-auto animate-bg-scroll bg-[url('/images/background/bg-1.webp')] mdm:pt-20">
    <section id="section1" class="">
      <div class="senchou-preview content flex flex-row">
        <div class="flex items-center">
          <div class="p-10">
            <p class="text-xl font-display text-center text-white text-neon md:text-5xl"
              style="--neon-color:rgba(255,255,255,0.3)">
              {{ $t('hololive stage 2025') }}
            </p>
            <p class="text-xl font-display text-center text-white text-neon md:text-5xl"
              style="--neon-color:rgba(255,255,255,0.3)">
              {{ $t('Kuala Lumpur') }}
            </p>
            <p class="text-3xl font-glitch text-center text-white text-neon md:text-[120px]"
              style="--neon-color:rgba(255,255,255,0.3)">
              {{ $t('Fan Project') }}
            </p>
            <p class="text-sm pt-1 font-display text-center md:text-2xl">
              {{ $t('Together We Cheer For Hololive') }}
            </p>
            <p class="text-5xl pt-[50px] pb-[50px] font-breath text-center text-[#FFA8DE] text-neon md:text-[150px]"
              style="--neon-color:#ff009d">
              {{ $t('Synchronize') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- Section 2-->
  <div class="pt-10 flex justify-center bg-[#180C33]">
    <section id="section2" class="pl-[15%] pr-[10%] pb-[150px] w-full"
      v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000' }">
      <p class="text-xl font-display text-center text-white text-neon md:text-[75px]"
        style="--neon-color:rgba(255,255,255,0.3)">
        {{ $t('Target') }}
      </p>
      <p class="text-sm pt-1 pb-2 font-desc text-center md:text-2xl">
        {{ $t('Project Vision') }}
      </p>
      <p class="text-sm pt-1 pb-5 font-desc text-center md:text-xl">
        {{ $t('Project Mission') }}
      </p>
      <div class="w-full border-neon bg-[#2C153F] rounded-full h-2.5" style="--neon-color:rgba(255,255,255,0.3)">
        <div class="bg-[#FFA8DE] h-2.5 rounded-full" :style="{ width: progressWidth + '%' }"></div>
      </div>
      <p class="text-sm pt-1 pb-3 font-desc text-center md:text-lg">
        {{currentFund}} / {{targetFund}} MYR
      </p>
      <div class="w-full text-center pt-5">
        <button
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-display border-neon rounded-lg group bg-gradient-to-br from-[#771298] to-pink-500 group-hover:from-[#771298] group-hover:to-pink-500 text-white"
          style="--neon-color:rgba(255,255,255,0.3)">
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            {{ $t('Crowdfunding Link') }}
          </span>
        </button>
      </div>
    </section>
  </div>
  <!-- Section 3 -->
  <div class="pt-10 flex justify-center bg-[#A980AC]">
    <section id="section5" class="pl-[15%] pr-[10%] pb-[100px] w-full flex"
      v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000' }">
      <div class="w-[30%] flex flex-col items-center">
        <p class="text-2xl font-display text-center text-white text-neon md:text-5xl"
          style="--neon-color:rgba(255,255,255,0.3)"
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000' }">
          {{ $t('Flower Stand') }}
        </p>
        <div>
          <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-700">
            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path
                d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="w-[70%] flex flex-col items-center">
        <p class="text-2xl font-display text-center text-white text-neon md:text-5xl"
          style="--neon-color:rgba(255,255,255,0.3)"
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000' }">
          {{ $t('Fan Message') }}
        </p>
        <MessageCarousel :messages="fanMessages" />
        <div class="flex pt-8">
          <button
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-display border-neon rounded-lg group bg-gradient-to-br from-[#771298] to-pink-500 group-hover:from-[#771298] group-hover:to-pink-500 text-white"
          style="--neon-color:rgba(255,255,255,0.3)">
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            {{ $t('See All') }}
          </span>
        </button>
        </div>
      </div>
    </section>
  </div>
  <!-- Section 4-->
  <div class="pt-10 flex justify-center bg-[#813a8d]">
    <section id="section4" class="pl-[15%] pr-[10%] pb-[150px]">
      <p class="text-2xl font-display text-center text-white text-neon md:text-[75px]"
        style="--neon-color:rgba(255,255,255,0.3)"
        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000' }">
        {{ $t('Art & Appreciation Gifts') }}
      </p>
      <!-- Desktop Section 2 -->
      <div class="hidden md:flex">
        <Splitter class="border-neon relative" style="--neon-color:rgba(255,255,255,0.3)"
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000' }">
          <SplitterPanel class="flex items-center justify-center bg-[#2C153F]" :size="30">
            <!-- Overlay Text -->
            <div class="absolute bottom-[30%] right-[-10%] transform -rotate-45 origin-bottom-right p-4 text-neon"
              style="--neon-color:#ff009d">
              <h2 class="text-[#FFA8DE] text-[50px] font-breath">To Be Confirm</h2>
            </div>
            <div class="flex flex-col items-center pb-10">
              <span class="text-2xl font-display p-[10%]">{{ $t('Artist') }}</span>
              <img class="w-45 h-45 mb-5 rounded-full shadow-lg" src="/images/illustrator.webp" alt="Artist" />
              <p class="mb-1 text-4xl font-display p-5 dark:text-white">Artist Name</p>
              <div class="flex w-full items justify-evenly">
                <!-- Twitter Icon-->
                <button type="button" data-twe-ripple-init data-twe-ripple-color="light" title="x-button"
                  class="m-4 inline-block rounded-full bg-[#0C0C0C] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                  <span class="[&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                      <path
                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </span>
                </button>
                <!-- Facebook Icon -->
                <button type="button" data-twe-ripple-init data-twe-ripple-color="light" title="fb-button"
                  class="m-4 inline-block rounded-full bg-[#1877F2] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                  <span class="[&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                      <path
                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </span>
                </button>
                <!-- Instagram Icon -->
                <button type="button" data-twe-ripple-init data-twe-ripple-color="light" title="insta-button"
                  class="m-4 inline-block rounded-full bg-[#c13584] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                  <span class="[&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </SplitterPanel>
          <SplitterPanel :size="70">
            <Splitter layout="vertical">
              <SplitterPanel class="text-2xl flex items-center font-display justify-center bg-[#2C153F]" :size="15">
                {{ $t('Freebies') }}
              </SplitterPanel>
              <SplitterPanel :size="85">
                <Splitter>
                  <SplitterPanel class="flex items-center justify-center" :size="50">
                    <div class="p-10 bg-[#813a8d]">
                      <div class="flex justify-center flex-col items-center">
                        <img src="/images/freebies/lanyard-mockup.png" class="w-[70%] p-5" />
                        <p class="text-2xl font-display text-center">
                          {{ $t('Landyard + Card Holder') }}
                        </p>
                      </div>
                    </div>
                  </SplitterPanel>
                  <SplitterPanel class="flex items-center justify-center" :size="50">
                    <div class="p-10 bg-[#813a8d]">
                      <div class="flex justify-center flex-col items-center">
                        <img src="/images/freebies/postcard-mockup.png" class="w-[70%] p-5" />
                        <p class="text-2xl font-display text-center">
                          {{ $t('Postcard') }}
                        </p>
                      </div>
                    </div>
                  </SplitterPanel>
                </Splitter>
              </SplitterPanel>
            </Splitter>
          </SplitterPanel>
        </Splitter>
      </div>
      <!-- Mobile Section 2 -->
      <div class="relative pt-8 flex md:hidden">
        <Splitter class="border-neon relative" style="height: 100%" layout="vertical"
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000' }">
          <SplitterPanel class="flex items-center justify-center bg-[#2C153F]" :size="20">
            <!-- Overlay Text -->
            <div class="absolute top-[-7%] left-[-25%] transform -rotate-45 origin-bottom-right p-4 text-neon"
              style="--neon-color:#ff009d">
              <h2 class="text-[#FFA8DE] text-2xl font-breath">To Be Confirm</h2>
            </div>
            <div class="flex flex-col items-center pb-10">
              <span class="text-2xl font-display p-[10%]">{{ $t('Artist') }}</span>
              <img class="w-45 h-45 mb-5 rounded-full shadow-lg" src="/images/illustrator.webp" alt="Artist" />
              <p class="mb-1 text-4xl font-display p-5 dark:text-white">Artist Name</p>
              <div class="flex w-full items justify-evenly">
                <!-- Twitter Icon-->
                <button type="button" data-twe-ripple-init data-twe-ripple-color="light" title="x-button"
                  class="m-4 inline-block rounded-full bg-[#0C0C0C] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                  <span class="[&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                      <path
                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </span>
                </button>
                <!-- Facebook Icon -->
                <button type="button" data-twe-ripple-init data-twe-ripple-color="light" title="fb-button"
                  class="m-4 inline-block rounded-full bg-[#1877F2] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                  <span class="[&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                      <path
                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </span>
                </button>
                <!-- Instagram Icon -->
                <button type="button" data-twe-ripple-init data-twe-ripple-color="light" title="insta-button"
                  class="m-4 inline-block rounded-full bg-[#c13584] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                  <span class="[&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </SplitterPanel>
          <SplitterPanel class="text-2xl flex items-center font-display justify-center bg-[#2C153F] p-3" :size="10">
            {{ $t('Freebies') }}
          </SplitterPanel>
          <SplitterPanel :size="85">
            <SplitterPanel class="flex items-center justify-center" :size="20">
              <div class="p-3 bg-[#813a8d]">
                <div class="flex justify-center flex-col items-center">
                  <img src="/images/freebies/lanyard-mockup.png" class="w-[70%] p-5" />
                  <p class="text-2xl font-display text-center">
                    {{ $t('Landyard + Card Holder') }}
                  </p>
                </div>
              </div>
            </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center" :size="20">
              <div class="p-3 bg-[#813a8d]">
                <div class="flex justify-center flex-col items-center">
                  <img src="/images/freebies/postcard-mockup.png" class="w-[70%] p-5" />
                  <p class="text-2xl font-display text-center">
                    {{ $t('Postcard') }}
                  </p>
                </div>
              </div>
            </SplitterPanel>
          </SplitterPanel>
        </Splitter>
      </div>
    </section>
  </div>
  <!-- Section 5 -->
  <div class="pt-10 flex justify-center bg-[#A980AC]">
    <section id="section5" class="pl-[15%] pr-[10%] pb-[150px] w-full"
      v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000' }">
      <div class="flex flex-col items-center">
        <p class="text-2xl font-display text-center text-white text-neon md:text-5xl"
          style="--neon-color:rgba(255,255,255,0.3)"
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000' }">
          {{ $t('Organized By') }}
        </p>
        <img class="rounded-full w-50" src="/images/holofam.png" title="holofam icon">
      </div>
    </section>
  </div>
  <!-- Footer -->
  <div class="pt-10 pb-5 flex justify-center bg-[#A980AC]">
    <p class="font-desc italic">{{ $t('Fanmade Declaration') }}</p>
  </div>
</template>
<style scoped>
.hover-box:hover .popup-img {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 150px;
  transition: transform 0.5s ease;
  transform: translate(-25%, -120%);
  /* Slide up into view */
}

.text-neon {
  text-shadow: 0 0 5px var(--neon-color), 0 0 5px var(--neon-color), 0 0 5px var(--neon-color), 0 0 5px var(--neon-color);
}

.border-neon {
  box-shadow: 0 0 5px var(--neon-color), 0 0 5px var(--neon-color), 0 0 5px var(--neon-color), 0 0 5px var(--neon-color);
}
</style>
<script setup>
import { ref, onMounted } from 'vue';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import MessageCarousel from '../components/MessageSwiper.vue';

let fanMessages = ref([]);
let targetFund = ref();
let currentFund = ref();
let progressWidth = ref();

const jsonUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjB5guW7pyX4fS8F3sVA1l5kEYuwlj4CtJePBaIZ2aJtFEfDaua5l76gcIvOtt9gn5OKLgyVlY4fRrz39EC9KBUluEZ-0OOwtmKAZuHR1JK6myuIR93w_9acdlQ4SWq7e5Yx6dd2yaL3lpeZYejbUgTU6EB1XCm8WJ904Ao9g3NU2khfyOuBEgUApWG0smrAOS2ISru5Glz-TaWCXsFRZh08xxJAxPFgeLJso7HlXmRTveyUo0a-6NoLo4MaE_dSszbj11p8JWCTM7zsZ6pOQAiu_roOg&lib=Mxo4o13p51329Ypej5b31prONwxaIsT7L'; // <-- your JSON URL

onMounted(async () => {
  try {
    const res = await fetch(jsonUrl);
    const data = await res.json();
    fanMessages.value = data["fanMessage"];

    var configData = data["config"];
    targetFund = configData.targetFund;
    currentFund = configData.currentFund;
    progressWidth = currentFund / targetFund * 100;

  } catch (error) {
    console.error('Failed to load fan messages:', error);
  }
});

</script>