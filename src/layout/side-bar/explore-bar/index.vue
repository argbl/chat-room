<template>
  <aside class="h-screen theme-second w-60 flex flex-col justify-between">
    <nav class="flex flex-col" style="height: calc(100vh - 56px)">
      <div
        class="relative pr-2 flex-1 flex flex-col overflow-x-hidden overflow-y-scroll"
      >
        <h2 class="m-4 mr-0 font-bold text-2xl leading-[30px] text-primary">
          发现
        </h2>
        <div v-for="channel in channelList" :key="channel.id" class="py-[1px]">
          <router-link
            class="ml-2 px-2 text-second rounded block hover:bg-blue-600 hover:text-white"
            active-class="bg-blue-600 text-white"
            :to="{ name: 'Explore', params: { id: channel.id } }"
          >
            <div class="py-[5px] flex items-center">
              <div class="mr-3 w-8 h-8 flex justify-center items-center">
                <img :src="channel.avatar" />
              </div>
              <div class="flex-1 leading-5">{{ channel.title }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </nav>
    <slot></slot>
  </aside>
</template>

<script setup lang="ts">
import useChannel from '@/hooks/useChannel'
import { useRouter } from 'vue-router'
import BaseImg from '@/components/base/base-img/index.vue'
const { channelList, initChannel } = useChannel()
initChannel()

const router = useRouter()
const JumpToChannel = (id: number) => {
  router.push({
    name: 'Explore',
    params: {
      id,
    },
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
  background: rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: black;
}
</style>
