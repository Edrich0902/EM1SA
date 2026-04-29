<script setup lang="ts">
defineProps<{
  data: {
    title: string
    email: string
    phone: string
    address: string
  }
  footer: {
    text: string
  }
}>()
</script>

<template>
  <footer id="contact" class="py-32 bg-zinc-950 text-white border-t border-zinc-900">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 reveal">
        <div>
          <h2 class="text-5xl md:text-7xl font-black mb-12 tracking-tighter">{{ data.title }}</h2>
          <div class="space-y-8 text-zinc-400 font-light text-xl">
            <a
              :href="`mailto:${data.email}`"
              class="flex items-center gap-6 group cursor-pointer hover:text-emerald-400 transition-colors"
            >
              <div
                class="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-full group-hover:bg-emerald-500/20"
              >
                <i class="pi pi-envelope text-emerald-500"></i>
              </div>
              <span>{{ data.email }}</span>
            </a>
            <a
              :href="`tel:${data.phone.replace(/\s+/g, '')}`"
              class="flex items-center gap-6 group cursor-pointer hover:text-emerald-400 transition-colors"
            >
              <div
                class="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-full group-hover:bg-emerald-500/20"
              >
                <i class="pi pi-phone text-emerald-500"></i>
              </div>
              <span>{{ data.phone }}</span>
            </a>
            <a
              :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.address)}`"
              target="_blank"
              class="flex items-center gap-6 group cursor-pointer hover:text-emerald-400 transition-colors"
            >
              <div
                class="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-full group-hover:bg-emerald-500/20"
              >
                <i class="pi pi-map-marker text-emerald-500"></i>
              </div>
              <span>{{ data.address }}</span>
            </a>
          </div>
        </div>
        <div class="flex flex-col justify-between items-start lg:items-end">
          <div
            class="text-[12rem] font-black text-emerald-500/5 leading-none select-none hidden lg:block"
          >
            EM1SA
          </div>
          <div class="lg:text-right">
            <p class="text-2xl font-bold text-emerald-500 mb-2">Biological Vitality.</p>
            <p class="text-zinc-500 text-lg">{{ footer.text }}</p>
          </div>
        </div>
      </div>
      <div
        class="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-sm font-medium tracking-widest uppercase reveal"
      >
        <div>Made with excellence for EM1 South Africa.</div>
      </div>
    </div>
  </footer>
</template>
