<template>
  <aside class="h-screen bg-zinc-800 w-60 flex flex-col justify-between">
    <nav class="flex flex-col" style="height: calc(100vh - 56px)">
      <div class="h-12 border-b-2 border-zinc-900 px-3">
        <button
          class="my-[10px] w-full h-7 px-[6px] bg-zinc-900 rounded text-zinc-400 text-sm text-left"
        >
          搜索
        </button>
      </div>
      <ul class="pr-2 flex-1 flex flex-col">
        <li
          class="mt-2 ml-2 max-w-[224px] p-[1px] rounded bg-zinc-700 cursor-pointer"
        >
          <div class="flex h-[42px] items-center px-2">
            <div class="w-8 h-8 mr-3 flex justify-center items-center">
              <svg
                aria-hidden="false"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="#fff"
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
            <div class="text-white">好友</div>
          </div>
        </li>
        <h2
          class="pt-[18px] pl-[18px] pr-2 pb-1 flex justify-between items-center"
        >
          <span class="text-zinc-400 text-xs">私信</span>
          <svg
            x="0"
            y="0"
            class="mr-2"
            aria-hidden="false"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <polygon
              fill-rule="nonzero"
              fill="#b9bbbe"
              points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
            ></polygon>
          </svg>
        </h2>
        <svg
          class="p-4 box-content"
          width="184"
          height="428"
          viewBox="0 0 184 428"
          fill="#36393f"
        >
          <template v-for="index in 10" :key="index">
            <rect
              x="40"
              :y="44 * (index - 1) + 6"
              width="144"
              height="20"
              rx="10"
              :opacity="1 - (index - 1) * 0.1"
            ></rect>
            <circle
              cx="16"
              :cy="44 * (index - 1) + 16"
              r="16"
              :opacity="1 - (index - 1) * 0.1"
            ></circle>
          </template>
        </svg>
      </ul>
    </nav>
    <section class="h-[52px] px-2 pb-[1px] bg-zinc-900 flex items-center">
      <div class="relative flex items-center mr-2">
        <img src="@icon/play.png" class="rounded-full w-8 h-8 object-cover" />
        <svg
          class="absolute"
          width="40"
          height="32"
          viewBox="0 0 40 32"
          aria-hidden="true"
        >
          <rect width="10" height="10" fill="#000" x="22" y="22"></rect>
          <circle cx="28" cy="28" r="4" fill="#3ba55d"></circle>
        </svg>
      </div>
      <div class="flex flex-col flex-1">
        <div class="text-sm text-white font-semibold">霒蚀</div>
        <div class="text-xs text-zinc-400">#2827</div>
      </div>
      <div class="flex-initial">
        <button
          class="w-8 h-8 rounded hover:bg-zinc-700 flex justify-center items-center"
        >
          <div class="w-5 h-5">
            <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="#b9bbbe"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </section>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped></style>
