<script lang="ts" setup>
import { useRoute } from 'vitepress';
import { computed } from 'vue';

const props = defineProps({
	href: { type: String, mandatory: true }
})

const route = useRoute()
const isSelected = computed( () =>  route.path.match('^' + props.href + '.*' ) != null )

</script>

<template>
	<a 
		:class=" isSelected ? 'font-bold' : '' "
		class="group text-lg" :href="props.href" >
		<slot></slot>
		<hr 
		:class="isSelected ? 'w-3/4' : ''"
		class="m-auto group-hover:w-3/4 w-0 transition-all">
	</a>
</template>
