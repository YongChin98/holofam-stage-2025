<template>
    <NavSidebar :items="navItems" />
    <DeferredContent>
        <section id="section1">
            <transition name="fade">
                <div v-if="show" class="senchou-preview content bg-[#E3A041] grid grid-cols-2">
                    <div class="flex flex-col justify-center top-[25%]">
                        <p class="text-5xl font-display">Houshou Marine</p>
                        <p class="text-5xl font-display">“Ahoy! Captain of the Houshou Pirates, <br> Houshou Marine
                            here!"
                            "Keep 'er steady!”</p>
                    </div>
                    <img src="/src/assets/images/houshou-marine-pr-01.webp"
                        class="h-150 animation-bounce w-200 object-none object-top" />
                </div>
            </transition>
        </section>
    </DeferredContent>
    <DeferredContent>
        <section id="section2">
            <transition name="fade">
                <div v-if="show" class="senchou-preview content bg-[#E3A041] grid grid-cols-2">
                    <div class="flex flex-col justify-center top-[25%]">
                        <p class="text-5xl font-display">Houshou Marine</p>
                        <p class="text-5xl font-display">“Ahoy! Captain of the Houshou Pirates, <br> Houshou Marine
                            here!"
                            "Keep 'er steady!”</p>
                    </div>
                    <img src="/src/assets/images/houshou-marine-pr-01.webp"
                        class="h-150 animation-bounce w-200 object-none object-top" />
                </div>
            </transition>
        </section>
    </DeferredContent>
    <DeferredContent>
        <section id="section3">
            <transition name="fade">
                <div v-if="show" class="senchou-preview content bg-[#E3A041] grid grid-cols-2">
                    <div class="flex flex-col justify-center top-[25%]">
                        <p class="text-5xl font-display">Houshou Marine</p>
                        <p class="text-5xl font-display">“Ahoy! Captain of the Houshou Pirates, <br> Houshou Marine
                            here!"
                            "Keep 'er steady!”</p>
                    </div>
                    <img src="/src/assets/images/houshou-marine-pr-01.webp"
                        class="h-150 animation-bounce w-200 object-none object-top" />
                </div>
            </transition>
        </section>
    </DeferredContent>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import NavSidebar from "@/components/NavSidebar.vue";
import CruiseIcon from '@/assets/icons/cruise.svg';

const show = ref(false)

onMounted(() => {
    setTimeout(() => {
        show.value = true
    }, 500) // quick delay to trigger transition
})

const navItems = [
    { icon: "cruise", label: "Home", target: "#section1" },
    { icon: "cruise", label: "Profile", target: "#section2" },
    { icon: "cruise", label: "Favorites", target: "#section3" },
];

</script>

<script>
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - window.innerHeight / 2) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
</script>

<style scoped>
.fade-enter-active {
    transition: opacity 1s ease;
}

.fade-enter-from {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}
</style>