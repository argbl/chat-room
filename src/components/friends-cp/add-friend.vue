<template>
  <div class="flex-1 overflow-hidden">
    <header class="border-b-[1px] px-[30px] py-5 border-zinc-600">
      <h2 class="text-white">添加好友</h2>
      <form action="">
        <div class="bg-zinc-800 mt-4 px-3 rounded-lg flex items-center">
          <div class="py-1 mr-4 flex-1">
            <input
              type="text"
              class="h-10 border-none outline-none bg-transparent leading-5 text-gray-500 tracking-wider"
              placeholder="输入用户名#0000"
            />
          </div>
          <button
            class="h-8 min-h-8 min-w-[60px] opacity-50 text-white bg-blue-700 rounded text-sm px-4 py-[2px]"
          >
            <div class="mx-auto">发送好友请求</div>
          </button>
        </div>
      </form>
    </header>
    <div></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
