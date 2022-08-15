<template>
  <div
    v-if="modelValue"
    class="fixed left-0 top-0 z-20 w-screen h-screen mask flex items-center justify-center"
    @click.self="$emit('update:modelValue', false)"
  >
    <div class="w-[500px] theme-third rounded">
      <div class="p-4 flex items-center justify-between">
        <header class="text-lg font-semibold">{{ title || '对话框' }}</header>
        <div class="cursor-pointer" @click="$emit('update:modelValue', false)">
          <img class="w-5 h-5" src="@icons/svg/close.svg" />
        </div>
      </div>
      <div v-if="content" class="px-4 pb-4">{{ content }}</div>
      <slot></slot>
      <div class="p-4 flex justify-end text-sm theme-third rounded-b">
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
