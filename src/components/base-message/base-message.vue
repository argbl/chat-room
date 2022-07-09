<template>
  <!-- 消息列表 -->
  <transition name="slide-fade">
    <div
      v-show="visible"
      class="fixed w-[400px] text-center z-50 pl-5 p-4 rounded"
      :class="messageStyle"
    >
      <div
        class="h-4 leading-4 text-left text-sm font-normal flex justify-between items-center"
        :class="messageStyle"
      >
        <div class="flex flex-1 items-center">
          <div class="mr-1">
            <svg
              v-if="config.type === 'text'"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-if="config.type === 'success'"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-if="config.type === 'error'"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <span class="flex-1">{{ message }}</span>
        </div>

        <div
          class="cursor-pointer text-gray-500"
          @click="onClose"
          v-if="config.close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- 内容 -->
  </transition>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { MessageConfig } from './base-message'
const props = defineProps({
  message: { type: String, default: '' },
  config: {
    type: Object,
    default: () => {
      return {
        type: 'text',
        duration: 3000,
        close: false,
      }
    },
  }, // 消息配置项
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  remove: { type: Function, default: () => {} },
})
const visible = ref(false)
const messageStyle = computed(() => {
  if (props.config.type === 'success') {
    return 'bg-green-100 text-green-500'
  } else if (props.config.type === 'error') {
    return 'bg-red-100 text-red-500'
  }
  return 'bg-gray-100 text-gray-500'
})

// 打开消息
const onOpen = (config: MessageConfig) => {
  setTimeout(() => {
    visible.value = true
  }, 10)

  // 指定时间后移除消息
  if (config.duration !== 0) {
    setTimeout(() => {
      onClose()
    }, config.duration)
  }
}

onOpen(props.config)

// 消息关闭
const onClose = () => {
  visible.value = false
  setTimeout(() => {
    props.remove()
  }, 200)
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
  transform: translateY(-20px);
  opacity: 0;
}
</style>
