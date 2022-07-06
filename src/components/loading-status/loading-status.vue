<template>
  <div :class="`relative h-[${size}px] w-[${size}px]`">
    <div :class="`absolute w-[10px] h-[10px] animation-rotate`"></div>
    <div :class="`absolute w-[10px] h-[10px] animation-rotate2`"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  size: {
    type: Number,
    default: 32,
  },
})
const positiveSizePx = computed(() => {
  return props.size / 2 + 'px'
})

const negativeSizePx = computed(() => {
  return -props.size / 2 + 'px'
})
</script>

<style scoped>
.animation-rotate {
  animation: rotate1 2s ease-out infinite;
}
.animation-rotate2 {
  animation: rotate2 2s ease-out infinite;
}
@keyframes rotate1 {
  0% {
    transform: rotate(0) scale(1);
    left: v-bind('negativeSizePx');
    top: v-bind('negativeSizePx');
    background-color: #029ed7;
  }
  25% {
    transform: rotate(90deg) scale(0.5);
    left: v-bind('positiveSizePx');
    top: v-bind('negativeSizePx');
    background-color: #003f75;
  }
  50% {
    transform: rotate(180deg) scale(1);
    left: v-bind('positiveSizePx');
    top: v-bind('positiveSizePx');
    background-color: #029ed7;
  }
  75% {
    transform: rotate(270deg) scale(0.5);
    left: v-bind('negativeSizePx');
    top: v-bind('positiveSizePx');
    background-color: #003f75;
  }
  100% {
    transform: rotate(360deg) scale(1) translate(0, 0);
    left: v-bind('negativeSizePx');
    top: v-bind('negativeSizePx');
    background-color: #029ed7;
  }
}

@keyframes rotate2 {
  0% {
    transform: rotate(0) scale(1);
    left: v-bind('positiveSizePx');
    top: v-bind('positiveSizePx');
    background-color: #003f75;
  }
  25% {
    transform: rotate(90deg) scale(0.5);
    left: v-bind('negativeSizePx');
    top: v-bind('positiveSizePx');
    background-color: #029ed7;
  }
  50% {
    transform: rotate(180deg) scale(1);
    left: v-bind('negativeSizePx');
    top: v-bind('negativeSizePx');
    background-color: #003f75;
  }
  75% {
    transform: rotate(270deg) scale(0.5);
    left: v-bind('positiveSizePx');
    top: v-bind('negativeSizePx');
    background-color: #029ed7;
  }
  100% {
    transform: rotate(360deg) scale(1) translate(0, 0);
    left: v-bind('positiveSizePx');
    top: v-bind('positiveSizePx');
    background-color: #003f75;
  }
}
</style>
