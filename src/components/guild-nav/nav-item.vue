<template>
  <div
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    @click="handleEvent"
    class="w-full mb-2 relative flex justify-center"
  >
    <transition>
      <div
        v-show="isActive || isHover"
        class="absolute left-0 top-0 w-2 h-12 flex items-center"
      >
        <span
          class="absolute block w-2 rounded -ml-1 bg-white transition-all ease-out"
          :class="isActive || clickButton ? 'h-10' : isHover ? 'h-4' : ''"
        ></span>
      </div>
    </transition>
    <div>
      <div
        class="navIcon"
        :class="
          isActive || isHover
            ? activeColor + ' rounded-2xl'
            : defaultColor + ' rounded-full'
        "
      >
        <svg
          aria-hidden="false"
          :width="svgWidth"
          :height="svgHeight"
          :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
        >
          <slot
            :iconColor="
              isActive || isHover ? iconActiveColor : iconDefaultColor
            "
          ></slot>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  type: String,
  path: String,
  handleEvent: Function,
  isActive: Boolean,
  activeColor: String,
  defaultColor: String,
  iconDefaultColor: {
    type: String,
    default() {
      return '#3ba55d'
    },
  },
  iconActiveColor: {
    type: String,
    default() {
      return '#fff'
    },
  },
  svgWidth: Number,
  svgHeight: Number,
})
const isHover = ref(false)

const clickButton = ref(false)
const router = useRouter()
function handleEvent() {
  if (props.handleEvent) {
    props.handleEvent()
    clickButton.value = true
    setTimeout(() => {
      clickButton.value = false
    }, 1000)
  } else {
    router.push({
      path: props.path!,
    })
  }
}
</script>

<style lang="postcss" scoped>
.navIcon {
  @apply w-[3rem] h-[3rem] flex justify-center items-center transition-colors ease-out;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
