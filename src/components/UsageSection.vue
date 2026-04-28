<script setup lang="ts">
defineProps<{
  data: {
    title: string
    instructions: {
      step: number
      title: string
      description: string
    }[]
  }
}>()
</script>

<template>
  <section id="usage" class="py-32 bg-white dark:bg-zinc-950 transition-colors duration-300">
    <div class="container mx-auto px-6 max-w-5xl">
      <h2
        class="text-4xl md:text-6xl font-black mb-24 text-center text-zinc-900 dark:text-zinc-100 tracking-tighter reveal"
      >
        {{ data.title }}
      </h2>
      <div class="space-y-16">
        <div
          v-for="(item, index) in data.instructions"
          :key="index"
          class="flex flex-col md:flex-row items-center md:items-start gap-10 group reveal"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div
            class="flex-shrink-0 w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-4xl font-black text-emerald-600 dark:text-emerald-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white"
          >
            {{ item.step }}
          </div>
          <div class="text-center md:text-left">
            <h3 class="text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 tracking-tight">
              {{ item.title }}
            </h3>
            <p
              class="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-3xl"
            >
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
