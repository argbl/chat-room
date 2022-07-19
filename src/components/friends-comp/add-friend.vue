<template>
  <div class="flex-1 overflow-hidden">
    <header class="border-b border-theme px-[30px] py-5">
      <h2 class="text-primary">添加好友</h2>
      <div>
        <div class="theme-second mt-4 px-3 rounded-lg flex items-center">
          <div class="py-1 mr-4 flex-1">
            <input
              v-model="id"
              type="text"
              class="h-10 w-full border-none outline-none bg-transparent leading-5 text-second tracking-wider"
              placeholder="输入用户id#0"
            />
          </div>
          <button
            :disabled="id === ''"
            @click="handleFriendsReq"
            class="h-8 min-h-8 min-w-[60px] bg-blue-700 text-white rounded text-sm px-4 py-[2px]"
            :class="id ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'"
          >
            <div class="mx-auto">发送好友请求</div>
          </button>
        </div>
      </div>
    </header>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { add } from '@/api/friend'
import useSocket from '@/hooks/useSocket'
import { ref } from 'vue'
import Message from '@cp/base/base-message'
const id = ref('')
const handleFriendsReq = async () => {
  if (!/[0-9]/.test(id.value)) {
    Message.error('请输入正确的id')
    return
  }
  const { data: result } = await add({ id: Number(id.value) })
  if (result.code === 200) {
    Message.success(result.message)
    if (result.data) {
      socket.emit('friend', {
        id: id.value,
        message: '您有一条好友信息',
      })
    }
  } else {
    Message.error(result.message)
  }
}

const socket = useSocket()
</script>

<style scoped></style>
