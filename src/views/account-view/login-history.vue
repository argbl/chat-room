<template>
  <div
    action="/"
    class="theme-primary w-[450px] p-4 pt-6 flex flex-col items-center"
  >
    <div class="w-full flex flex-col items-center">
      <h3 class="font-semibold text-2xl text-primary">选择一个帐号</h3>
      <div class="text-second mt-2 mb-6">
        选择一个要登录的帐号，或者添加一个新账号
      </div>
      <div class="w-full theme-second rounded">
        <div
          v-for="(item, index) in loginHistory"
          :key="item.email"
          class="w-full flex items-center px-4 py-3 justify-between"
        >
          <div class="flex-1 flex items-center">
            <img class="h-10 w-10 rounded-full" src="@icon/play.png" alt="" />
            <div class="flex-1 ml-2">
              <span class="text-primary font-semibold">{{
                item.nickname
              }}</span>
              <!-- <span class="text-second text-sm">#2376</span> -->
            </div>
          </div>
          <div class="flex items-center">
            <button
              class="bg-primary h-[34px] px-4 py-[2px] rounded"
              @click="handleLogin(item)"
            >
              <div class="text-sm text-primary mx-4">登录</div>
            </button>
            <button
              @click.stop="selectOptItem(index)"
              class="flex relative ml-4 justify-center items-center text-seond"
            >
              <svg
                class="overflowMenuIcon-35A0oT"
                aria-hidden="false"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                ></path>
              </svg>
              <div
                v-show="optMore[index]"
                class="absolute w-40 left-6 top-2 theme-third rounded p-2 text-left del-item"
              >
                <div @click="handleDel(item)" class="p-1 text-sm rounded">
                  删除记录
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <div
          @click="handleLogin()"
          class="text-gray-300 text-sm hover:underline"
        >
          添加一个账户
        </div>
      </div>
    </div>
    <div class="mt-5 w-full"></div>
  </div>
</template>

<script setup lang="ts">
import useLogin from '@/hooks/useLogin'
import useLoginHistory from '@/hooks/useLoginHistory'
import useTheme from '@/hooks/useTheme'
import { UserProps } from '@model/user'
import { reactive, onUnmounted, inject } from 'vue'
const { loginHistory, getHistory, delHistory } = useLoginHistory()

const { bgColorPrimary } = useTheme()
const useOptMore = () => {
  const optMore = reactive(new Array(loginHistory.value.length).fill(false))

  const selectOptItem = (index: number) => {
    cancleOptMore()
    optMore[index] = !optMore[index]
  }

  const handleDel = (user: UserProps) => {
    delHistory(user)
  }

  const cancleOptMore = () => {
    for (let i = 0; i < optMore.length; i++) {
      optMore[i] = false
    }
  }

  return {
    optMore,
    selectOptItem,
    handleDel,
    cancleOptMore,
  }
}

const { optMore, selectOptItem, handleDel, cancleOptMore } = useOptMore()

window.document.addEventListener('click', cancleOptMore)

const { doValid, doLogin } = useLogin()
const setIsLoginForm: (value: boolean) => void = inject('setIsLoginForm')!
const handleLogin = async (loginForm?: UserProps) => {
  if (loginForm) {
    const user = getHistory(loginForm)
    doValid(user!) && (await doLogin(user!))
  } else {
    setIsLoginForm(true)
  }
}
onUnmounted(() => {
  window.document.removeEventListener('click', cancleOptMore)
})
</script>

<style scoped>
.del-item :hover {
  background-color: v-bind(bgColorPrimary);
}
</style>
