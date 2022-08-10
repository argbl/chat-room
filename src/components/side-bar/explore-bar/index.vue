<template>
  <aside class="h-screen theme-second w-60 flex flex-col justify-between">
    <nav class="flex flex-col" style="height: calc(100vh - 56px)">
      <div
        class="relative pr-2 flex-1 flex flex-col overflow-x-hidden overflow-y-scroll"
      >
        <h2 class="m-4 mr-0 font-bold text-2xl leading-[30px] text-primary">
          发现
        </h2>
        <div
          v-for="item in exploreList"
          :key="item.name"
          class="ml-2 py-[1px] text-second"
        >
          <div
            class="rouned py-[5px] px-2 hover:bg-blue-600 hover:text-white rounded flex items-center"
          >
            <div class="mr-3 w-8 h-8 flex justify-center items-center">
              <svg
                aria-hidden="false"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" :d="item.d"></path>
              </svg>
            </div>
            <div class="flex-1 leading-5">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </nav>
    <slot></slot>
  </aside>
</template>

<script setup lang="ts">
import exploreList from '.'
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
