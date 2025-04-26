<template>
  <NavSidebar :items="navItems" />
  <div
    class="pt-20 flex flex-wrap justify-center bg-fixed mx-auto animate-bg-scroll bg-[url('/src/assets/images/background/bg-1.webp')]">
    <section id="section1" class="">
      <div class="senchou-preview content flex flex-row">
        <div class="flex items-center w-150">
          <div class="p-10">
            <p class="text-3xl font-display"
              v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000' }">
              {{ $t('houshou-marine') }}
            </p>
            <p class="text-2xl font-display"
              v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-delay-1000 animate-duration-2000' }">
              {{ $t('greeting-message') }}
            </p>
          </div>
        </div>
        <div class="w-150">
          <img src="/src/assets/images/houshou-marine-pr-01.webp"
            v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000' }"
            class="animation-bounce col-span-2" />
        </div>
      </div>
    </section>
  </div>
  <div class="pt-30 flex justify-center">
    <section id="section2" class="">
      <div class="video-list flex">
        <div v-for="video in videos" :key="video.guid" class="p-2 hover-box">
          <div class="bg-[url('/src/assets/images/background/bg-1.webp')] p-5">
            <iframe :src="`https://www.youtube.com/embed/${getVideoId(video.link)}`" frameborder="0"
              allowfullscreen></iframe>
          </div>
          <img src="/src/assets/images/kumaichimi.png" class="popup-img" />
        </div>
      </div>
    </section>
  </div>
</template>
<!-- 
<script>
import { onMounted } from 'vue'

onMounted(() => {
})

const navItems = [
  { icon: "cruise", label: "Home", target: "section1" },
  { icon: "cruise", label: "Favorites", target: "section2" },
  { icon: "cruise", label: "Favorites", target: "section3" },
  { icon: "cruise", label: "Favorites", target: "section4" },
];
</script> -->

<style scoped>
.hover-box {
  position: relative;
  padding: 10px;
  cursor: pointer;
}

.popup-img {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 150px;
  transform: translate(-25%, 00%); /* Start off-screen at bottom */
  transition: transform 0.5s ease;
  z-index:-99;
}

.hover-box:hover .popup-img {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 150px;
  transition: transform 0.5s ease;
  transform: translate(-25%, -120%); /* Slide up into view */
}
</style>
<script>
import NavSidebar from "@/components/NavSidebar.vue";

export default {
  components: {
    NavSidebar
  },
  data() {
    return {
      videos: [],
      navItems: [
        { icon: "cruise", label: "Home", target: "section1" },
        { icon: "cruise", label: "Favorites", target: "section2" },
        { icon: "cruise", label: "Favorites", target: "section3" },
        { icon: "cruise", label: "Favorites", target: "section4" },
      ]
    };
  },
  methods: {
    async fetchVideos() {
      const channelId = "UCCzUftO8KOVkV4wQG1vkUvg"; // Replace with your own
      const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

      try {
        const res = await fetch(rssUrl);
        const data = await res.json();
        this.videos = data.items.slice(0, 3); // Get latest 3
      } catch (err) {
        console.error("Error fetching RSS:", err);
      }
    },
    getVideoId(link) {
      return link.split("v=")[1];
    },
  },
  mounted() {
    this.fetchVideos();
    window.scrollTo(0, 0);
  },
};
</script>