import { createApp } from "vue"
import App from "./App.vue"
import { createStore } from "vuex"
import axios from "axios"

// create store for vuex
// object obtains every state that is needed inside the store

// 1. access a global $store object (eg. $store.state.counter)
// 2. map into a computed object -> use this method
const store = createStore({
	// object containing all the states
	state() {
		return {
			counter: 0,
			history: [0],
			loading: false,
		}
	},
	// contain methods to update/mutate the state in the global store
	// each method takes in 2 arguments
	// 1. the state itself, automating passed in by vuex
	// 2. payload -> value that you want the method to have access to.
	// !!! mutations should never contain async code.BAD PRACTICE
	// if you want to use async code and then update the state in the global store
	// -> use actions instead
	mutations: {
		addToCounter(state, payload) {
			state.counter = state.counter + payload
			state.history.push(state.counter)
		},
		substractFromCounter(state, payload) {
			state.counter -= payload
			state.history.push(state.counter)
		},
		isLoading(state) {
			state.loading = !state.loading
		},
	},
	// contains methods for actions
	// perform the action (call some async code)
	// and then call the mutation once it has comppleted
	// can also include multiple commits in an action, so that you are able to update multiple states at once
	// dispatch?
	actions: {
		async addRandomNumber(context) {
			context.commit("isLoading")
			// fetch random number from API

			let data = await axios.get(
				"https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new"
			)

			let payload = data.data
			// context contains everything inside the store (states, etc etc)
			// contains commit. which allows u to call specfic mutation
			// mutation name and payload
			context.commit("addToCounter", payload)
			// fetch random number from API
			context.commit("isLoading")
		},
	},
	// way to manipulate data into another way
	getters: {
		// 2 functions
		// 1st, pass in the state
		// 2nd, contains the payload, returns data that you ultimate want to see
		// returns active indexes that contain the number that you searched for
		activeIndexes: (state) => (payload) => {
			let indexes = []
			state.history.forEach((number, index) => {
				// if the number is the same as the searched number (payload)
				// apppend to indexes
				if (number === payload) {
					indexes.push(index)
				}
			})

			// also activeIndexes returns this value
			return indexes
		},
	},
})
createApp(App)
	.use(store)
	.mount("#app")

// change state -> mututation
