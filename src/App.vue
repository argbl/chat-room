<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import GuildNav from '@cp/guild-nav/guild-nav.vue'
import SideBar from '@cp/side-bar/side-bar'
import MainView from './views/main-view'
import AccountView from './views/account-view/AccountView.vue'
import { useUserStore } from './store/user'
import SettingView from './views/setting-view/SettingView.vue'
import { useSettingStore } from './store/setting'
import useTheme from '@/hooks/useTheme'
import useSocket from './hooks/useSocket'
const route = useRoute()
const userStore = useUserStore()
userStore.me()

const settingStore = useSettingStore()
const {
  bgColorPrimary,
  textColorPrimary,
  bgColorSecond,
  textColorSecond,
  bgColorThird,
  textColorThird,
  borderColor,
} = useTheme()

useSocket()
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

<style>
.theme-primary {
  background-color: v-bind(bgColorPrimary);
  color: v-bind(textColorPrimary);
}

.theme-second {
  background-color: v-bind(bgColorSecond);
  color: v-bind(textColorSecond);
}

.theme-third {
  background-color: v-bind(bgColorThird);
  color: v-bind(textColorThird);
}

.bg-primary {
  background-color: v-bind(bgColorPrimary);
}

.bg-second {
  background-color: v-bind(bgColorSecond);
}

.bg-third {
  background-color: v-bind(bgColorThird);
}

.text-primary {
  color: v-bind(textColorPrimary);
}

.text-second {
  color: v-bind(textColorSecond);
}

.text-third {
  color: v-bind(textColorThird);
}

.border-theme {
  border-color: v-bind(borderColor);
}
</style>
