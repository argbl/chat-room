<script setup lang="ts">
import GuildNav from '@cp/guild-nav/guild-nav.vue'
import HomeView from './views/HomeView.vue'
import SideBar from '@cp/side-bar/side-bar.vue'
</script>

<template>
  <div class="flex">
    <GuildNav></GuildNav>
    <SideBar></SideBar>
    <main></main>
  </div>
  <!-- <HomeView></HomeView> -->
</template>

<style></style>
