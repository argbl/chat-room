<template>
  <img :src="src" @error="onErr" />
</template>

<script setup lang="ts">
const props = defineProps({
  src: String,
  errSrc: {
    type: String,
    default: 'src/assets/icons/logo.png',
  },
})

const onErr = (e: Event) => {
  ;(e.target as HTMLImageElement).src = props.errSrc
}
</script>

<style scoped></style>
