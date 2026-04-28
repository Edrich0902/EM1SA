<script setup lang="ts">
import { ref, onMounted } from 'vue'

const particles = ref<any[]>([])
const particleCount = 20

onMounted(() => {
  for (let i = 0; i < particleCount; i++) {
    particles.value.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 5,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -40,
      opacity: Math.random() * 0.3 + 0.1,
    })
  }
})
</script>

<template>
  <div class="particles-container">
    <div
      v-for="p in particles"
      :key="p.id"
      class="particle"
      :style="{
        left: p.x + '%',
        top: p.y + '%',
        width: p.size + 'px',
        height: p.size + 'px',
        opacity: p.opacity,
        animationDuration: p.duration + 's',
        animationDelay: p.delay + 's',
      }"
    ></div>
  </div>
</template>

<style scoped>
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.particle {
  position: absolute;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0) 70%);
  border-radius: 50%;
  filter: blur(2px);
  animation: float linear infinite;
}

@keyframes float {
  0% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.2);
  }
  66% {
    transform: translate(-20px, -100px) scale(0.8);
  }
  100% {
    transform: translate(0, -150px) scale(1);
    opacity: 0;
  }
}
</style>
