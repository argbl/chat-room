<template>
  <form action="/" class="bg-zinc-800 w-[450px] p-8 flex flex-col items-center">
    <div class="flex flex-col items-center">
      <h3 class="font-semibold text-2xl text-white">欢迎回来</h3>
      <div class="text-gray-400">很高兴再次见到您！</div>
    </div>
    <div class="mt-5 w-full">
      <div class="w-full mb-5">
        <div class="w-full mb-2">
          <h5 class="text-xs text-gray-400">电子邮箱地址或电话号码</h5>
        </div>
        <div class="w-full">
          <input
            class="w-full p-[10px] h-[40px] rounded outline-none"
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
            class="w-full p-[10px] h-[40px] rounded outline-none"
            type="password"
          />
        </div>
      </div>
      <button class="mt-1 mb-5 py-[2px] text-sm text-blue-500">
        <div>忘记密码?</div>
      </button>
      <button
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
  </form>
</template>

<script setup lang="ts"></script>

<style scoped></style>
