<template>
  <div class="w-full h-screen pr-2 bg-zinc-700">
    <div
      class="w-full h-full py-8 pl-8 pr-4 overflow-x-hidden overflow-y-scroll"
    >
      <div class="w-full">
        <div class="mb-8 min-h-[200px]">
          <img src="/src/assets/explore.svg" class="w-full" />
        </div>
      </div>
      <div>
        <section class="mb-8 min-w-[580px]">
          <h3>特色社区</h3>
          <div class="grid gap-4 mt-4"></div>
        </section>
      </div>
      <div class="mb-8 flex flex-col justify-center items-center">
        <img src="@icon/explore.svg" class="mb-2" />
        <h3 class="text-white">还有更多社区等你发现！</h3>
        <button class="text-sm text-blue-500">试着进行搜索吧。</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 7px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(0, 0, 0, 0.5);
}
</style>
