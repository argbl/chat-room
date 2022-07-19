<template>
  <div class="w-full h-screen theme-primary">
    <section class="h-12 border-b border-theme px-2 flex items-center">
      <div class="flex flex-1 justify-between">
        <div class="text-lg font-semibold tracking-wider">
          @{{ chatStore.user.nickname }}
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
import { useFriendStore } from '../store/friend'
import useTheme from '@/hooks/useTheme'
import { useChatStore } from '@/store/chat'
import { useRoute } from 'vue-router'
import ChatRoom from '../components/chat-room/chat-room.vue'
const friendStore = useFriendStore()
friendStore.me()

const route = useRoute()
const { bgColorThird } = useTheme()
const chatStore = useChatStore()
chatStore.info(Number(route.params.id))
</script>

<style scoped lang="postcss">
.friend-item {
  @apply mx-2 my-0 px-2 rounded min-w-[32px] cursor-pointer;
}

.friend-item-active {
  background-color: v-bind(bgColorThird);
}

.friend-items :hover {
  background-color: v-bind(bgColorThird);
}
</style>
