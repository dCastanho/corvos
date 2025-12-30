<script lang="ts" setup>
import { useRoute } from 'vitepress';
import { computed, ref, watch } from 'vue';
import CORChevDown from '../icons/CORChevDown.vue';


const props = defineProps({
	base: {type: String, mandatory: true, default: () => '' },
	links: { type: Array<{href: String, label:String}>, mandatory: false, default: () => []}
})

const open = defineModel({default: false})
const route = useRoute()
const isSelected = computed( () =>  route.path.match(props.base + '.*' ) != null )

watch(route, () => open.value = false)

</script>

<template>
	<div class="relative">
	<button 
	:class="isSelected ? 'font-bold' : ''"
	class=" cursor-pointer text-lg flex gap-x-1 items-center" @click="open = !open">
		<slot></slot> <CORChevDown class="size-4"></CORChevDown>
	</button>
	<div class="px-4 p-2 rounded-sm flex flex-col left-1/2 -translate-x-1/2 duration-150 transition-all absolute top-12 bg-zinc-900/90"
	:class="open ? 'opacity-100' : 'opacity-0'">
		<a v-for="l of links" :href="props.base + l.href">
			{{ l.label }} 
		</a>
		</div>
	</div>
</template>
