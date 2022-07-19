<template>
  <div
    v-if="visible"
    class="fixed left-0 top-0 w-full h-full flex justify-center items-center mask"
  >
    <div class="w-[440px] theme-primary relative rounded">
      <div @click="hide" class="absolute cursor-pointer right-4 top-4">
        <img src="@icons/svg/close.svg" />
      </div>
      <div class="px-4 py-6 flex flex-col items-center">
        <div v-if="title" class="font-semibold text-2xl">{{ title }}</div>
        <div v-if="subtitle" class="mt-2">{{ subtitle }}</div>
      </div>
      <div class="pt-0 p-4">
        <slot></slot>
      </div>
      <div class="p-4 flex justify-end text-sm theme-second rounded-b">
        <button @click="handleCancel()" class="px-4 py-[2px] h-9">
          <div class="mx-4">取消</div>
        </button>
        <button
          @click="handleConfirm()"
          class="px-4 py-[2px] h-9 button bg-blue-600 rounded"
        >
          <div class="mx-4">完成</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps({
  // visible: Boolean,
  title: String,
  subtitle: String,
  confirm: {
    type: Function,
    default: () => {
      return () => true
    },
  },
  cancel: {
    type: Function,
    default: () => {
      return () => true
    },
  },
})

const visible = ref(false)
const show = () => {
  visible.value = true
}
const hide = () => {
  visible.value = false
}
defineExpose({
  visible,
  hide,
  show,
})
const emit = defineEmits(['confirm', 'cancel'])
const handleConfirm = () => {
  emit('confirm')
  hide()
}

const handleCancel = () => {
  emit('cancel')
  hide()
}
</script>

<style scoped>
.mask {
  background-color: rgba(0, 0, 0, 0.85);
}
</style>
