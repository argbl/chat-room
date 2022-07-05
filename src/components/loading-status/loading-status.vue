<template>
  <div :class="`relative h-[${height}] w-[${width}]`">
    <div class="absolute w-[10px] h-[10px] bg-blue-500 animation-rotate"></div>
    <div class="absolute w-[10px] h-[10px] bg-blue-500 animation-rotate2"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: '32px',
  },
  height: {
    type: String,
    default: '32px',
  },
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
    left: 0;
    top: 0;
  }
  25% {
    transform: rotate(90deg) scale(0.5);
    left: v-bind('props.width');
    top: 0;
  }
  50% {
    transform: rotate(180deg) scale(1);
    left: v-bind('props.height');
    top: v-bind('props.height');
  }
  75% {
    transform: rotate(270deg) scale(0.5);
    left: 0px;
    top: v-bind('props.height');
  }
  100% {
    transform: rotate(360deg) scale(1) translate(0, 0);
    left: 0;
    top: 0;
  }
}

@keyframes rotate2 {
  0% {
    transform: rotate(0) scale(1);
    left: v-bind('props.height');
    top: v-bind('props.height');
  }
  25% {
    transform: rotate(90deg) scale(0.5);
    left: 0px;
    top: v-bind('props.height');
  }
  50% {
    transform: rotate(180deg) scale(1);
    left: 0;
    top: 0;
  }
  75% {
    transform: rotate(270deg) scale(0.5);
    left: v-bind('props.height');
    top: 0;
  }
  100% {
    transform: rotate(360deg) scale(1) translate(0, 0);
    left: v-bind('props.height');
    top: v-bind('props.height');
  }
}
</style>
