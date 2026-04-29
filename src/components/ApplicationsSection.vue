<script setup lang="ts">
defineProps<{
  data: {
    title: string
    items: {
      icon: string
      title: string
      description: string
    }[]
  }
}>()
</script>

<template>
  <section id="applications" class="py-32 bg-white dark:bg-zinc-950 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <h2
        class="text-4xl md:text-6xl font-black mb-24 text-center text-zinc-900 dark:text-zinc-100 tracking-tighter reveal"
      >
        {{ data.title }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in data.items"
          :key="index"
          class="reveal group"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div
            class="p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl dark:hover:bg-zinc-900/50 group-hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 mb-6 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500"
            >
              <i :class="['pi', item.icon, 'text-2xl']"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">{{ item.title }}</h3>
            <p class="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
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
