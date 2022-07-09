<template>
  <div class="p-[60px] pl-10 flex-init w-[800px]">
    <my-account v-show="settingStore.settingActiveIndex === 0"></my-account>
    <my-info v-show="settingStore.settingActiveIndex === 1"></my-info>
    <my-display v-show="settingStore.settingActiveIndex === 2"></my-display>
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from '@/store/setting'
import MyAccount from './my-account.vue'
import MyInfo from './my-info.vue'
import MyDisplay from './my-display.vue'

const settingStore = useSettingStore()
</script>

<style scoped></style>
