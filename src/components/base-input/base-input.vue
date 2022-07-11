<template>
  <div class="w-full">
    <div class="w-full mb-2 text-xs text-second">
      <h5 class="inline">{{ label }}</h5>
      <span class="ml-2" v-show="showErrorMsg">{{ validator.errorMsg }}</span>
    </div>
    <div class="w-full">
      <input
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        class="w-full p-[10px] rounded outline-none"
        :style="{
          'background-color': bgColor,
          height: height,
        }"
        :type="inputType"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import validators from '@/validator/index'
const props = defineProps({
  modelValue: String,
  label: String,
  check: {
    type: String,
    default: 'noCheck',
  },
  inputType: {
    type: String,
    default: 'text',
  },
  bgColor: {
    type: String,
    default: '#ffffff',
  },
  height: {
    type: String,
    default: '40px',
  },
})
defineEmits(['update:modelValue'])
const showErrorMsg = ref(false)
const validator = validators[props.check]
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue && !validator.reg.test(newValue)) {
      showErrorMsg.value = true
    } else {
      showErrorMsg.value = false
    }
  }
)
</script>

<style scoped></style>
