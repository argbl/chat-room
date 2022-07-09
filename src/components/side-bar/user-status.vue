<template>
  <section class="h-[52px] px-2 pb-[1px] bg-zinc-900 flex items-center z-50">
    <div class="relative flex items-center mr-2">
      <img src="@icon/play.png" class="rounded-full w-8 h-8 object-cover" />
      <svg
        class="absolute"
        width="40"
        height="32"
        viewBox="0 0 40 32"
        aria-hidden="true"
      >
        <rect width="10" height="10" fill="#000" x="22" y="22"></rect>
        <circle cx="28" cy="28" r="4" fill="#3ba55d"></circle>
      </svg>
    </div>
    <div class="flex flex-col flex-1">
      <div class="text-sm text-white font-semibold">
        {{ userStore.user.uname }}
      </div>
      <div class="text-xs text-zinc-400">#{{ userStore.user.uid }}</div>
    </div>
    <div class="flex-initial">
      <button
        @click="settingStore.handleSettingView()"
        class="w-8 h-8 rounded hover:bg-zinc-700 flex justify-center items-center"
      >
        <div class="w-5 h-5">
          <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#b9bbbe"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSettingStore } from '@/store/setting'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

const settingStore = useSettingStore()
</script>

<style scoped></style>
