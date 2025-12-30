<script lang="ts" setup>
import { ref } from 'vue';
import CORBurger from '../icons/CORBurger.vue';
import CORBaseLink from './CORBaseLink.vue';
import CORLinkGroup from './CORLinkGroup.vue';

const eventLinks = [
      {href: '/sign-up', label: 'Sign-up'},
      {href: '/info', label: 'Information'},
      {href: '/rulepacks', label: 'Rulepacks'},
      {href: '/sponsors', label: 'Sponsors'}
    ]


const aboutLinks = [
      {href: '/info', label: 'Information'},
      {href: '/photos', label: 'Photos'},
      {href: '/2012', label: '2012'},
      {href: '/2013', label: '2013'}
]

const openBurger = ref(false)

</script>


<template>
	<div id="navbar"  class="text-white w-screen h-16 noise gap-x-8 lg:gap-x-12 flex flex-row justify-start items-center px-12">
      <a class="h-8 flex-1" href="/">
        <img class="h-full scale-100 transition-all hover:scale-110 " src="/images/LogoCorvos_2.png">
      </a>
      <div class="hidden md:flex gap-x-6">
        <CORBaseLink href="/event/sign-up"> Sign-up </CORBaseLink>
        <CORLinkGroup base="/event" :links="eventLinks"> Event </CORLinkGroup>
        <CORLinkGroup base="/about" :links="aboutLinks"> About </CORLinkGroup>  
      </div>
      <div class="block md:hidden">
        <button>
          <CORBurger class="size-8"/>
        </button>
      </div>
    </div>
</template>

<style>
#navbar:has(+#content) {
  background-color: rgb(34, 34, 34);
}
</style>