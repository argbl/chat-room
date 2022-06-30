<script setup lang="ts">
import GuildNav from '@cp/guild-nav/guild-nav.vue'
import HomeView from './views/HomeView.vue'
import SideBar from '@cp/side-bar/side-bar.vue'
import FriendsView from './views/FriendsView.vue'
</script>

<template>
  <div class="flex">
    <GuildNav></GuildNav>
    <div class="flex-1 flex">
      <SideBar></SideBar>
      <main class="flex-1">
        <FriendsView></FriendsView>
      </main>
    </div>
  </div>
  <!-- <HomeView></HomeView> -->
</template>

<style></style>
