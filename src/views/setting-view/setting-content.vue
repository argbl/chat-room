<template>
  <div class="p-[60px] pl-5 flex-init w-[800px]">
    <my-account></my-account>
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from '@/store/setting'
import MyAccount from './my-account.vue'

const settingStore = useSettingStore()
</script>

<style scoped></style>
