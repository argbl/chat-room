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
              {{ currentRoom.title }}
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
            :src="currentRoom.cover"
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
          <div
            v-for="member in memberList"
            :key="member.id"
            class="ml-2 cursor-pointer mb-2"
            @click="jumpToChat(member.join_user.id)"
          >
            <div class="flex items-center rounded px-2 py-2 h-[42px]">
              <div class="mr-2">
                <base-img
                  class="rounded-full w-10 h-10"
                  :src="member.join_user.avatar"
                />
              </div>
              <div class="flex-1 flex flex-col">
                <div class="text-yellow-500">
                  {{ member.join_user.nickname }}
                </div>
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
import { member } from '@/api/room'
import { ThemeType } from '@/models/theme'
import { useSettingStore } from '@/store/setting'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useRoomStore } from '../../../store/room'
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

const { currentRoom } = storeToRefs(useRoomStore())
const useRoom = () => {
  const memberList = ref([])
  const getMemberList = async (room_id: number) => {
    const { data: result } = await member(room_id)
    if (result.code === 200) {
      memberList.value = result.data
    }
  }

  return { memberList, getMemberList }
}
const { memberList, getMemberList } = useRoom()
const route = useRoute()
watchEffect(() => {
  getMemberList(Number(route.params.id))
})

const { user } = storeToRefs(useUserStore())
const { handleSettingView } = useSettingStore()
const router = useRouter()
const jumpToChat = (user_id: number) => {
  if (user_id !== user.value.id) {
    router.push({
      name: 'Chat',
      params: {
        id: user_id,
      },
    })
  } else {
    handleSettingView()
  }
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
