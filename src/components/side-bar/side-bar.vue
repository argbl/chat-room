<template>
  <aside class="h-screen bg-neutral-700 w-60 flex flex-col justify-between">
    <nav>
      <div class="h-12 border-b-2 border-neutral-800 px-3">
        <button
          class="my-[10px] w-full h-7 px-[6px] bg-neutral-800 rounded text-gray-400 text-sm text-left"
        >
          搜索
        </button>
      </div>
      <ul class="pr-2 overflow-x-hidden overflow-y-scroll">
        <li class="mt-2 ml-2 max-w-[224px] p-[1px] rounded bg-neutral-600">
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
          <span class="text-gray-400 text-xs">私信</span>
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
      <div class="relative flex items-center">
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
    </section>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped></style>
