<template>
  <div class="relative">
    <input
      class="w-full outline-none h-[40px] px-[10px] py-[10px] theme-third"
      v-model="selectLabel"
      @click="handleVisible"
    />
    <ul
      v-show="visible"
      class="w-full top-14 outline-none absolute theme-third"
    >
      <li
        @click="handleOption(item)"
        class="px-[10px] py-[10px]"
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

const selectLabel = ref('')

const handleOption = (item: SelectProps) => {
  selectedValue.value = item.id
  selectLabel.value = item.title
  visible.value = false
}
</script>

<style scoped></style>
