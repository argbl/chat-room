<template>
  <div>
    <div class="text-lg mb-5">我的帐号</div>
    <div class="bg-zinc-800">
      <div class="h-[100px] rounded-t-md bg-blue-500 w-full"></div>
      <div class="flex -mt-5 justify-between items-center">
        <div class="flex items-center text-xl">
          <div class="p-2 bg-zinc-800 w-24 h-24 rounded-full ml-4">
            <img src="@icon/play.png" class="rounded-full" />
          </div>
          <div class="ml-2">{{ userStore.user.uname }}</div>
          <span>#{{ userStore.user.uid }}</span>
        </div>
        <button class="bg-blue-500 text-sm rounded py-[2px] px-4 h-8 mr-4">
          <div>编辑个人信息</div>
        </button>
      </div>
      <div class="bg-zinc-800 rounded-b-md p-4 text-gray-200">
        <div class="bg-zinc-700 p-4 rounded">
          <div class="flex items-center">
            <div class="flex-1 flex flex-col">
              <h5 class="mb-1 text-xs">用户名</h5>
              <div class="flex">
                <div class="text-white">{{ userStore.user.uname }}</div>
                <span>#{{ userStore.user.uid }}</span>
              </div>
            </div>
            <button class="h-8 py-[2px] px-4 my-1 bg-zinc-600 text-sm rounded">
              <div>编辑</div>
            </button>
          </div>
          <div class="flex items-center mt-6">
            <div class="flex-1 flex flex-col">
              <h5 class="mb-1 text-xs">邮箱</h5>
              <div class="flex">
                <div class="text-white">{{ userStore.user.uemail }}</div>
              </div>
            </div>
            <button class="h-8 py-[2px] px-4 my-1 bg-zinc-600 text-sm rounded">
              <div>编辑</div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[1px] my-10 bg-gray-500"></div>
    <div class="text-lg mb-5">密码和验证</div>
    <button class="bg-blue-500 text-sm rounded py-[2px] px-4 h-8 mr-4">
      <div>更改密码</div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
</script>
<style scoped></style>
