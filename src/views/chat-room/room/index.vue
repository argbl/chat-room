<template>
  <div class="relative w-full h-full">
    <div
      ref="el"
      class="overflow-y-scroll"
      style="height: calc(100vh - (73px + 48px))"
    >
      <div v-loading:40="loading"></div>
      <div class="p-4">
        <div
          v-for="(item, index) in route.name === 'Chat'
            ? chatHistorys
            : roomHistorys"
          :key="item.id"
        >
          <div v-if="showTime(index)" class="flex justify-center text-sm">
            {{ useDateFormat(item.createtime, 'YYYY-MM-DD HH:mm') }}
          </div>
          <div class="relative min-h-[40px] px-12 mb-4">
            <div
              v-if="
                route.name === 'Chat'
                  ? item.user_send === me.id
                  : item.user.id === me.id
              "
            >
              <base-img
                :src="
                  route.name === 'Chat'
                    ? item.chat_sender?.avatar
                    : item.user.avatar
                "
                class="w-10 h-10 avatar absolute right-0 top-0"
              />

              <div class="flex flex-row-reverse mr-1">{{ item.content }}</div>
            </div>
            <div v-else>
              <base-img
                :src="
                  route.name === 'Chat'
                    ? item.chat_sender?.avatar
                    : item.user.avatar
                "
                class="w-10 h-10 avatar absolute left-0 top-0"
              />
              <div class="font-semibold">
                {{
                  route.name === 'Chat'
                    ? item.chat_sender?.nickname
                    : item.user.nickname
                }}
              </div>
              <div>{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 w-full border-t p-4 input-block">
      <input
        v-model="inputValue"
        @keypress.enter="submit()"
        type="text"
        class="theme-second w-full h-10 rounded outline-none indent-4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, onUpdated, watch, nextTick } from 'vue'
import { useDateFormat, useScroll } from '@vueuse/core'
import useTheme from '@/hooks/useTheme'
import useSocket from '@/hooks/useSocket'
import { useChatStore } from '@/store/chat'
import { useUserStore } from '@/store/user'
import { useRoute } from 'vue-router'
import Message from '@/components/base/base-message'
import { storeToRefs } from 'pinia'
import { useRoomStore } from '@/store/room'
const { bgColorThird } = useTheme()

const inputValue = ref('')
const route = useRoute()

const { user: me } = storeToRefs(useUserStore())

const { user_chat, chatHistorys, page } = storeToRefs(useChatStore())
const { history: letterHistory, letter } = useChatStore()

const { roomHistorys } = storeToRefs(useRoomStore())
const { history: roomHistory } = useRoomStore()

let historyFn: ((id: number) => any) | null = null
watch(
  route,
  (newRoute) => {
    if (newRoute.name === 'Chat') {
      historyFn = letterHistory
    } else {
      historyFn = roomHistory
    }
    historyFn(Number(route.params.id))
  },
  {
    immediate: true,
    deep: true,
  }
)

const socket = useSocket()
const submit = async () => {
  if (route.name === 'Chat') {
    socket.emit('send_letter', {
      id: user_chat.value.id,
      message: inputValue.value,
    })
    await letter(user_chat.value)
  } else {
    socket.emit('send_room', {
      id: route.params.id,
      message: inputValue.value,
    })
  }

  inputValue.value = ''
}

//监听私聊
socket.on('chat', async (res: any) => {
  if (res) {
    Message.text(`${res.nickname}:${res.content}`)
  }
  page.value.num = 0
  await letterHistory(Number(route.params.id))
  scrollToBottom()
})

//监听群聊
const room_prefix = 'room_'
socket.on(room_prefix + route.params.id, async (res: any) => {
  await roomHistory(Number(route.params.id))
  page.value.num = 0
  scrollToBottom()
})

const showTime = (index: number) => {
  const last = chatHistorys.value[index - 1]
  const cur = chatHistorys.value[index]
  if (last) {
    return new Date(cur.createtime!).getTime() -
      new Date(last.createtime!).getTime() >
      1000 * 60 * 5
      ? true
      : false
  } else {
    return true
  }
}

const loading = ref(false)

const init = ref(true)

const el = ref<HTMLElement | null>(null)

const { arrivedState } = useScroll(el)
const { top } = toRefs(arrivedState)
const lastScrollHeight = ref<number>(0)
watch(
  () => top.value,
  async (newValue) => {
    if (newValue) {
      loading.value = true
      lastScrollHeight.value = el.value?.scrollHeight || 0
      page.value.num++
      await historyFn(Number(route.params.id))
      loading.value = false
      await nextTick()
      el.value &&
        (el.value.scrollTop = el.value?.scrollHeight - lastScrollHeight.value)
    }
  }
)

onUpdated(async () => {
  if (init.value) {
    scrollToBottom()
    init.value = false
  }
})

const scrollToBottom = () => {
  el.value && (el.value.scrollTop = el.value?.scrollHeight || 0)
}
</script>

<style scoped>
.input-block {
  border-color: v-bind(bgColorThird);
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
  background: v-bind(bgColorThird);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: v-bind(bgColorThird);
}
</style>
