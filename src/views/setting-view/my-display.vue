<template>
  <div>
    <div class="text-lg mb-5">外观</div>
    <div class="h-[1px] my-6 bg-gray-500"></div>
    <div>
      <h5 class="mb-2 text-xs">主题</h5>
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
