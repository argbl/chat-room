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
      <div class="text-sm">
        <span class="text-gray-400"
          >需要新的帐号？<button>
            <router-link to="/register"
              ><div class="text-blue-500 hover:underline">
                注册
              </div></router-link
            >
          </button></span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import BaseInput from '@/components/base-input/base-input.vue'
import useValidate from '@/hooks/useValidate'
const loading = ref(false)
const loginForm = reactive({
  uemail: '',
  upass: '',
})
const rules = {
  uemail: 'email',
  upass: 'password',
}
const handleLogin = () => {
  loading.value = true
  const valid = useValidate(loginForm, rules)
  if (!valid) {
    loading.value = false
    return
  }
  loading.value = false
}
</script>

<style scoped></style>
