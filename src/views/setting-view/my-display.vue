<template>
  <div>
    <div class="text-lg mb-5">外观</div>
    <div class="h-[1px] my-6 bg-gray-500"></div>
    <div>
      <h5 class="mb-2 text-xs">主题</h5>
      <div class="mb-2 p-[10px] bg-zinc-600 rounded">
        <div class="flex">
          <div class="mr-2">
            <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="currentColor"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="5"
                class="radioIconForeground-2BMavi"
                fill="currentColor"
              ></circle>
            </svg>
          </div>
          <div>酷黑</div>
        </div>
      </div>
      <div class="mb-2 p-[10px] bg-zinc-600 rounded">
        <div class="flex">
          <div class="mr-2">
            <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div>明亮</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const showSave = ref(false)
const pickColor = ref('')
watch(pickColor, (newColor) => {
  if (newColor) {
    showSave.value = true
  }
})
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
