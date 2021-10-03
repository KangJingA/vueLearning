<template>
	<div>
		<h1>Vuex Number Machine</h1>
		<h1 class="counter">{{ loading ? "Loading..." : counter }}</h1>
		<button @click="substractFromCounter(parseInt(counterValue))">-</button>
		<!-- v-model creates a 2 way binding between the state and the element -->
		<input type="number" v-model="counterValue" />
		<button @click="addToCounter(parseInt(counterValue))">+</button>
		<div>
			<button class="btn" @click="addRandomNumber">
				{{ loading ? "Loading..." : "Add a random number" }}
			</button>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex"
export default {
	data() {
		// global state
		return {
			counterValue: 1,
		}
	},
	// second way to access state
	computed: {
		// this returns you the states that you want from the store
		// specified in the array
		// now counter is destructured and you have access to it
		...mapState(["counter", "loading"]),
	},
	methods: {
		// destructure methods from the mutations.
		// for mutating state
		...mapMutations(["addToCounter", "substractFromCounter"]),
		// action methods
		...mapActions(["addRandomNumber"]),
	},
}
</script>

<style scoped>
button {
	border: none;
	width: 2rem;
	height: 2rem;
	font-weight: 700;
	cursor: pointer;
}
input {
	padding: 0.4rem;
	margin: 0;
	text-align: center;
}
.counter {
	font-size: 3.4rem;
}
.btn {
	border-radius: 0.5rem;
	width: auto;
	background-color: #41b983;
	margin-top: 1rem;
	color: white;
	cursor: pointer;
}
</style>
