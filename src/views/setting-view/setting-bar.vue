<template>
  <aside
    class="h-screen relative flex flex-col flex-shrink-0 overflow-y-scroll bg-zinc-800"
  >
    <nav class="w-[216px] flex-1 pl-5 pr-4 py-16">
      <div
        v-for="(item, index) in settingItems"
        :key="item.label"
        @click="handleSetting(item, index)"
        class="w-full leading-5 px-[10px] py-[6px] rounded mb-1 hover:bg-zinc-500"
        :class="settingStore.settingActiveIndex === index ? 'activeItem' : ''"
      >
        {{ item.label }}
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useSettingStore } from '@/store/setting'
import { ref } from 'vue'

const settingStore = useSettingStore()
interface SettingProps {
  name: string
  label: string
  event?: () => void
}

const settingItems: SettingProps[] = [
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
      console.log('登出')
    },
  },
]

const handleSetting = (item: SettingProps, index: number) => {
  item.event && item.event()
  settingStore.setSettingActiveIndex(index)
}
</script>

<style scoped>
.activeItem {
  @apply bg-zinc-500;
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
