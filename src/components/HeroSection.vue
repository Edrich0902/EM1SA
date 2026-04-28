<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FloatingParticles from './FloatingParticles.vue'

gsap.registerPlugin(ScrollTrigger)

defineProps<{
  data: {
    title: string
    subtitle: string
    cta: string
    image: string
  }
}>()

const heroRef = ref(null)
const titleRef = ref(null)
const bgRef = ref(null)

onMounted(() => {
  // Parallax Background
  gsap.to(bgRef.value, {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: heroRef.value,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })

  // Staggered Title Reveal
  const words = titleRef.value.innerText.split(' ')
  titleRef.value.innerHTML = words
    .map((word) => `<span class="inline-block opacity-0 translate-y-10">${word}&nbsp;</span>`)
    .join('')

  gsap.to(titleRef.value.children, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power4.out',
    delay: 0.5,
  })
})
</script>

<template>
  <section
    id="hero"
    ref="heroRef"
    class="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950"
  >
    <!-- Parallax Background Layer -->
    <div
      ref="bgRef"
      class="absolute inset-0 w-full h-[120%] bg-center bg-cover bg-no-repeat opacity-60"
      :style="{ backgroundImage: `url(${data.image})` }"
    ></div>

    <div
      class="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950"
    ></div>

    <!-- Microorganisms Particles -->
    <FloatingParticles />

    <div class="container mx-auto px-6 text-center text-white z-10">
      <h1
        ref="titleRef"
        class="text-7xl md:text-9xl font-black mb-6 tracking-tighter glow-text-emerald"
      >
        {{ data.title }}
      </h1>
      <p
        class="text-xl md:text-2xl mb-12 font-light max-w-2xl mx-auto opacity-80 leading-relaxed reveal"
        style="transition-delay: 800ms"
      >
        {{ data.subtitle }}
      </p>
      <div class="reveal" style="transition-delay: 1000ms">
        <a
          href="#about"
          class="clickable inline-block px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.4)]"
        >
          {{ data.cta }}
        </a>
      </div>
    </div>

    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-30">
      <i class="pi pi-chevron-down text-2xl text-white"></i>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}
</style>
