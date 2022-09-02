<template>
  <!-- 消息列表 -->
  <transition name="slide-fade">
    <div
      v-show="visible"
      class="fixed w-[400px] text-center pl-5 p-4 rounded"
      :class="messageStyle"
    >
      <div
        class="h-4 leading-4 text-left text-sm font-normal flex justify-between items-center"
        :class="messageStyle"
      >
        <div class="flex flex-1 items-center">
          <div class="mr-1">
            <img v-if="config.type === 'text'" src="@icons/svg/text.svg" />
            <img v-if="config.type === 'success'" src="@icons/svg/check.svg" />
            <img v-if="config.type === 'error'" src="@icons/svg/error.svg" />
          </div>

          <span class="flex-1">{{ message }}</span>
        </div>

        <div
          class="cursor-pointer text-second"
          @click="onClose"
          v-if="config.close"
        >
          <img src="@icons/close.svg" />
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
  remove: { type: Function, default: () => null },
})
const visible = ref(false)
const messageStyle = computed(() => {
  if (props.config.type === 'success') {
    return 'bg-green-100 text-green-500'
  } else if (props.config.type === 'error') {
    return 'bg-red-100 text-red-500'
  }
  return 'bg-gray-100 text-second'
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
