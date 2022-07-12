<template>
  <div
    class="p-[60px] pl-10 flex-init w-[800px] h-screen relative overflow-y-scroll"
  >
    <my-account v-if="settingStore.settingActiveIndex === 0"></my-account>
    <my-info v-if="settingStore.settingActiveIndex === 1"></my-info>
    <my-display v-if="settingStore.settingActiveIndex === 2"></my-display>
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from '@/store/setting'
import MyAccount from './my-account.vue'
import MyInfo from './my-info.vue'
import MyDisplay from './my-display.vue'

const settingStore = useSettingStore()
</script>

<style scoped>
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 0;
}
</style>
