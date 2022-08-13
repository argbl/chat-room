import { ref } from 'vue'
import { list } from '@/api/channel'
import { ChannelModel } from '@/models/channel'
export default function () {
  const channelList = ref<Array<ChannelModel>>([])
  const initChannel = async () => {
    const { data: result } = await list()
    if (result.code === 200) {
      channelList.value = result.data
    }
  }
  return {
    channelList,
    initChannel,
  }
}
