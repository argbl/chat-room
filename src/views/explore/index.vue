<template>
  <div class="w-full h-screen overflow-hidden pr-2 theme-primary">
    <div
      class="w-full h-full py-8 pl-8 pr-4 overflow-x-hidden overflow-y-scroll"
    >
      <div class="w-full relative" id="search">
        <div class="mb-8 min-h-[200px]">
          <img src="@img/bg-explore.svg" class="w-full" />
        </div>
        <div
          class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center"
        >
          <div
            class="flex items-center rounded pr-2 w-[560px] border-[1px] bg-white text-black outline-none hover:outline-white"
          >
            <div class="flex-1 w-full" @keyup.enter="handleSearch">
              <input
                v-model="room_title"
                class="p-2 w-full outline-none"
                type="text"
                placeholder="探索社区"
              />
            </div>
            <svg
              aria-hidden="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="cursor-pointer"
              @click="handleSearch"
            >
              <path
                fill="currentColor"
                d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div>
        <section class="mb-8 min-w-[580px]">
          <h3 class="text-primary text-xl">特色社区</h3>
          <div class="grid grid-cols-5 gap-4 mt-4">
            <div v-for="room in roomList" :key="room.id">
              <router-link :to="{ name: 'Room', params: { id: room.id } }">
                <div
                  class="flex flex-col theme-second rounded-lg cursor-pointer"
                >
                  <div class="relative mb-8 h-[143px]">
                    <div class="w-full h-full">
                      <img
                        class="rounded-t-lg object-cover w-full h-full"
                        :src="room.cover"
                      />
                    </div>
                    <div
                      class="absolute left-3 -bottom-5 w-12 h-12 rounded-lg bg-black flex justify-center items-center"
                    >
                      <img
                        :src="room.avatar"
                        class="object-cover rounded-full h-10 w-10"
                      />
                    </div>
                  </div>
                  <div class="flex flex-col pt-0 p-4 text-second">
                    <div>
                      <h4 class="text-ellipsis font-semibold text-primary">
                        {{ room.title }}
                      </h4>
                    </div>
                    <div
                      class="flex-1 mt-1 mb-4 line-clamp-4 text-sm text-third min-h-[60px]"
                    >
                      {{ room.introduce }}
                    </div>
                    <div class="flex text-xs text-third">
                      <div class="mr-4 flex items-center">
                        <div
                          class="w-2 h-2 rounded-full bg-green-500 mr-1"
                        ></div>
                        <div>275,455 人在线</div>
                      </div>
                      <div class="flex items-center">
                        <div
                          class="w-2 h-2 rounded-full bg-gray-500 mr-1"
                        ></div>
                        <div>994,236 位成员</div>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </section>
      </div>
      <div class="mb-8 flex flex-col justify-center items-center">
        <img src="@icons/svg/explore.svg" class="mb-2" />
        <h3 class="text-primary">还有更多社区等你发现！</h3>
        <a href="#search" class="text-sm text-blue-600">试着进行搜索吧。</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, watchEffect } from 'vue'
import { list, search } from '@/api/room'
import { useRoute } from 'vue-router'
import { RoomModel } from '@/models/room'
const room_title = ref('')
const route = useRoute()
const roomList: Ref<Array<RoomModel>> = ref([])
const initRoomList = async () => {
  const { data: result } = await list(Number(route.params.id) || 1)
  roomList.value = result.data
}
watchEffect(() => {
  initRoomList()
  room_title.value = ''
})

const handleSearch = async () => {
  const { data: result } = await search(
    room_title.value,
    Number(route.params.id)
  )
  roomList.value = result.data
}
</script>

<style scoped>
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 7px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(0, 0, 0, 0.5);
}
</style>
