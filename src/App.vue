<script setup lang="ts">
import { useRoute } from 'vue-router'
import GuildNav from '@cp/guild-nav/guild-nav.vue'
import SideBar from '@cp/side-bar/side-bar'
import MainView from './views/main-view'
import AccountView from './views/account-view/AccountView.vue'
import { useUserStore } from './store/user'
import SettingView from './views/setting-view/SettingView.vue'
import { useSettingStore } from './store/setting'
const route = useRoute()
const userStore = useUserStore()
userStore.me()
const settingStore = useSettingStore()
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
  <SettingView v-show="settingStore.isSettingView"></SettingView>
</template>

<style></style>
