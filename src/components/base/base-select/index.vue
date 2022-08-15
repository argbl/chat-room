<template>
  <div class="relative">
    <input
      class="w-full outline-none h-8 py-2"
      v-model="selectedValue"
      @click="handleVisible"
    />
    <ul class="w-full outline-none absolute theme-second">
      <li
        v-show="visible"
        @click="handleOption(item)"
        class="py-2 px-3"
        v-for="item in (list as Array<SelectProps>)"
        :key="item.id"
        :value="item.id"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
interface SelectProps {
  id: number
  title: string
}
const props = defineProps({
  value: Number,
  list: {
    type: Array,
    default: () => {
      return []
    },
  },
})

const visible = ref(false)

const handleVisible = () => {
  console.log(visible.value)

  visible.value = !visible.value
}

const emit = defineEmits(['update:value'])
const selectedValue = computed({
  get: () => props.value,
  set: (val: any) => emit('update:value', val),
})

const handleOption = (item) => {
  console.log(item)

  selectedValue.value = item.id
  visible.value = false
}
</script>

<style scoped></style>
