<template>
	<div class="container">
		<h2>History</h2>
		<div class="flex">
			<!-- loop through history state and render each number with a p tag -->
			<p
				v-for="(number, index) in history"
				:key="index"
				:class="activeIndexes(parseInt(value)).includes(index) && 'bold'"
			>
				{{ number }}
			</p>
		</div>
		<input placeholder="Search by index" type="number" v-model="value" />
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
	data() {
		return {
			value: null,
		}
	},
	computed: {
		...mapState(["history"]),
		...mapGetters(["activeIndexes"]), // function to be called
	},
}
</script>

<style>
.container {
	margin-top: 1rem;
}
.flex {
	display: flex;
	text-align: center;
	width: 25rem;
	margin: 0 auto;
	justify-content: center;
	flex-wrap: wrap;
}
.flex p {
	margin: 0.5rem;
	padding: 0.2rem;
}
.bold {
	font-weight: bold;
}
</style>
