<template>
	<div class="component">
		<h3>User Detail</h3>

		<button class="btn btn-primary" @click="resetFunc">Reset Name</button>

		<hr>

		<p>Name: {{ name }}</p>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
		resetFunc: Function
	},
	methods: {
		resetName() {
			this.name = "Angger";

			this.$emit("nameWasReset", this.name);
		}
	}
};
</script>

<style scoped>
div {
	background-color: lightsalmon;
}
</style>
