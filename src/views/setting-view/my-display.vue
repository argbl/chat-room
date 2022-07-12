<template>
  <div>
    <div class="text-lg mb-5">外观</div>
    <div class="h-[1px] my-6 bg-theme-primary"></div>
    <div>
      <h5 class="mb-2 text-xs">主题</h5>
      <div
        class="mb-2 p-[10px] theme-third rounded"
        @click="handleSetTheme(ThemeType.Dark)"
      >
        <div class="flex cursor-pointer">
          <div class="mr-2">
            <svg
              v-show="theme === 'dark'"
              aria-hidden="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="currentColor"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="5"
                class="radioIconForeground-2BMavi"
                fill="currentColor"
              ></circle>
            </svg>
            <svg
              v-show="theme === 'light'"
              aria-hidden="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div class="flex-1">酷黑</div>
        </div>
      </div>
      <div
        class="mb-2 p-[10px] theme-third rounded"
        @click="handleSetTheme(ThemeType.Light)"
      >
        <div class="flex cursor-pointer">
          <div class="mr-2">
            <svg
              v-show="theme === 'dark'"
              aria-hidden="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              v-show="theme === 'light'"
              aria-hidden="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="currentColor"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="5"
                class="radioIconForeground-2BMavi"
                fill="currentColor"
              ></circle>
            </svg>
          </div>
          <div class="flex-1">明亮</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useSettingStore } from '@/store/setting'
import { ThemeType } from '@/models/theme'
const settingStore = useSettingStore()
const theme = computed(() => settingStore.theme)
const handleSetTheme = (theme: ThemeType) => {
  settingStore.setTheme(theme)
}
</script>
<style scoped></style>
