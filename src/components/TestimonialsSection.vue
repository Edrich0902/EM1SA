<script setup lang="ts">
defineProps<{
  data: {
    title: string
    items: {
      name: string
      role: string
      content: string
    }[]
  }
}>()
</script>

<template>
  <section id="testimonials" class="py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
    <div class="container mx-auto px-6">
      <h2
        class="text-4xl md:text-6xl font-black mb-24 text-center text-zinc-900 dark:text-zinc-100 tracking-tighter reveal"
      >
        {{ data.title }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in data.items"
          :key="index"
          class="reveal group"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div
            class="glass p-10 rounded-[2.5rem] h-full flex flex-col justify-between transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-white dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
          >
            <div>
              <div class="flex gap-1 mb-8 text-emerald-500/40 group-hover:text-emerald-500 transition-colors duration-500">
                <i v-for="i in 5" :key="i" class="pi pi-star-fill text-sm"></i>
              </div>
              <p class="text-xl text-zinc-600 dark:text-zinc-400 font-light italic leading-relaxed mb-10">
                "{{ testimonial.content }}"
              </p>
            </div>
            
            <div class="flex items-center gap-4 pt-6 border-t border-zinc-100 dark:border-zinc-800/50">
              <div class="w-1.5 h-10 bg-emerald-500 rounded-full"></div>
              <div>
                <h4 class="font-bold text-lg text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">{{ testimonial.name }}</h4>
                <p class="text-sm text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider mt-1">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "../assets/main.css";
</style>
