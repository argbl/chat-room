<template>
  <nav class="h-screen overflow-scroll theme-third w-[72px] min-w-[72px]">
    <ul class="flex flex-col justify-center items-center py-3">
      <guild-item
        v-for="guild in GuildList"
        v-slot="{ iconColor }"
        :key="guild.name"
        :name="guild.name"
        :type="guild.type"
        :path="guild.path"
        :is-active="route.path === guild.path"
        :active-bg-color="guild.activeColor"
        :default-bg-color="guild.defaultColor"
        :icon-default-color="guild.iconDefaultColor"
        :width="guild.width"
      >
        <path :fill="iconColor" :d="guild.d"></path>
      </guild-item>
    </ul>
  </nav>
  <AddGuild></AddGuild>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import GuildItem from './guild-item.vue'
import GuildList from './index'
import AddGuild from './add-guild.vue'

const route = useRoute()
</script>

<style lang="postcss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
</style>
