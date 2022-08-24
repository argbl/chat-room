<template>
  <div class="w-full">
    <div v-if="label" class="w-full mb-2 text-xs text-second">
      <h5 class="inline">{{ label }}</h5>
      <span class="ml-2" v-show="showErrorMsg">{{ validator.errorMsg }}</span>
    </div>
    <div class="w-full">
      <div v-if="textarea" class="py-2 pr-2 bg-third">
        <textarea
          :name="name"
          :value="modelValue"
          @input="
            $emit(
              'update:modelValue',
              ($event.target as HTMLInputElement).value
            )
          "
          class="w-full p-[10px] rounded outline-none theme-third textarea-reszie-able"
          :cols="cols"
          :maxlength="maxlength"
          :type="inputType"
        ></textarea>
      </div>
      <input
        v-else
        :name="name"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        class="w-full p-[10px] rounded outline-none theme-third"
        :style="{
          height: height,
        }"
        :type="inputType"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import validators from '@/validator/index'
import useTheme from '@/hooks/useTheme'
const props = defineProps({
  textarea: Boolean,
  modelValue: String,
  label: String,
  name: String,
  check: {
    type: String,
    default: 'noCheck',
  },
  inputType: {
    type: String,
    default: 'text',
  },
  height: {
    type: String,
    default: '40px',
  },
  cols: {
    type: Number,
    default: 3,
  },
  resize: {
    type: String,
    default: 'none',
  },
  maxlength: {
    type: Number,
    default: 200,
  },
})

const resize = computed(() => {
  return props.resize
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

const { bgColorSecond } = useTheme()
</script>

<style scoped>
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
  background: v-bind(bgColorSecond);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: v-bind(bgColorSecond);
}

.textarea-reszie-able {
  resize: v-bind(resize);
}
</style>
