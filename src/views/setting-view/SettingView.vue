<template>
  <transition name="scale-fade">
    <div
      class="fixed z-40 top-0 left-0 w-full h-full flex items-start justify-center theme-primary"
    >
      <setting-bar></setting-bar>
      <setting-content></setting-content>
      <button class="pt-[60px]" @click="settingStore.handleSettingView()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import settingBar from './setting-bar.vue'
import SettingContent from './setting-content.vue'
import { useSettingStore } from '@/store/setting'

const settingStore = useSettingStore()
const theme = computed(() => settingStore.theme)
</script>

<style scoped>
.scale-fade-enter-active {
  transition: all 0.2s ease-out;
}

.scale-fade-leave-active {
  transition: all 0.2s ease-out;
}

.scale-fade-enter-from,
.scale-fade-leave-to {
  transform: scale(0.75);
  opacity: 0;
}
</style>
