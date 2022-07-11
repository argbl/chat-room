<template>
  <div>
    <div class="text-lg mb-5">用户个人资料</div>
    <div class="h-[1px] my-6 bg-gray-500"></div>
    <div class="flex">
      <div class="flex-1">
        <div>
          <h5 class="mb-2 text-xs">头像</h5>
          <button class="bg-blue-500 text-sm rounded py-[2px] px-4 h-8 mr-4">
            <div>更改头像</div>
          </button>
        </div>
        <div class="h-[1px] my-6 bg-gray-500"></div>
        <div>
          <h5 class="mb-2 text-xs">个人资料颜色</h5>
          <div class="mt-4 flex text-xs">
            <div
              @click="pickColor = defaultColor"
              class="flex flex-col items-center mr-4"
            >
              <div class="w-[70px] h-[50px] bg-green-500 rounded"></div>
              <span class="mt-1">默认</span>
            </div>
            <div class="flex flex-col items-center mr-4">
              <input
                v-model="pickColor"
                type="color"
                class="w-[70px] h-[50px] rounded"
                :style="{
                  backgroundColor: pickColor,
                }"
              />

              <span class="mt-1">自定义</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 ml-5">
        <h5 class="mb-2 text-xs">预览</h5>
        <div class="theme-second shadow rounded">
          <div
            class="h-[60px] rounded-t-md w-full"
            :style="{
              backgroundColor: pickColor,
            }"
          ></div>
          <div class="flex -mt-10 justify-between items-center">
            <div class="p-2 theme-second w-24 h-24 rounded-full ml-4">
              <img src="@icon/play.png" class="rounded-full" />
            </div>
          </div>
          <div class="text-xl flex ml-4 font-semibold">
            <div>{{ userStore.user.nickname }}</div>
            <span>#{{ userStore.user.id }}</span>
          </div>
          <p class="p-4 text-xs">自定义我的个人资料</p>
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <div
        v-show="showSave"
        class="w-[700px] flex items-center justify-between px-4 py-[10px] theme-second rounded fixed bottom-5"
      >
        <div>注意！您尚未保存更改！</div>
        <div class="flex items-center">
          <div class="mr-4 cursor-pointer" @click="handleReset">重置</div>
          <button
            @click="handleUpdate"
            class="bg-blue-500 text-sm rounded py-[2px] px-4 h-8"
          >
            <div>保存更改</div>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useUserStore } from '@/store/user'
import { update } from '@/api/user'
import Message from '@/components/base-message'

const defaultColor = '#22c55e'
const userStore = useUserStore()
const showSave = ref(false)
const pickColor = ref(userStore.user?.banner_color || defaultColor)
watch(pickColor, (newColor) => {
  console.log(newColor)
  if (newColor && newColor !== userStore.user.banner_color) {
    showSave.value = true
  } else if (newColor === defaultColor) {
    showSave.value = false
  }
})

const handleReset = () => {
  pickColor.value = defaultColor
}

const handleUpdate = async () => {
  const { data: result } = await update({
    ...userStore.user,
    banner_color: pickColor.value,
  })
  if (result.code === 200) {
    Message.success(result.message)
    await userStore.me()
    showSave.value = false
  } else {
    Message.error(result.message)
  }
}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
