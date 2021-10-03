<template>
	<div>
		<img alt="Vue logo" src="./assets/logo.png" />
		<Counter />
		<History />
	</div>
</template>

<script>
import History from "./components/History"
import Counter from "./components/Counter"

export default {
	name: "App",
	components: {
		History,
		Counter,
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

img {
	height: 5rem;
	width: 5rem;
}
</style>
