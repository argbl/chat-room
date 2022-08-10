<script setup lang="ts">
import useTheme from '@/hooks/useTheme'
import useSocket from './hooks/useSocket'
import { useUserStore } from '@/store/user'
import { useMessageStore } from '@/store/message'
import { useFriendStore } from '@/store/friend'
const { me: MyInfo } = useUserStore()
const { me: MyMessage } = useMessageStore()
const { me: MyFriend } = useFriendStore()
MyInfo()
MyMessage()
MyFriend()
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
  <router-view></router-view>
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
