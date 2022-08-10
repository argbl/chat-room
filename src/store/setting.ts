import { defineStore } from 'pinia'
import { ThemeType } from '@/models/theme'

export const useSettingStore = defineStore('RECORD_PINIA_SETTING', {
  state: () => ({
    isSettingView: false,
    settingActiveIndex: 0,
    theme: 'dark',
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
    },
  },
  persist: true,
})
