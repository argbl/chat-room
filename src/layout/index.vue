<template>
  <div class="flex">
    <GuildNav></GuildNav>
    <div class="flex-1 flex">
      <SideBar></SideBar>
      <MainView class="flex-1 overflow-y-hidden"></MainView>
    </div>
  </div>
  <SettingView v-show="isSettingView"></SettingView>
</template>

<script setup lang="ts">
import GuildNav from './guild-nav/index.vue'
import SideBar from './side-bar/index'
import MainView from '@/views'
import SettingView from '@/views/setting/index.vue'
import { useSettingStore } from '@/store/setting'
import { storeToRefs } from 'pinia'
const { isSettingView } = storeToRefs(useSettingStore())
</script>

<style scoped></style>
