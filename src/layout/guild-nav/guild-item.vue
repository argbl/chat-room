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
            ? activeBgColor + ' rounded-2xl'
            : defaultBgColor + ' rounded-full'
        "
      >
        <svg
          aria-hidden="false"
          :width="width"
          :height="height"
          :viewBox="`0 0 ${width} ${height}`"
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
import { useAppStore } from '@/store/app'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  type: String,
  name: String,
  path: String,
  isActive: Boolean,
  defaultBgColor: String,
  activeBgColor: String,
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
  width: {
    type: Number,
    default: 24,
  },
  height: {
    type: Number,
    default: 24,
  },
  toggleDialog: {
    type: Function,
    default() {
      return () => true
    },
  },
})
const isHover = ref(false)

const clickButton = ref(false)
const appStore = useAppStore()
const router = useRouter()
function handleEvent() {
  if (props.type === 'system') {
    if (props.name === 'Add') {
      appStore.addGuildVisible = !appStore.addGuildVisible
    } else if (props.name === 'Download') {
      console.log('下载')
    }
  }
  if (props.path) {
    router.push({
      path: props.path,
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
