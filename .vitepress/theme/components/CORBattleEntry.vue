<script lang="ts" setup>
import CORLocation from '../icons/CORLocation.vue';
import CORParticipant from '../icons/CORParticipant.vue';


const props = defineProps(
	{
		participants : { type: Number, mandatory: false},
		year: { type: Number, mandatory: true},
		local : { type: String, mandatory: false},
		last: {type: Boolean, mantadory: true},
		link: {type: String , mandatory: true }
	}
)
</script>

<template>
	<div class="relative gap-x-2 mt-10 items-center flex-row flex">
		<div class="size-1.5  bg-gray-100 ring rounded-full ring-gray-400"></div>
		<a class="inline-flex cursor-pointer no-underline font-normal flex-row items-center hover:font-semibold" :href="link">
			{{year}}
			<CORParticipant class="ml-4 mr-1 size-4 inline" /> {{ participants }}
			<CORLocation class="ml-4 mr-1 size-4 inline" /> {{local}}
		</a>
		<div v-if="!last"  class="absolute h-12 mt-16 w-px bg-gray-300 ml-0.5"></div>
	</div>
</template>
