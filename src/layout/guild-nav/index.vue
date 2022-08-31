<template>
  <nav class="h-screen overflow-scroll theme-third w-[72px] min-w-[72px]">
    <ul class="flex flex-col justify-center items-center py-3">
      <guild-item
        v-for="guild in GuildList"
        v-slot="{ iconColor }"
        :key="guild.name"
        :name="guild.name"
        :type="guild.type"
        :path="guild.path"
        :is-active="route.name === guild.name"
        :active-bg-color="guild.activeColor"
        :default-bg-color="guild.defaultColor"
        :icon-default-color="guild.iconDefaultColor"
        :width="guild.width"
      >
        <path :fill="iconColor" :d="guild.d"></path>
      </guild-item>
      <div
        v-for="roomItem in roomList"
        :key="roomItem.id"
        class="cursor-pointer"
        @click="jumpToRoom(roomItem.room.id)"
      >
        <img
          class="w-12 h-12 rounded-full object-cover hover:rounded-2xl transition-all"
          :src="roomItem.room.avatar"
        />
      </div>
    </ul>
  </nav>
  <AddGuild></AddGuild>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import GuildItem from './guild-item.vue'
import GuildList from './index'
import AddGuild from './add-guild.vue'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { joins } from '@/api/room'

const route = useRoute()
const { user } = storeToRefs(useUserStore())

const roomList = ref([])
const getRooms = async () => {
  const { data: result } = await joins(user.value.id)
  if (result.code === 200) {
    roomList.value = result.data
  }
}
getRooms()

const router = useRouter()
const jumpToRoom = (room_id: number) => {
  router.push({
    name: 'Room',
    params: {
      id: room_id,
    },
  })
}
</script>

<style lang="postcss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
</style>
