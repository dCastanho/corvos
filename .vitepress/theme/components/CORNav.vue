<script lang="ts" setup>
import { ref } from 'vue';
import CORBurger from '../icons/CORBurger.vue';
import CORBaseLink from './CORBaseLink.vue';
import CORLinkGroup from './CORLinkGroup.vue';
import CORLinkGroupSM from './CORLinkGroupSM.vue';

const eventLinks = [
      {href: '/info', label: 'Information'},
      {href: '/rulepacks', label: 'Rulepacks'},
      {href: '/sponsors', label: 'Sponsors'}
    ]


const aboutLinks = [
      {href: '/info', label: 'Information'},
      {href: '/batalhas/', label: 'Past Battles'},
]

const openBurger = ref(false)

</script>


<template>
  <div 
        class="flex flex-col gap-y-2 pt-24 text-white items-center z-40 duration-250 transition-all absolute h-screen w-screen top-0 left-0 bg-[#222222]"
        :class="openBurger ? 'translate-y-0' : '-translate-y-full' "
        >
        <div class="flex-col flex items-start gap-y-2">
          <CORBaseLink @selected="openBurger=false" href="/registration"> Registration </CORBaseLink>      
          <CORLinkGroupSM @selected="openBurger=false"  base="/event" :links="eventLinks"> Event </CORLinkGroupSM>
          <CORLinkGroupSM @selected="openBurger=false" base="/about" :links="aboutLinks"> About </CORLinkGroupSM>  
        </div>


      </div>
	<div id="navbar"  class="text-white w-screen h-16 noise gap-x-8 lg:gap-x-12 flex flex-row justify-start items-center px-4 md:px-12 z-50 absolute top-0 left-0">
      <a class="h-8 flex-1" href="/">
        <img class="h-full scale-100 transition-all hover:scale-110 " src="/images/LogoCorvos_2.png">
      </a>
      <div class="hidden md:flex gap-x-6">
        <CORBaseLink href="/registration"> Registration </CORBaseLink>
        <CORLinkGroup base="/event" :links="eventLinks"> Event </CORLinkGroup>
        <CORLinkGroup base="/about" :links="aboutLinks"> About </CORLinkGroup>  
      </div>
      <div class="block md:hidden">
        <button @click="openBurger = !openBurger">
          <CORBurger class="cursor-pointer size-8"/>
        </button>
      </div>
    </div>
          
</template>

<style>
#navbar:has(+#content) {
  background-color: #222222;
}
</style>