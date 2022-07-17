<template>
  <div
    class="flex items-center"
    v-for="friend in friendStore.computedFriendList"
    :key="friend.id"
  >
    <img class="avatar w-8 h-8 mr-2" :src="friend.avatar" alt="" />
    <div class="text-sm flex items-center">
      <div class="font-semibold">{{ friend.nickname }}</div>
      <span>#{{ friend.uid }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFriendStore } from '@/store/friend'

const friendStore = useFriendStore()

const friendList = computed(() => {
  return friendStore.computedFriendList
})

console.log(friendList.value)
</script>

<style scoped></style>
