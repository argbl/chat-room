<template>
  <aside
    class="h-screen relative flex flex-col flex-shrink-0 overflow-y-scroll theme-third"
  >
    <nav class="w-[216px] flex-1 pl-5 pr-4 py-16 setting-item">
      <div
        v-for="(item, index) in settingItems"
        :key="item.label"
        @click="handleSetting(item, index)"
        class="w-full leading-5 px-[10px] py-[6px] rounded mb-1 cursor-pointer"
        :class="settingActiveIndex === index ? 'activeItem' : ''"
      >
        {{ item.label }}
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import useTheme from '@/hooks/useTheme'
import { TabProps } from '@/models/helper'
import { useSettingStore } from '@/store/setting'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

const { settingActiveIndex } = storeToRefs(useSettingStore())
const { handleSettingView, setSettingActiveIndex } = useSettingStore()
const { logout } = useUserStore()
const router = useRouter()

const settingItems: TabProps[] = [
  {
    name: 'MyAccount',
    label: '我的帐号',
  },
  {
    name: 'UserInfo',
    label: '用户个人资料',
  },
  {
    name: 'Display',
    label: '外观',
  },
  {
    name: 'Logout',
    label: '登出',
    event: () => {
      logout()
      handleSettingView()
      router.push({
        name: 'Login',
      })
    },
  },
]

const handleSetting = (item: TabProps, index: number) => {
  item.event && item.event()
  setSettingActiveIndex(index)
}

const { bgColorSecond } = useTheme()
</script>

<style scoped>
.activeItem {
  background-color: v-bind(bgColorSecond);
}
.setting-item :hover {
  background-color: v-bind(bgColorSecond);
}

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
