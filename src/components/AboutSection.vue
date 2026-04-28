<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps<{
  data: {
    title: string
    content: string[]
    image: string
  }
}>()

const sectionRef = ref(null)
const imageRef = ref(null)

onMounted(() => {
  gsap.to(imageRef.value, {
    y: -50,
    ease: 'none',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
})
</script>

<template>
  <section
    id="about"
    ref="sectionRef"
    class="py-32 bg-white dark:bg-zinc-950 transition-colors duration-300 relative overflow-hidden"
  >
    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-20">
        <div class="lg:w-1/2 reveal">
          <h2
            class="text-4xl md:text-6xl font-black mb-10 text-zinc-900 dark:text-zinc-100 tracking-tighter leading-tight dark:glow-text-emerald"
          >
            {{ data.title }}
          </h2>
          <div class="space-y-8">
            <p
              v-for="(paragraph, index) in data.content"
              :key="index"
              class="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
        <div class="lg:w-1/2 w-full">
          <div ref="imageRef" class="relative group reveal" style="transition-delay: 200ms">
            <div
              class="absolute inset-0 bg-emerald-500 rounded-3xl rotate-3 scale-95 opacity-20 blur-2xl group-hover:rotate-6 transition-transform duration-700"
            ></div>
            <div class="relative overflow-hidden rounded-3xl glow-emerald">
              <img
                :src="data.image"
                alt="EM1SA Application"
                class="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
