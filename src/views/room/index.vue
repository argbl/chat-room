<template>
  <div class="w-full h-screen theme-primary">
    <section class="h-12 border-b border-theme px-2 flex items-center">
      <div class="flex flex-1 justify-between">
        <div class="text-lg font-semibold tracking-wider">
          @{{ currentRoom.title }}
        </div>
        <slot></slot>
      </div>
    </section>
    <div style="height: calc(100vh - 49px)" class="mr-1">
      <chat-room></chat-room>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Ref, ref, watchEffect } from 'vue'
import { useRoomStore } from '../../store/room'
const chatMessage = ref('')
const chatList = ref<string[]>([])
function publishMessage() {
  chatList.value = [...chatList.value, chatMessage.value]
}

const { currentRoom } = storeToRefs(useRoomStore())
</script>

<style scoped></style>
