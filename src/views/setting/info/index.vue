<template>
  <div>
    <div class="text-lg mb-5">用户个人资料</div>
    <div class="h-[1px] my-6 bg-gray-500"></div>
    <div class="flex">
      <div class="flex-1">
        <div>
          <h5 class="mb-2 text-xs">头像</h5>
          <button
            class="relative bg-blue-600 rounded button text-sm flex items-center justify-center w-24 h-8"
          >
            <div class="absolute">上传图片</div>
            <input
              ref="uploadRef"
              @change="upload()"
              class="absolute cursor-pointer opacity-0 left-0 right-0 bottom-0 top-0 h-full text-[0px]"
              type="file"
              accept=".jpg,.jpeg,.png,.gif"
            />
          </button>
        </div>
        <div class="h-[1px] my-6 bg-theme-primary"></div>
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
              <base-img
                :src="user.avatar"
                class="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div class="text-xl flex ml-4 font-semibold">
            <div>{{ user.nickname }}</div>
            <span>#{{ user.id }}</span>
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
            class="bg-blue-600 button text-sm rounded py-[2px] px-4 h-8"
          >
            <div>保存更改</div>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useUserStore } from '@/store/user'
import { avatar, update, uploadImage } from '@/api/user'
import Message from '@cp/base/base-message'
import { storeToRefs } from 'pinia'

const defaultColor = '#22c55e'
const { user } = storeToRefs(useUserStore())
const { me: MyInfo } = useUserStore()
const showSave = ref(false)
const pickColor = ref(user.value.banner_color || defaultColor)

const defaultPickColor = computed(() => {
  return user.value.banner_color
})
watch(pickColor, (newColor) => {
  console.log(newColor)
  if (newColor && newColor !== defaultPickColor.value) {
    showSave.value = true
  } else if (newColor === defaultPickColor.value) {
    showSave.value = false
  }
})

const handleReset = () => {
  pickColor.value = defaultPickColor.value || defaultColor
}

const handleUpdate = async () => {
  const { data: result } = await update({
    ...user.value,
    banner_color: pickColor.value,
  })
  if (result.code === 200) {
    Message.success(result.message)
    await MyInfo()
    showSave.value = false
  } else {
    Message.error(result.message)
  }
}

const uploadRef = ref<{ files: Array<File> } | null>(null)
const upload = async () => {
  let { data: result } = await avatar()
  if (result.code === 200) {
    console.log(result)

    const form = new FormData()
    form.append('token', result.data)
    form.append('file', uploadRef.value!.files[0])
    let { data: res } = await uploadImage(form)

    const avatar = 'http://qiniu.kaijinx.top/' + res.key

    let { data: result2 } = await update({ id: user.value.id, avatar })
    if (result2.code === 200) {
      Message.success(result2.message)
      await MyInfo()
    } else {
      Message.error(result2.message)
    }
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
