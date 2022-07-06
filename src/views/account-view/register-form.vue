<template>
  <div class="bg-zinc-800 w-[450px] p-8 flex flex-col text-white">
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
    <h3 class="text-white font-semibold text-2xl text-center">创建一个帐号</h3>
    <div class="mt-5 w-full">
      <div class="w-full mb-5">
        <div class="w-full mb-2">
          <h5 class="text-xs text-gray-400">电子邮箱</h5>
        </div>
        <div class="w-full">
          <input
            v-model="account.uemail"
            class="w-full p-[10px] h-[40px] rounded outline-none bg-black"
            type="text"
          />
        </div>
      </div>
      <div class="w-full mb-5">
        <div class="w-full mb-2">
          <h5 class="text-xs text-gray-400">用户名</h5>
        </div>
        <div class="w-full">
          <input
            v-model="account.uname"
            class="w-full p-[10px] h-[40px] rounded outline-none bg-black"
            type="text"
          />
        </div>
      </div>
      <div class="w-full">
        <div class="w-full mb-2">
          <h5 class="text-xs text-gray-400">密码</h5>
        </div>
        <div class="w-full">
          <input
            v-model="account.upass"
            class="w-full p-[10px] h-[40px] rounded outline-none bg-black"
            type="password"
          />
        </div>
      </div>
      <button
        v-loading:20="loading"
        @click="handleRegister"
        class="block w-full mt-8 mb-2 px-4 py-[2px] bg-violet-500 h-[40px] rounded hover:bg-violet-600"
      >
        <div class="mx-auto text-white">继续</div>
      </button>
      <div class="text-sm">
        <router-link to="/login"
          ><div class="text-blue-500 hover:underline">
            已经有帐号？
          </div></router-link
        >
      </div>
      <span class="text-gray-400 text-xs"
        >进行注册即表示您同意 Record 的
        <span class="text-blue-500">服务条款</span>和
        <span class="text-blue-500">隐私权政策</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { register } from '@/api/user'
import { RegisterProps } from '@/type/user'
const account: RegisterProps = reactive({
  uemail: '',
  uname: '',
  upass: '',
})
const loading = ref(false)
const handleRegister = async () => {
  loading.value = !loading.value
  const result = await register(account)
  console.log(result)

  loading.value = !loading.value
}
</script>

<style scoped></style>
