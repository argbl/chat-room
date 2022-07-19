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
            v-for="(item, index) in FiendItems"
            :key="index"
            class="friend-item"
            @click="handleFriend(index)"
            :class="
              friendStore.friendActiveIndex === index
                ? 'friend-item-active'
                : ''
            "
          >
            {{ item.label }}
          </div>
        </div>
        <slot></slot>
      </div>
    </section>
    <div style="height: calc(100vh - 49px)" class="mr-1">
      <add-friend v-if="friendStore.friendActiveIndex === 3"></add-friend>
      <friend-list v-else></friend-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFriendStore } from '../store/friend'
import AddFriend from '@cp/friends-comp/add-friend.vue'
import useTheme from '@/hooks/useTheme'
import FriendList from '@/components/friends-comp/friend-list.vue'
import { TabProps } from '@/models/helper'
const friendStore = useFriendStore()
friendStore.me()

const FiendItems: TabProps[] = [
  {
    name: 'online',
    label: '在线',
  },
  {
    name: 'all',
    label: '全部',
  },
  {
    name: 'unhandle',
    label: '待定',
  },
  {
    name: 'add',
    label: '添加好友',
  },
]

const handleFriend = (index: number) => {
  friendStore.setFriendActiveIndex(index)
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
