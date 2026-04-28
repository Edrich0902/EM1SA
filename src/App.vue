<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import siteData from '@/assets/content/site-data.json'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import BenefitsSection from '@/components/BenefitsSection.vue'
import UsageSection from '@/components/UsageSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import CustomCursor from '@/components/CustomCursor.vue'

gsap.registerPlugin(ScrollTrigger)

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Intersection Observer for scroll reveal
const observeElements = async () => {
  await nextTick()
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  observeElements()

  // Science Section Parallax
  gsap.utils.toArray('.feature-card').forEach((card: any) => {
    gsap.fromTo(
      card.querySelector('img'),
      {
        y: -60,
      },
      {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    )
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="min-h-screen">
    <CustomCursor />

    <!-- Navigation -->
    <nav
      :class="[
        'fixed top-0 left-0 w-full z-50 transition-all duration-700 py-6',
        isScrolled || isMenuOpen ? 'glass py-4 shadow-xl' : 'bg-transparent',
      ]"
    >
      <div class="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          class="text-3xl font-black tracking-tighter text-emerald-600 dark:text-emerald-400"
          @click="closeMenu"
        >
          {{ siteData.header.title }}
        </a>

        <div class="hidden md:flex items-center gap-10">
          <a
            v-for="link in siteData.header.nav"
            :key="link.href"
            :href="link.href"
            class="text-xs font-bold tracking-[0.2em] hover:text-emerald-500 transition-colors uppercase"
            :class="isScrolled ? 'text-zinc-600 dark:text-zinc-400' : 'text-white'"
          >
            {{ link.label }}
          </a>
        </div>

        <button @click="toggleMenu" class="md:hidden text-emerald-500 focus:outline-none p-2">
          <i :class="['pi text-2xl', isMenuOpen ? 'pi-times' : 'pi-bars']"></i>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0 -translate-y-10"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-10"
      >
        <div
          v-if="isMenuOpen"
          class="md:hidden glass glass-border absolute top-full left-0 w-full py-12 px-6 shadow-2xl"
        >
          <div class="flex flex-col gap-8 text-center">
            <a
              v-for="link in siteData.header.nav"
              :key="link.href"
              :href="link.href"
              @click="closeMenu"
              class="text-2xl font-bold text-zinc-800 dark:text-zinc-100 hover:text-emerald-500 transition-colors"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
      </transition>
    </nav>

    <!-- Sections -->
    <main>
      <HeroSection :data="siteData.hero" />

      <!-- Stats Bar -->
      <section class="relative z-10 -mt-20 px-6 max-w-6xl mx-auto reveal">
        <div
          class="glass glass-border rounded-3xl p-10 md:p-16 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center shadow-2xl"
        >
          <div v-for="stat in siteData.stats" :key="stat.label">
            <div class="text-4xl md:text-5xl font-black text-gradient mb-2">{{ stat.value }}</div>
            <div class="text-xs uppercase tracking-widest text-zinc-500 font-bold">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </section>

      <AboutSection :data="siteData.about" />

      <BenefitsSection :data="siteData.benefits" />

      <!-- Features/Science Section -->
      <section id="features" class="py-32 bg-zinc-950 text-white overflow-hidden">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl md:text-6xl font-black mb-20 text-center tracking-tighter reveal">
            {{ siteData.features.title }}
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              v-for="(feature, idx) in siteData.features.items"
              :key="feature.title"
              class="feature-card relative group h-[500px] overflow-hidden rounded-4xl reveal"
              :style="{ transitionDelay: `${idx * 200}ms` }"
            >
              <img
                :src="feature.image"
                :alt="feature.title"
                class="absolute inset-0 w-full h-[120%] object-cover transition-opacity duration-1000 group-hover:opacity-80 opacity-60"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"
              ></div>
              <div class="absolute bottom-10 left-10 right-10">
                <h3 class="text-3xl font-bold mb-4">{{ feature.title }}</h3>
                <p class="text-zinc-300 font-light leading-relaxed max-w-md">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UsageSection :data="siteData.usage" />

      <!-- CTA Section -->
      <section class="py-32 relative overflow-hidden bg-emerald-600">
        <div
          class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"
        ></div>
        <div class="container mx-auto px-6 text-center relative z-10 reveal">
          <h2 class="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            {{ siteData.cta.title }}
          </h2>
          <p
            class="text-xl md:text-2xl text-emerald-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {{ siteData.cta.subtitle }}
          </p>
          <button
            class="bg-white text-emerald-600 hover:bg-zinc-100 px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl"
          >
            {{ siteData.cta.button }}
          </button>
        </div>
      </section>
    </main>

    <ContactSection :data="siteData.contact" :footer="siteData.footer" />
  </div>
</template>

<style>
@reference "./assets/main.css";

/* Global styles for dark mode compatibility with PrimeVue Aura */
.p-card {
  @apply glass !border-none shadow-none;
}

.rounded-4xl {
  border-radius: 2.5rem;
}
</style>
