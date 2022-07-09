// stores/counter.jsimport { defineStore } from 'pinia'

import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', {
  state: () => ({
    isSettingView: false,
    settingActiveIndex: 0,
  }),

  actions: {
    handleSettingView() {
      this.isSettingView = !this.isSettingView
      this.settingActiveIndex = 0
    },
    setSettingActiveIndex(index: number) {
      this.settingActiveIndex = index
    },
  },
})
