<template>
  <base-dialog v-model="addGuildVisible" title="创建房间">
    <div class="p-4">
      <div>
        <div class="text-lg">请选择房间类型</div>
        <base-select
          v-model:value="channelValue"
          v-model:list="channelList"
        ></base-select>
      </div>
    </div>
  </base-dialog>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
import BaseSelect from '@/components/base/base-select/index.vue'
import useChannel from '@/hooks/useChannel'
const { channelList, initChannel } = useChannel()
const { addGuildVisible } = storeToRefs(useAppStore())

const init = async () => {
  await initChannel()
  channelList.value = channelList.value.slice(1)
}
init()

const channelValue = ref(0)

watchEffect(() => {
  console.log(channelValue.value)
})
</script>
<style scoped></style>
