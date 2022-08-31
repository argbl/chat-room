import { info } from '@/api/room'
import { RoomModel } from '@/models/room'
import { defineStore } from 'pinia'
import { history } from '@/api/room'
import Message from '@/components/base/base-message'
export const useRoomStore = defineStore('RECORD_PINIA_ROOM', {
  state: () => ({
    currentRoom: {} as RoomModel,
    roomHistorys: [],
    page: {
      num: 0,
      size: 10,
    },
  }),

  actions: {
    async roomInfo(room_id: number) {
      const { data: result } = await info(room_id)
      if (result.code === 200) {
        this.currentRoom = result.data
      }
    },

    async history(id: number) {
      const { data: result } = await history(id, this.page.num, this.page.size)

      if (result.code === 200 && result.data.length) {
        if (this.page.num === 0) {
          this.roomHistorys = result.data.reverse()
        } else {
          this.roomHistorys = [...result.data.reverse(), ...this.roomHistorys]
        }
      } else if (result.code === 200 && !result.data.length) {
        if (this.page.num === 0) {
          Message.error('暂无聊天记录')
          this.roomHistorys = []
        } else {
          Message.error('加载完毕')
        }
      } else if (result.code === 403) {
        Message.error(result.message)
      }
      return true
    },
  },
  persist: true,
})
