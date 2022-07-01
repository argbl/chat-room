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

<style></style>
