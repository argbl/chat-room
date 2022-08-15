<template>
  <base-dialog v-model="addGuildVisible" title="创建房间">
    <div class="p-4">
      <div class="my-2">
        <div>请上传一张图片作为封面</div>
        <div class="flex justify-center">
          <button
            class="relative bg-third rounded-full w-20 h-20 border-4 border-dashed"
          >
            <input
              ref="uploadRef"
              @change="upload()"
              class="absolute cursor-pointer opacity-0 left-0 right-0 bottom-0 top-0 h-full text-[0px]"
              type="file"
              accept=".jpg,.jpeg,.png,.gif"
            />
          </button>
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
    </div>
  </base-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
import BaseSelect from '@/components/base/base-select/index.vue'
import useChannel from '@/hooks/useChannel'
import BaseInput from '@/components/base/base-input/index.vue'
import { avatar, uploadImage } from '@/api/common'
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
})

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
  }
}
</script>
<style scoped></style>
