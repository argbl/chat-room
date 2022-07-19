<template>
  <div class="theme-second w-[450px] p-8 flex flex-col text-primary">
    <button class="mb-4 py-[2px] flex items-center">
      <svg
        class="caret-1Uw6Xp"
        aria-hidden="false"
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd">
          <polygon
            fill="currentColor"
            fill-rule="nonzero"
            points="18.35 4.35 16 2 6 12 16 22 18.35 19.65 10.717 12"
          ></polygon>
          <polygon points="0 0 24 0 24 24 0 24"></polygon>
        </g>
      </svg>
      <router-link to="/login"> 返回 </router-link>
    </button>
    <h3 class="text-primary font-semibold text-2xl text-center">
      创建一个帐号
    </h3>
    <div class="mt-5 w-full">
      <base-input
        v-model="registerForm.email"
        label="电子邮箱"
        check="email"
        inputType="email"
        bgColor="#000"
        class="mb-5"
      ></base-input>
      <base-input
        v-model="registerForm.nickname"
        label="用户名"
        check="nickname"
        inputType="text"
        bgColor="#000"
        class="mb-5"
      ></base-input>
      <base-input
        v-model="registerForm.password"
        label="密码"
        check="password"
        inputType="password"
        bgColor="#000"
      ></base-input>
      <button
        v-loading:20="loading"
        @click="handleRegister"
        class="block w-full mt-8 mb-2 px-4 py-[2px] bg-violet-500 h-[40px] rounded hover:bg-violet-600"
      >
        <div class="mx-auto text-primary">继续</div>
      </button>
      <div class="text-sm">
        <router-link to="/login"
          ><div class="text-blue-600 hover:underline">
            已经有帐号？
          </div></router-link
        >
      </div>
      <span class="text-second text-xs"
        >进行注册即表示您同意 Record 的
        <span class="text-blue-600">服务条款</span>和
        <span class="text-blue-600">隐私权政策</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { register } from '@/api/user'
import { UserModel } from '@model/user'
import useValidate from '@/hooks/useValidate'
import Message from '@cp/base/base-message'
const registerForm: UserModel = reactive({
  email: '',
  nickname: '',
  password: '',
})

const rules = {
  email: 'email',
  nickname: 'nickname',
  password: 'password',
}

const loading = ref(false)
const handleRegister = async () => {
  loading.value = true
  const valid = useValidate(registerForm, rules)
  if (!valid) {
    loading.value = false
    return
  }

  const { data: result } = await register(registerForm)
  if (result.code === 200) {
    Message.success(result.message)
  } else if (result.code === 400) {
    Message.error(result.message)
  }

  loading.value = false
}
</script>

<style scoped></style>
