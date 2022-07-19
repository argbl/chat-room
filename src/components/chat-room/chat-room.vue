<template>
  <div class="relative w-full h-full">
    <div class="overflow-y-scroll" style="height: calc(100vh - (73px + 48px))">
      <div class="p-4">
        <div v-for="item in history" :key="item">{{ item }}</div>
      </div>
    </div>
    <div class="absolute bottom-0 w-full border-t p-4 input-block">
      <input
        v-model="inputValue"
        @keypress.enter="submit()"
        type="text"
        class="theme-second w-full h-10 rounded outline-none indent-4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import useTheme from '@/hooks/useTheme'
import useSocket from '@/hooks/useSocket'
import { useChatStore } from '@/store/chat'

const { bgColorThird } = useTheme()
const chatStore = useChatStore()
const user_chat = chatStore.user
const history = ref([])
const inputValue = ref('')
const socket = useSocket()
const submit = () => {
  socket.emit('send', {
    id: user_chat.id,
    message: inputValue.value,
  })
  inputValue.value = ''
}
chatStore.history()
</script>

<style scoped>
.input-block {
  border-color: v-bind(bgColorThird);
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
