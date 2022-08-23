<template>
  <div class="w-full h-screen overflow-hidden theme-primary">
    <section class="h-12 border-b border-theme px-2 flex items-center">
      <div class="flex h-[42px] items-center">
        <div class="w-6 h-6 mx-2 flex justify-center items-center">
          <svg width="24" height="24" viewBox="0 0 40 40" fill="#fff">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33 34.5833V7.49998H35V36.6666H9C6.791 36.6666 5 34.801 5 32.5V7.49998C5 5.19894 6.791 3.33331 9 3.33331H31V30.4166H9C7.8955 30.4166 7 31.3485 7 32.5C7 33.6515 7.8955 34.5833 9 34.5833H33ZM23.9718 9.99998L15.8889 17.9915L12.7086 14.8441L10 17.5058L15.8885 23.3333L26.6667 12.6669L23.9718 9.99998Z"
            ></path>
          </svg>
        </div>
        <h3 class="text-primary font-semibold mr-2">{{ currentRoom.title }}</h3>
      </div>
    </section>
    <div class="flex flex-col">
      <div class="flex-1">
        <div class="text-gray-300" v-for="item in chatList" :key="item">
          {{ item }}
        </div>
      </div>
      <form class="px-4" @submit.prevent>
        <div class="rounded-lg flex h-11 items-center text-second px-4">
          <input
            v-model="chatMessage"
            class="bg-transparent outline-none flex-1"
            type="text"
            @keyup.enter="publishMessage"
          />
          <div>
            <div>
              <svg
                width="24"
                height="24"
                aria-hidden="false"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Ref, ref, watchEffect } from 'vue'
import { useAppStore } from '../../store/app'
const chatMessage = ref('')
const chatList = ref<string[]>([])
function publishMessage() {
  chatList.value = [...chatList.value, chatMessage.value]
}

const { currentRoom } = storeToRefs(useAppStore())
</script>

<style scoped></style>
