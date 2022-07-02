<template>
  <nav class="h-screen overflow-scroll bg-zinc-900 w-[72px] min-w-[72px]">
    <ul class="flex flex-col justify-center items-center py-3">
      <nav-item
        v-for="nav in NavList"
        v-slot="{ iconColor }"
        :key="nav.name"
        :type="nav.type"
        :path="nav.path"
        :is-active="route.path === nav.path"
        :handle-event="nav.handleEvent"
        :active-color="nav.activeColor"
        :default-color="nav.defaultColor"
        :icon-default-color="nav.iconDefaultColor"
        :svg-width="nav.svgWidth"
        :svg-height="nav.svgHeight"
      >
        <path :fill="iconColor" :d="nav.d"></path>
      </nav-item>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import navItem from './nav-item.vue'
import NavList from './index'
const route = useRoute()
</script>

<style lang="postcss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
</style>
