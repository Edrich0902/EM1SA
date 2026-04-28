<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const mouseX = ref(-100)
const mouseY = ref(-100)
const isHovering = ref(false)

const updateCursor = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY

  const target = e.target as HTMLElement
  isHovering.value = !!target.closest('a, button, .clickable')
}

onMounted(() => {
  window.addEventListener('mousemove', updateCursor)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursor)
})
</script>

<template>
  <div
    class="custom-cursor"
    :class="{ hovering: isHovering }"
    :style="{ transform: `translate3d(${mouseX}px, ${mouseY}px, 0)` }"
  >
    <div class="cursor-inner"></div>
    <div class="cursor-outer"></div>
  </div>
</template>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
}

.cursor-inner {
  position: absolute;
  top: -4px;
  left: -4px;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  transition: transform 0.15s ease-out;
}

.cursor-outer {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transition:
    transform 0.25s ease-out,
    background 0.25s ease-out;
}

.hovering .cursor-inner {
  transform: scale(0.5);
}

.hovering .cursor-outer {
  transform: scale(1.5);
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

@media (max-width: 1024px) {
  .custom-cursor {
    display: none;
  }
}
</style>
