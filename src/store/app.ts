import { info } from '@/api/room'
import { RoomModel } from '@/models/room'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('RECORD_PINIA_APP', {
  state: () => ({
    addGuildVisible: false,
    currentRoom: {} as RoomModel,
  }),

  actions: {
    async roomInfo(room_id: number) {
      const { data: result } = await info(room_id)
      if (result.code === 200) {
        this.currentRoom = result.data
      }
    },
  },
  persist: true,
})
