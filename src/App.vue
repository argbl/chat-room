<script setup lang="ts">
import { useRoute } from 'vue-router'
import GuildNav from '@cp/guild-nav/guild-nav.vue'
import SideBar from '@cp/side-bar/side-bar'
import MainView from './views/main-view'
import AccountView from './views/account-view/AccountView.vue'

const route = useRoute()
</script>

<template>
  <AccountView v-if="['Login', 'Register'].includes(route.name as string)">
  </AccountView>
  <div v-else class="flex">
    <guild-nav></guild-nav>
    <div class="flex-1 flex">
      <side-bar></side-bar>
      <main class="flex-1">
        <MainView></MainView>
      </main>
    </div>
  </div>
</template>

<style></style>
