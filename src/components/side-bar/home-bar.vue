<template>
  <aside class="h-screen theme-second w-60 flex flex-col justify-between">
    <nav class="flex flex-col" style="height: calc(100vh - 56px)">
      <div class="h-12 border-b border-theme px-3">
        <button
          class="my-[10px] w-full h-7 px-[6px] theme-third rounded text-seond text-sm text-left"
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
              <div class="w-8 h-8 mr-3 flex justify-center items-center">
                <svg
                  aria-hidden="false"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      fill-rule="nonzero"
                      d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                      transform="translate(2 4)"
                    ></path>
                    <path
                      d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="text-primary">好友</div>
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

const { bgColorThird } = useTheme()
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
