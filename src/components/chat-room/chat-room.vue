<template>
  <div class="relative w-full h-full">
    <div
      ref="el"
      class="overflow-y-scroll"
      style="height: calc(100vh - (73px + 48px))"
    >
      <div class="p-4">
        <div v-for="(item, index) in chatHistory" :key="item.id">
          <div v-if="showTime(index)" class="flex justify-center text-sm">
            {{ useDateFormat(item.createtime, 'YYYY-MM-DD HH:mm') }}
          </div>
          <div class="relative min-h-[40px] px-12 mb-4">
            <div v-if="item.user_send === me.id">
              <base-img
                :src="item.avatar"
                class="w-10 h-10 avatar absolute right-0 top-0"
              />

              <div class="flex flex-row-reverse mr-1">{{ item.content }}</div>
            </div>
            <div v-else>
              <base-img
                :src="item.avatar"
                class="w-10 h-10 avatar absolute left-0 top-0"
              />
              <div class="font-semibold">{{ item.nickname }}</div>
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
import { ref, reactive, computed, watchEffect, toRefs, nextTick } from 'vue'
import { useDateFormat, useScroll } from '@vueuse/core'
import useTheme from '@/hooks/useTheme'
import useSocket from '@/hooks/useSocket'
import { useChatStore } from '@/store/chat'
import { useUserStore } from '@/store/user'
import { useRoute } from 'vue-router'
const { bgColorThird } = useTheme()

const el = ref<HTMLElement | null>(null)

const { arrivedState } = useScroll(el)
const { top } = toRefs(arrivedState)

// watchEffect(async () => {
//   if (el.value) {
//     console.log(el.value)
//     await nextTick()
//     el.value.scrollTo(0, 200)
//     console.log('执行滚动')
//   }
// })

watchEffect(() => {
  if (top.value) {
    console.log('到顶了')
  }
})

const page = reactive({
  num: 0,
  size: 10,
})

const route = useRoute()

const userStore = useUserStore()
const me = userStore.user

const chatStore = useChatStore()
const inputValue = ref('')

const user_chat = computed(() => {
  return chatStore.user
})

const chatHistory = computed(() => {
  return chatStore.chatHistory
})

const showTime = (index: number) => {
  const last = chatHistory.value[index - 1]
  const cur = chatHistory.value[index]
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

const socket = useSocket()
const submit = async () => {
  socket.emit('send', {
    id: user_chat.value.id,
    message: inputValue.value,
  })
  await chatStore.history(Number(route.params.id), page.num, page.size)
  inputValue.value = ''
}

watchEffect(() => {
  chatStore.history(Number(route.params.id), page.num, page.size)
})
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
