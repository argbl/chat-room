<template>
  <div class="text-second relative">
    <div class="cursor-pointer" @click.stop="handleInBox">
      <svg x="0" y="0" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
    <transition name="slide-fade">
      <div
        v-show="visible"
        class="absolute z-10 theme-second top-8 right-0 w-[500px] h-[400px] rounded shadow"
      >
        <header class="theme-third px-4 py-3">
          <div class="my-[1px]">消息</div>
        </header>
        <div v-loading="loading" class="pr-1">
          <div class="h-[350px] pl-4 py-3 overflow-y-scroll">
            <div
              v-for="message in messageList"
              :key="message.id"
              class="flex justify-between items-center"
            >
              <div class="flex items-center">
                <img class="avatar mr-2 w-10 h-10" :src="message.avatar" />
                <div class="text-second flex-1">
                  <div class="font-semibold text-sm text-primary">
                    {{ message.nickname }}
                  </div>
                  <div class="text-xs">{{ message.content }}</div>
                </div>
              </div>
              <div class="flex items-center">
                <div
                  @click="resolveMessage(message, 2)"
                  class="w-6 h-6 flex justify-center items-center rounded-full mr-2 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div
                  @click="resolveMessage(message, 1)"
                  class="w-6 h-6 flex justify-center items-center rounded-full cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { resolve } from '@/api/message'
import useTheme from '@/hooks/useTheme'
import { useMessageStore } from '@/store/message'
import { MessageModel } from '@model/message'
import { ref, onUnmounted, computed } from 'vue'
import Message from '../base-message'
const visible = ref(false)
const { bgColorThird } = useTheme()

const closeInBox = () => {
  visible.value = false
}
window.document.addEventListener('click', closeInBox)
onUnmounted(() => {
  window.document.removeEventListener('click', closeInBox)
})

const messageStore = useMessageStore()
const loading = ref(false)
const handleInBox = async () => {
  visible.value = !visible.value
  loading.value = true
  await messageStore.me()
  loading.value = false
}

const messageList = computed(() => {
  return messageStore.messageList
})

const resolveMessage = async (message: MessageModel, status: number) => {
  const { data: result } = await resolve(message, status)
  if (result.code === 200) {
    Message.success(result.message)
  } else {
    Message.error(result.message)
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
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
