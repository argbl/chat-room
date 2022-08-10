<template>
  <div class="w-full h-screen theme-primary">
    <section class="h-12 border-b border-theme px-2 flex items-center">
      <div class="flex flex-1 justify-between">
        <div class="text-lg font-semibold tracking-wider">
          @{{ user_chat.nickname }}
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
import { useFriendStore } from '@/store/friend'
import useTheme from '@/hooks/useTheme'
import { useChatStore } from '@/store/chat'
import { useRoute } from 'vue-router'
import ChatRoom from './chat-room/index.vue'
const { me: myFriend } = useFriendStore()
myFriend()

const route = useRoute()
const { bgColorThird } = useTheme()
const { user_chat, init } = useChatStore()
init(Number(route.params.id))
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
