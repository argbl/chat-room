<template>
  <div :class="`relative h-[${size}px] w-[${size}px]`">
    <div
      :class="`absolute w-[10px] h-[10px] bg-${color}-500 animation-rotate`"
    ></div>
    <div
      :class="`absolute w-[10px] h-[10px] bg-${color}-500 animation-rotate2`"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  size: {
    type: Number,
    default: 32,
  },
  color: {
    type: String,
    default: 'blue',
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
  }
  25% {
    transform: rotate(90deg) scale(0.5);
    left: v-bind('positiveSizePx');
    top: v-bind('negativeSizePx');
  }
  50% {
    transform: rotate(180deg) scale(1);
    left: v-bind('positiveSizePx');
    top: v-bind('positiveSizePx');
  }
  75% {
    transform: rotate(270deg) scale(0.5);
    left: v-bind('negativeSizePx');
    top: v-bind('positiveSizePx');
  }
  100% {
    transform: rotate(360deg) scale(1) translate(0, 0);
    left: v-bind('negativeSizePx');
    top: v-bind('negativeSizePx');
  }
}

@keyframes rotate2 {
  0% {
    transform: rotate(0) scale(1);
    left: v-bind('positiveSizePx');
    top: v-bind('positiveSizePx');
  }
  25% {
    transform: rotate(90deg) scale(0.5);
    left: v-bind('negativeSizePx');
    top: v-bind('positiveSizePx');
  }
  50% {
    transform: rotate(180deg) scale(1);
    left: v-bind('negativeSizePx');
    top: v-bind('negativeSizePx');
  }
  75% {
    transform: rotate(270deg) scale(0.5);
    left: v-bind('positiveSizePx');
    top: v-bind('negativeSizePx');
  }
  100% {
    transform: rotate(360deg) scale(1) translate(0, 0);
    left: v-bind('positiveSizePx');
    top: v-bind('positiveSizePx');
  }
}
</style>
