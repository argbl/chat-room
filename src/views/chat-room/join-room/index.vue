<template>
  <button class="text-sm px-3 py-2 theme-third rounded" @click="handleJoin">
    {{ active ? 'EXIT' : 'JOIN' }}
  </button>
</template>

<script setup lang="ts">
import { join } from '@/api/room'
import { useRoute } from 'vue-router'

const props = defineProps({
  active: Boolean,
  joinCb: {
    type: Function,
    default: () => {
      return () => true
    },
  },
})
const route = useRoute()
const handleJoin = async () => {
  const { data: result } = await join(
    Number(route.params.id),
    props.active ? 0 : 1
  )
  if (result.data) {
    props.joinCb(Number(route.params.id))
  }
}
</script>

<style scoped></style>
