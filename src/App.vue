<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import GuildNav from '@/components/guild-nav/index.vue'
import SideBar from '@/components/side-bar/index'
import MainView from './views/main-view'
import LoginView from './views/login/index.vue'
import { useUserStore } from './store/user'
import SettingView from './views/setting/index.vue'
import { useSettingStore } from './store/setting'
import useTheme from '@/hooks/useTheme'
import useSocket from './hooks/useSocket'
import { useMessageStore } from './store/message'
import { storeToRefs } from 'pinia'
const route = useRoute()
const { me: MyInfo } = useUserStore()
const { me: MyMessage } = useMessageStore()
const { isSettingView } = storeToRefs(useSettingStore())
MyInfo()
MyMessage()

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
  <LoginView v-if="['Login', 'Register'].includes(route.name as string)">
  </LoginView>
  <div v-else class="flex">
    <guild-nav></guild-nav>
    <div class="flex-1 flex">
      <side-bar></side-bar>
      <main class="flex-1 overflow-y-hidden">
        <MainView></MainView>
      </main>
    </div>
  </div>
  <SettingView v-show="isSettingView"></SettingView>
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
