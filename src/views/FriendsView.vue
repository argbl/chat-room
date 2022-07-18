<template>
  <div class="w-full h-screen theme-primary">
    <section class="h-12 border-b border-theme px-2 flex items-center">
      <div class="flex h-[42px] items-center">
        <div class="w-6 h-6 mx-2 flex justify-center items-center">
          <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#bbb"
                fill-rule="nonzero"
                d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                transform="translate(2 4)"
              ></path>
              <path
                d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
              ></path>
            </g>
          </svg>
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
      <add-friend v-if="friendStore.friendActiveIndex === 4"></add-friend>
      <friend-list v-else></friend-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFriendStore } from '../store/friend'
import AddFriend from '@cp/friends-cp/add-friend.vue'
import useTheme from '@/hooks/useTheme'
import FriendList from '@/components/friends-cp/friend-list.vue'
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
    name: 'reject',
    label: '已拒绝',
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
