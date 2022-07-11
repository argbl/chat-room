<template>
  <div>
    <div class="text-lg mb-5">我的帐号</div>
    <div class="theme-second">
      <div
        class="h-[100px] rounded-t-md w-full"
        :style="{
          backgroundColor: userStore.user.banner_color || '#22c55e',
        }"
      ></div>
      <div class="flex -mt-5 justify-between items-center">
        <div class="flex items-center text-xl">
          <div class="p-2 theme-second w-24 h-24 rounded-full ml-4">
            <img src="@icon/play.png" class="rounded-full" />
          </div>
          <div class="ml-2">{{ userStore.user.nickname }}</div>
          <span>#{{ userStore.user.id }}</span>
        </div>
        <button
          class="bg-blue-600 button text-sm rounded py-[2px] px-4 h-8 mr-4"
        >
          <div>编辑个人信息</div>
        </button>
      </div>
      <div class="rounded">
        <div class="theme-second p-4 text-gray-200">
          <div class="theme-primary p-4 rounded">
            <div class="flex items-center">
              <div class="flex-1 flex flex-col">
                <h5 class="mb-1 text-xs">用户名</h5>
                <div class="flex">
                  <div class="text-primary">{{ userStore.user.nickname }}</div>
                  <span>#{{ userStore.user.id }}</span>
                </div>
              </div>
              <button
                class="h-8 py-[2px] px-4 my-1 bg-third button text-sm rounded"
              >
                <div>编辑</div>
              </button>
            </div>
            <div class="flex items-center mt-6">
              <div class="flex-1 flex flex-col">
                <h5 class="mb-1 text-xs">邮箱</h5>
                <div class="flex">
                  <div class="text-primary">{{ userStore.user.email }}</div>
                </div>
              </div>
              <button
                class="h-8 py-[2px] px-4 my-1 bg-third button text-sm rounded"
              >
                <div>编辑</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[1px] my-10 bg-gray-500"></div>
    <div class="text-lg mb-5">密码和验证</div>
    <button class="bg-blue-600 button text-sm rounded py-[2px] px-4 h-8 mr-4">
      <div>更改密码</div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
</script>
<style scoped></style>
