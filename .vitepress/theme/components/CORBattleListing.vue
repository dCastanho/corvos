<script lang="ts" setup>
import { data as battles } from '../battles.data.js'
import CORBattleEntry from './CORBattleEntry.vue';

console.log(battles)

</script>

<template>
	<div>
		<div v-for="(b, index) in battles" :key="b.frontmatter.year">
			<CORBattleEntry 
				:year="b.frontmatter.year"
				:local="b.frontmatter.local"
				:participants="b.frontmatter.participants" 
				:last="index == battles.length-1" >
			</CORBattleEntry>
		</div>
		
	</div>
</template>