<template>
  <div class="w-full h-screen theme-second flex justify-center items-center">
    <Loading></Loading>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Loading from '@/components/loading/index.vue'

const router = useRouter()
setTimeout(() => {
  router.push({
    path: '/',
  })
}, 2000)
</script>

<style scoped></style>
