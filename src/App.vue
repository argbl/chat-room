<script setup lang="ts">
import GuildNav from '@cp/guild-nav/guild-nav.vue'
import SideBar from '@cp/side-bar/side-bar'
import MainView from './views/main-view'
</script>

<template>
  <div class="flex">
    <GuildNav></GuildNav>
    <div class="flex-1 flex">
      <SideBar></SideBar>
      <main class="flex-1">
        <MainView></MainView>
      </main>
    </div>
  </div>
</template>

<style>
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 4px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: black;
}
</style>
