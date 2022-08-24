<template>
  <base-dialog v-model="addGuildVisible" title="创建房间" @confirm="confirm">
    <div class="p-4">
      <div class="my-2">
        <div class="flex">
          <div class="flex-1">
            <div>请上传一张图片作为图标</div>
            <button
              class="relative rounded-full w-24 h-24 border-4 border-dashed flex justify-center items-center"
            >
              <base-img
                :src="roomProps.avatar"
                class="w-full h-full rounded-full object-cover"
              />
              <input
                ref="uploadAvatarRef"
                @change="upload(ROOM_UPLAD.AVATAR)"
                class="absolute cursor-pointer opacity-0 left-0 right-0 bottom-0 top-0 h-full text-[0px]"
                type="file"
                accept=".jpg,.jpeg,.png,.gif"
              />
            </button>
          </div>
          <div class="flex-1">
            <div>请上传一张图片作为封面</div>

            <button
              class="relative rounded-full w-24 h-24 border-4 border-dashed flex justify-center items-center"
            >
              <base-img
                :src="roomProps.cover"
                class="w-full h-full rounded-full object-cover"
              />
              <input
                ref="uploadCoverRef"
                @change="upload(ROOM_UPLAD.COVER)"
                class="absolute cursor-pointer opacity-0 left-0 right-0 bottom-0 top-0 h-full text-[0px]"
                type="file"
                accept=".jpg,.jpeg,.png,.gif"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="my-2">
        <div>请选择房间类型</div>
        <base-select
          v-model:value="roomProps.channel"
          v-model:list="channelList"
        ></base-select>
      </div>
      <div class="my-2">
        <div>请输入房间名称</div>
        <base-input v-model="roomProps.title"></base-input>
      </div>
      <div class="my-2">
        <div>向他人介绍房间</div>
        <base-input v-model="roomProps.introduce" textarea></base-input>
      </div>
    </div>
  </base-dialog>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
import BaseSelect from '@/components/base/base-select/index.vue'
import BaseInput from '@/components/base/base-input/index.vue'
import BaseImg from '@/components/base/base-img/index.vue'
import useChannel from '@/hooks/useChannel'
import { avatar, uploadImage } from '@/api/common'
import { add } from '@/api/room'
import Message from '@/components/base/base-message'

const { channelList, initChannel } = useChannel()
const { addGuildVisible } = storeToRefs(useAppStore())

const init = async () => {
  await initChannel()
  channelList.value = channelList.value.slice(1)
}
init()

const roomProps = reactive({
  channel: 0,
  title: '',
  avatar: '',
  cover: '',
  introduce: '',
})

const ROOM_UPLAD = {
  AVATAR: 1,
  COVER: 2,
}

const uploadAvatarRef = ref<{ files: Array<File> } | null>(null)
const uploadCoverRef = ref<{ files: Array<File> } | null>(null)
const upload = async (uploadType: number) => {
  let { data: result } = await avatar()
  if (result.code === 200) {
    console.log(result)

    const form = new FormData()
    form.append('token', result.data)
    uploadType === ROOM_UPLAD.AVATAR
      ? form.append('file', uploadAvatarRef.value!.files[0])
      : form.append('file', uploadCoverRef.value!.files[0])

    let { data: res } = await uploadImage(form)
    uploadType === ROOM_UPLAD.AVATAR
      ? (roomProps.avatar = 'http://qiniu.kaijinx.top/' + res.key)
      : (roomProps.cover = 'http://qiniu.kaijinx.top/' + res.key)
  }
}

const confirm = async () => {
  const { data: result } = await add(roomProps)
  if (result.code === 200) {
    Message.success(result.message)
  } else {
    Message.error(result.message)
  }
}
</script>
<style scoped></style>
