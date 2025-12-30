<script setup lang="ts">
import { useData } from 'vitepress'
import CORBaseLink from './components/CORBaseLink.vue';
import CORLinkGroup from './components/CORLinkGroup.vue';
import CORNav from './components/CORNav.vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()


</script>

<template>
  <div class="relative">
    <CORNav class="z-50 absolute top-0 left-0"/>
    <div class="w-screen bg-top bg-[url(/images/corvos_home.jpg)] h-screen" v-if="frontmatter.home">
    </div>
    <div v-else>
      <a href="/">Home</a>
      <Content />
    </div>
  </div>
  
</template>
