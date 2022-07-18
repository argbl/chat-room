<template>
  <div class="w-full h-full relative overflow-y-scroll friend-list">
    <div
      class="ml-4 flex items-center rounded-md p-4"
      v-for="friend in friendStore.computedFriendList"
      :key="friend.id"
    >
      <img class="avatar w-8 h-8 mr-2" :src="friend.avatar" />
      <div class="flex-1 text-sm flex items-center font-semibold">
        <div class="">{{ friend.nickname }}</div>
        <span>#{{ friend.uid }}</span>
      </div>
      <div
        @click=";(dialogVisible = true) && (currentId = friend.id!)"
        class="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
      >
        <img src="@icon/close.svg" />
      </div>
    </div>
  </div>
  <base-dialog
    v-model="dialogVisible"
    title="确认删除该好友?"
    :onConfirm="handleDel"
  ></base-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFriendStore } from '@/store/friend'
import useTheme from '@/hooks/useTheme'
import BaseDialog from '../base-dialog/base-dialog.vue'
import { update } from '@/api/friend'
import Message from '../base-message'

const friendStore = useFriendStore()

const dialogVisible = ref(false)
const { bgColorSecond, bgColorThird } = useTheme()

const currentId = ref(0)
const handleDel = async () => {
  const { data: result } = await update({
    id: currentId.value,
    status: 2,
  })
  if (result.code === 200) {
    Message.success(result.message)
    await friendStore.me()
  } else if (result.code === 400) {
    Message.error(result.error)
  }
}
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
