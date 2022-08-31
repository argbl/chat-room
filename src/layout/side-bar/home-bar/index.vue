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
            <div
              class="flex h-[42px] items-center px-2"
              @click="jumpToFriend()"
            >
              <div class="w-8 h-8 mr-3 flex justify-center items-center">
                <img class="w-6 h-6" src="@icons/svg/group.svg" />
              </div>
              <div class="text-second">好友</div>
            </div>
          </li>
          <div v-if="userList.length > 0">
            <div
              v-for="user in userList"
              :key="user.id"
              class="ml-2 cursor-pointer"
              @click="jumpToChat(user.id)"
            >
              <div class="flex items-center rounded px-2 py-2 h-[42px]">
                <div class="mr-2">
                  <base-img class="rounded-full w-8 h-8" :src="user.avatar" />
                </div>
                <div class="flex-1 flex flex-col">
                  <div class="text-yellow-500">
                    {{ user.nickname }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            v-else
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
import { useChatStore } from '@/store/chat'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const { bgColorThird } = useTheme()
const router = useRouter()
const jumpToFriend = () => {
  router.push({
    path: '/',
  })
}
const { userList } = storeToRefs(useChatStore())

const jumpToChat = (uid: number) => {
  router.push({
    name: 'Chat',
    params: {
      id: uid,
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
  background: v-bind(bgColorThird);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: v-bind(bgColorThird);
}
</style>
