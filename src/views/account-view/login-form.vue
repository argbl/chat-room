<template>
  <div class="theme-second w-[450px] p-8 flex flex-col items-center">
    <div class="flex flex-col items-center">
      <h3 class="font-semibold text-2xl text-primary">欢迎回来!</h3>
      <div class="text-second">很高兴再次见到您！</div>
    </div>
    <div class="mt-5 w-full">
      <base-input
        v-model="loginForm.email"
        label="电子邮箱"
        check="email"
        inputType="email"
        bgColor="#fff"
      ></base-input>
      <base-input
        class="mt-5"
        v-model="loginForm.password"
        label="密码"
        check="password"
        inputType="password"
        bgColor="#fff"
      ></base-input>
      <button class="mt-1 mb-5 py-[2px] text-sm text-blue-600">
        <div>忘记密码?</div>
      </button>
      <button
        @click.stop="handleLogin"
        v-loading:20="loading"
        class="block w-full mb-2 px-4 py-[2px] bg-violet-500 h-[40px] rounded hover:bg-violet-600"
      >
        <div class="mx-auto text-primary">登录</div>
      </button>
      <div class="text-sm flex justify-between">
        <span class="text-second"
          >需要新的帐号？<button>
            <router-link to="/register"
              ><div class="text-blue-600 hover:underline">
                注册
              </div></router-link
            >
          </button></span
        >
        <span class="text-second"
          >最近登录？<button>
            <div
              @click="setIsLoginForm(false)"
              class="text-blue-600 hover:underline"
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
import { UserModel } from '@model/user'
import useLogin from '@/hooks/useLogin'
const loading = ref(false)
const loginForm: UserModel = reactive({
  email: '',
  password: '',
})
const setIsLoginForm: (value: boolean) => void = inject('setIsLoginForm')!

const { doValid, doLogin } = useLogin()
const handleLogin = async () => {
  loading.value = true
  const valid = doValid(loginForm)
  if (valid) {
    await doLogin(loginForm)
  }
  loading.value = false
}
</script>

<style scoped></style>
