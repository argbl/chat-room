<template>
  <div class="bg-zinc-800 w-[450px] p-8 flex flex-col items-center">
    <div class="flex flex-col items-center">
      <h3 class="font-semibold text-2xl text-white">欢迎回来!</h3>
      <div class="text-gray-400">很高兴再次见到您！</div>
    </div>
    <div class="mt-5 w-full">
      <base-input
        v-model="loginForm.uemail"
        label="电子邮箱"
        check="email"
        inputType="email"
        bgColor="#fff"
      ></base-input>
      <base-input
        class="mt-5"
        v-model="loginForm.upass"
        label="密码"
        check="password"
        inputType="password"
        bgColor="#fff"
      ></base-input>
      <button class="mt-1 mb-5 py-[2px] text-sm text-blue-500">
        <div>忘记密码?</div>
      </button>
      <button
        @click.stop="handleLogin"
        v-loading:20="loading"
        class="block w-full mb-2 px-4 py-[2px] bg-violet-500 h-[40px] rounded hover:bg-violet-600"
      >
        <div class="mx-auto text-white">登录</div>
      </button>
      <div class="text-sm flex justify-between">
        <span class="text-gray-400"
          >需要新的帐号？<button>
            <router-link to="/register"
              ><div class="text-blue-500 hover:underline">
                注册
              </div></router-link
            >
          </button></span
        >
        <span class="text-gray-400"
          >最近登录？<button>
            <div
              @click="setIsLoginForm(false)"
              class="text-blue-500 hover:underline"
            >
              选择
            </div>
          </button></span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, inject } from 'vue'
import BaseInput from '@/components/base-input/base-input.vue'
import { UserProps } from '@/model/user'
import useLogin from '@/hooks/useLogin'
const loading = ref(false)
const loginForm: UserProps = reactive({
  uemail: '',
  upass: '',
})
const setIsLoginForm: (value: boolean) => void = inject('setIsLoginForm')!

const { doValid, doEncrypt, doLogin } = useLogin()
const handleLogin = async () => {
  loading.value = true
  const valid = doValid(loginForm)
  if (valid) {
    loginForm.ucrypto = doEncrypt(loginForm.upass!)
    await doLogin(loginForm)
  }
  loading.value = false
}
</script>

<style scoped></style>
