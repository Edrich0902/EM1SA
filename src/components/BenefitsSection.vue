<script setup lang="ts">
import Vue3Lottie from 'vue3-lottie'

defineProps<{
  data: {
    title: string
    items: {
      icon: string
      title: string
      description: string
      lottie?: string
    }[]
  }
}>()

// Mapping icons to relevant Lottie animations
const lottieMap: Record<string, string> = {
  'pi-objects-column': 'https://assets2.lottiefiles.com/packages/lf20_m6cu9scf.json', // Nature/Leaf
  'pi-chart-line': 'https://assets5.lottiefiles.com/packages/lf20_at8unqdf.json', // Growth/Chart
  'pi-shield': 'https://assets10.lottiefiles.com/packages/lf20_5njp9vlu.json', // Shield
  'pi-globe': 'https://assets7.lottiefiles.com/packages/lf20_m6cu9scf.json' // Planet/Nature fallback
}
</script>

<template>
  <section id="benefits" class="py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <h2
        class="text-4xl md:text-6xl font-black mb-24 text-center text-zinc-900 dark:text-zinc-100 tracking-tighter reveal"
      >
        {{ data.title }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div
          v-for="(item, index) in data.items"
          :key="index"
          class="reveal group"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div
            class="glass glow-emerald p-10 rounded-[2rem] h-full transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-white dark:hover:bg-zinc-800"
          >
            <div class="w-32 h-32 mb-10 relative flex items-center justify-center mx-auto lg:mx-0">
              <!-- Decorative background glow - more visible on mobile -->
              <div class="absolute inset-0 bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-2xl opacity-100 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <!-- Primary Visual (Lottie or Icon) -->
              <div class="relative z-10 flex items-center justify-center w-full h-full">
                <Vue3Lottie
                  :animationLink="lottieMap[item.icon]"
                  :height="120"
                  :width="120"
                  :loop="true"
                  :autoPlay="true"
                  @on-error="() => console.log('Lottie failed to load')"
                />
                
                <!-- Absolute positioned icon - larger and more visible on mobile -->
                <i 
                  :class="['pi', item.icon, 'text-6xl text-emerald-600 dark:text-emerald-400 opacity-80 lg:opacity-30 group-hover:opacity-100 transition-all duration-500 absolute scale-100 group-hover:scale-110']"
                ></i>
              </div>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 text-center lg:text-left">
              {{ item.title }}
            </h3>
            <p class="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed text-center lg:text-left">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "../assets/main.css";
</style>
