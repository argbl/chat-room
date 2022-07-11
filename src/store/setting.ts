import { defineStore } from 'pinia'
import { ThemeType } from '@/models/theme'

export const useSettingStore = defineStore('setting', {
  state: () => ({
    isSettingView: false,
    settingActiveIndex: 0,
    theme: window.localStorage.getItem('theme') || 'dark',
  }),

  actions: {
    handleSettingView() {
      this.isSettingView = !this.isSettingView
      this.settingActiveIndex = 0
    },
    setSettingActiveIndex(index: number) {
      this.settingActiveIndex = index
    },
    setTheme(theme: ThemeType) {
      this.theme = theme
      window.localStorage.setItem('theme', theme)
    },
  },
})
