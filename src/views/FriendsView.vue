<template>
  <div class="w-full h-full bg-zinc-700">
    <section class="h-12 border-b-2 border-zinc-900 px-2 flex items-center">
      <div class="flex h-[42px] items-center">
        <div class="w-6 h-6 mx-2 flex justify-center items-center">
          <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#bbb"
                fill-rule="nonzero"
                d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                transform="translate(2 4)"
              ></path>
              <path
                d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
              ></path>
            </g>
          </svg>
        </div>
        <h3 class="text-white mr-2">好友</h3>
      </div>
      <div class="w-[1px] h-6 mx-2 bg-zinc-600"></div>
      <div class="flex text-zinc-300">
        <div class="tab-item">在线</div>
        <div class="tab-item">全部</div>
        <div class="tab-item">待定</div>
        <div class="tab-item">已屏蔽</div>
        <div class="tab-item text-white bg-green-500">添加好友</div>
      </div>
    </section>
    <div class="flex">
      <add-friend></add-friend>
    </div>
  </div>
</template>

<script setup lang="ts">
import AddFriend from '@cp/friends-cp/add-friend.vue'
</script>

<style scoped lang="postcss">
.tab-item {
  @apply mx-2 my-0 px-2 rounded min-w-[32px];
}
</style>
