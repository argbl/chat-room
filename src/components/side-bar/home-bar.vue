<template>
  <aside class="h-screen theme-second w-60 flex flex-col justify-between">
    <nav class="flex flex-col" style="height: calc(100vh - 56px)">
      <div class="h-12 border-b border-theme px-3">
        <button
          class="my-[10px] w-full h-7 px-[6px] theme-third rounded text-sm text-left"
        >
          搜索
        </button>
      </div>
      <div
        class="relative pr-2 flex-1 flex flex-col overflow-x-hidden overflow-y-scroll scroll-style"
      >
        <ul class="">
          <li
            class="mt-2 ml-2 max-w-[224px] p-[1px] rounded theme-third cursor-pointer"
          >
            <div class="flex h-[42px] items-center px-2">
              <div
                @click="jumpFriend()"
                class="w-8 h-8 mr-3 flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div class="text-second">好友</div>
            </div>
          </li>
          <h2
            class="pt-[18px] pl-[18px] pr-2 pb-1 flex justify-between items-center"
          >
            <span class="text-seond text-xs">私信</span>
            <svg
              x="0"
              y="0"
              class="mr-2"
              aria-hidden="false"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <polygon
                fill-rule="nonzero"
                fill="#b9bbbe"
                points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
              ></polygon>
            </svg>
          </h2>
          <svg
            class="p-4 box-content"
            width="184"
            height="428"
            viewBox="0 0 184 428"
            fill="#36393f"
          >
            <template v-for="index in 10" :key="index">
              <rect
                x="40"
                :y="44 * (index - 1) + 6"
                width="144"
                height="20"
                rx="10"
                :opacity="1 - (index - 1) * 0.1"
              ></rect>
              <circle
                cx="16"
                :cy="44 * (index - 1) + 16"
                r="16"
                :opacity="1 - (index - 1) * 0.1"
              ></circle>
            </template>
          </svg>
        </ul>
      </div>
    </nav>
    <slot></slot>
  </aside>
</template>

<script setup lang="ts">
import useTheme from '@/hooks/useTheme'
import { useRouter } from 'vue-router'

const { bgColorThird } = useTheme()
const router = useRouter()
const jumpFriend = () => {
  router.push({
    path: '/',
  })
}
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
  background: v-bind(bgColorThird);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: v-bind(bgColorThird);
}
</style>
