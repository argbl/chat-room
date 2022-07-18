<template>
  <div
    v-if="modelValue"
    class="fixed left-0 top-0 z-20 w-screen h-screen mask flex items-center justify-center"
    @click="$emit('update:modelValue', false)"
  >
    <div class="w-[600px] relative theme-third rounded">
      <div
        class="absolute right-4 top-4 cursor-pointer"
        @click="$emit('update:modelValue', false)"
      >
        <img class="w-8 h-8" src="@icon/close.svg" alt="" />
      </div>
      <header class="text-lg p-4">{{ title || '对话框' }}</header>
      <div v-if="content" class="px-4 pb-4">{{ content }}</div>
      <slot></slot>
      <div class="p-4 flex justify-end text-sm theme-second rounded-b">
        <button @click="handleCancel()" class="px-4 py-[2px] h-8">
          <div class="mx-4">取消</div>
        </button>
        <button
          @click="handleConfirm()"
          class="px-4 py-[2px] h-8 button bg-blue-600 rounded"
        >
          <div class="mx-4">完成</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  onConfirm: {
    type: Function,
    default: () => {
      return () => true
    },
  },
  onCancel: {
    type: Function,
    default: () => {
      return () => true
    },
  },
})
const emit = defineEmits(['update:modelValue'])
const handleConfirm = () => {
  props.onConfirm()
  console.log(props.onConfirm)

  console.log('执行')

  emit('update:modelValue', false)
}
const handleCancel = () => {
  props.onCancel()
  emit('update:modelValue', false)
}
</script>

<style scoped>
.mask {
  background-color: rgba(0, 0, 0, 0.35);
}
</style>
