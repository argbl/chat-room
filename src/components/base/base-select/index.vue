<template>
  <select v-model="selectedValue" class="w-full outline-none">
    <option
      v-for="item in (list as Array<SelectProps>)"
      :key="item.id"
      :value="item.id"
    >
      {{ item.title }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { computed } from 'vue'
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

const emit = defineEmits(['update:value'])
const selectedValue = computed({
  get: () => props.value,
  set: (val: any) => emit('update:value', val),
})
</script>

<style scoped></style>
