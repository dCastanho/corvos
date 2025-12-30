<script setup lang="ts">
import { useData } from 'vitepress'
import CORBaseLink from './components/CORBaseLink.vue';
import CORLinkGroup from './components/CORLinkGroup.vue';
import CORNav from './components/CORNav.vue';
import CORBanner from './components/CORBanner.vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData()
</script>

<template>
  <div class="relative">
    <CORNav class="z-50 absolute top-0 left-0"></CORNav>
    <div class="w-screen h-screen" id="home" v-if="frontmatter.home">
      <div class=" z-40 bg-radial from-black/30 to-black/40 absolute top-0 left-0 h-full w-full"></div>
      <img class="z-30 absolute top-0 left-0 w-full h-full object-cover" src="/images/corvos_home.jpg"/>
      
    </div>
    <div v-else id="content">
      <a href="/">Home</a>
      <Content />
    </div>
  </div>
  
</template>
