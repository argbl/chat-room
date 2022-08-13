import { defineStore } from 'pinia'

export const useAppStore = defineStore('RECORD_PINIA_APP', {
  state: () => ({
    addGuildVisible: false,
  }),
})
