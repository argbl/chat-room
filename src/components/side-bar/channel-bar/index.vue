<template>
  <aside class="h-screen theme-second w-60 flex flex-col justify-between">
    <nav class="flex flex-col" style="height: calc(100vh - 56px)">
      <div class="px-4 py-3 relative text-primary">
        <header class="relative z-10">
          <div>
            <h1
              class="text-sm font-semibold"
              :style="{
                color: titleColor,
              }"
            >
              Genshin Impact Official
            </h1>
          </div>
        </header>
        <div class="absolute left-0 top-0 overflow-hidden">
          <img
            class="object-cover"
            :style="{
              opacity: (100 - scrollTop) / 100,
              transform: `translateY(${-scrollTop}px) scale(${
                1 + scrollTop * 0.005
              })`,
            }"
            width="240"
            src="https://cdn.discordapp.com/banners/522681957373575168/80b2051c037e22dbaefd15bbf528fde5.webp?size=240"
          />
        </div>
      </div>

      <div
        ref="userListRef"
        class="relative pr-2 flex-1 flex flex-col overflow-x-hidden overflow-y-scroll text-primary"
      >
        <ul>
          <div class="h-[84px]"></div>
          <h2 class="pt-4 px-4 mb-2 font-semibold">用户列表</h2>
          <div v-for="index in 25" :key="index" class="ml-2">
            <div class="flex items-center rounded px-2 py-2 h-[42px]">
              <div class="mr-2">
                <img
                  class="rounded-full"
                  src="https://cdn.discordapp.com/avatars/102991676301144064/a_b068de1d964f6c329d30449f33870353.webp?size=32"
                />
              </div>
              <div class="flex-1 flex flex-col">
                <div class="text-yellow-500">可莉</div>
                <div class="text-xs text-second">正在炸鱼</div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
    <slot></slot>
  </aside>
</template>

<script setup lang="ts">
import { ThemeType } from '@/models/theme'
import { useSettingStore } from '@/store/setting'
import { ref } from 'vue'
const userListRef = ref<HTMLElement | null>(null)
const scrollTop = ref(0)
const titleColor = ref('#ffffff')
const settingStore = useSettingStore()
setTimeout(() => {
  userListRef.value?.addEventListener('scroll', () => {
    scrollTop.value = userListRef.value?.scrollTop || 0
    if (scrollTop.value === 0) {
      titleColor.value = '#ffffff'
    } else if (scrollTop.value !== 0 && settingStore.theme !== ThemeType.Dark) {
      titleColor.value = '#000000'
    }
  })
})
</script>

<style lang="postcss" scoped>
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 4px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: black;
}
</style>
