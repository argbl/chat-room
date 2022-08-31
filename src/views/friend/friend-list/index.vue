<template>
  <div class="w-full h-full relative overflow-y-scroll friend-list">
    <div
      class="ml-4 flex items-center rounded-md p-4"
      v-for="friend in computedFriendList"
      :key="friend.id"
      @click="jumpToChat(friend.uid!)"
    >
      <base-img class="avatar w-8 h-8 mr-2" :src="friend.avatar" />
      <div class="flex-1 text-sm flex items-center font-semibold">
        <div class="">{{ friend.nickname }}</div>
        <span>#{{ friend.uid }}</span>
      </div>
      <div
        @click.stop=";(dialogVisible = true) && (currentFriend = friend)"
        class="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer theme-primary"
      >
        <img v-if="isHandle" class="w-5 h-5" src="@icons/svg/check.svg" />
        <img v-else class="w-5 h-5" src="@icons/svg/close.svg" />
      </div>
    </div>
  </div>
  <base-dialog
    v-model="dialogVisible"
    :title="`是否${isHandle ? '添加' : '删除'}该好友?`"
    :onConfirm="handleFriend"
  ></base-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useFriendStore } from '@/store/friend'
import useTheme from '@/hooks/useTheme'
import { update } from '@/api/friend'
import Message from '@cp/base/base-message'
import { FriendModel } from '@model/friend'
import { storeToRefs } from 'pinia'

const { friendActiveIndex, computedFriendList } = storeToRefs(useFriendStore())
const { me: MyFriend } = useFriendStore()
const dialogVisible = ref(false)
const { bgColorSecond, bgColorThird } = useTheme()

const isHandle = computed(() => {
  return friendActiveIndex.value === 2
})

const currentFriend = ref<FriendModel | null>(null)
const handleFriend = async () => {
  const { data: result } = await update({
    ...currentFriend.value,
    status: isHandle.value ? 1 : 2,
  })
  if (result.code === 200) {
    Message.success(result.message)
    await MyFriend()
  } else if (result.code === 400) {
    Message.error(result.message)
  }
}
const router = useRouter()
const jumpToChat = (uid: number) => {
  router.push({
    name: 'Chat',
    params: {
      id: uid,
    },
  })
}
</script>

<style scoped>
.friend-list > :hover {
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
