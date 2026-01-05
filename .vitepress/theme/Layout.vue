<script setup lang="ts">
import { Content, useData } from 'vitepress'
import CORBaseLink from './components/CORBaseLink.vue';
import CORLinkGroup from './components/CORLinkGroup.vue';
import CORNav from './components/CORNav.vue';
import CORBanner from './components/CORBanner.vue';
import CORBattleListing from './components/CORBattleListing.vue';
CORBattleListing

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData()
</script>

<template>
  <div class="relative">
    <CORNav></CORNav>
    <div class="w-screen h-screen" id="home" v-if="frontmatter.home">
      <div class="flex flex-col md:justify-center md:items-start  justify-end pb-18 items-center z-30 bg-radial from-black/30 to-black/40 absolute top-0 left-0 h-full w-full">
        <div class="md:pl-20 flex flex-col items-center md:items-start justify-center w-fit gap-y-4 px-6">
          <h1 class="text-3xl md:text-4xl font-semibold text-white"> Batalha dos Corvos </h1>
          <span class="text-white text-center md:text-left text-xl font-light">The largest miniature game event in Portugal</span>
          <div class="flex justify-around gap-x-4">
          <a href="/corvos/about/info" class="hover:bg-black/60 hover:text-white hover:border-white px-4 py-2 border border-white bg-white  rounded-lg "> Learn More </a>
          <a href="/corvos/about/batalhas/" class="hover:opacity-60 px-4 py-2 border border-white rounded-lg text-white"> Past Battles </a>
          </div>
        </div>
      </div>
      <img class="z-20 absolute top-0 left-0 w-full h-full object-cover" src="/images/corvos_home.jpg"/>
    </div>
    <div v-else id="content" class="py-16 px-12 prose m-auto">
        <Content />
    </div>
  </div>
  
</template>
