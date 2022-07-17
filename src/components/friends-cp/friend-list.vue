<template>
  <div class="w-full h-full relative overflow-y-scroll friend-list">
    <div
      class="ml-4 flex items-center rounded-md p-4"
      v-for="friend in friendStore.computedFriendList"
      :key="friend.id"
    >
      <img class="avatar w-8 h-8 mr-2" :src="friend.avatar" alt="" />
      <div class="flex-1 text-sm flex items-center font-semibold">
        <div class="">{{ friend.nickname }}</div>
        <span>#{{ friend.uid }}</span>
      </div>
      <div
        class="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
      >
        <img src="@icon/close.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFriendStore } from '@/store/friend'
import useTheme from '@/hooks/useTheme'

const friendStore = useFriendStore()

const friendList = computed(() => {
  return friendStore.computedFriendList
})

const { bgColorPrimary, bgColorSecond, bgColorThird } = useTheme()
</script>

<style scoped>
.friend-list :hover {
  background-color: v-bind(bgColorSecond);
}

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
