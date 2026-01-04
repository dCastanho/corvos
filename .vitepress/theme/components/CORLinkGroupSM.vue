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

const emit = defineEmits(['selected'])

</script>

<template>
	<div>

		<button 
		@click="open = !open"
		:class="isSelected ? 'font-bold' : ''"
		class="peer cursor-pointer text-lg flex gap-x-1 items-center" >
		<slot></slot> <CORChevDown class="size-4"></CORChevDown>
	</button>
	<div class="transition-all flex flex-col pl-5 border-l border-gray-50 overflow-hidden"
	:class="open ? 'h-fit' : 'h-0' ">
	<a v-for="l of links" :href="props.base + l.href"
	@click="emit('selected')">
		{{ l.label }} 
	</a>
</div>
</div>
</template>
