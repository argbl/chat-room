<template>
  <div class="w-full h-screen theme-primary">
    <section class="h-12 border-b border-theme px-2 flex items-center">
      <div class="flex h-[42px] items-center">
        <div class="mx-2 flex justify-center items-center">
          <img class="w-6 h-6" src="@icons/svg/group.svg" />
        </div>
        <h3 class="text-second mr-2">好友</h3>
      </div>
      <div class="w-[1px] h-6 mx-2 theme-second"></div>
      <div class="flex flex-1 justify-between">
        <div class="flex text-third flex-1 friend-items">
          <div
            v-for="(item, index) in FriendTabs"
            :key="index"
            class="friend-item"
            @click="handleFriend(index)"
            :class="friendActiveIndex === index ? 'friend-item-active' : ''"
          >
            {{ item.label }}
          </div>
        </div>
        <slot></slot>
      </div>
    </section>
    <div style="height: calc(100vh - 49px)" class="mr-1">
      <friend-add v-if="friendActiveIndex === 3"></friend-add>
      <friend-list v-else></friend-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFriendStore } from '@/store/friend'
import useTheme from '@/hooks/useTheme'
import FriendList from './friend-list/index.vue'
import FriendAdd from './friend-add/index.vue'
import { storeToRefs } from 'pinia'
import FriendTabs from './friend-tabs'
const { friendActiveIndex } = storeToRefs(useFriendStore())
const { setFriendActiveIndex, me } = useFriendStore()
me()

const handleFriend = (index: number) => {
  setFriendActiveIndex(index)
}

const { bgColorThird } = useTheme()
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
