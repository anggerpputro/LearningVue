<template>
	<div>
		<slot name="title">
			<h3>Content Title</h3>
		</slot>
		<slot name="content">
			<p>The Content</p>
		</slot>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
	margin: 10px auto;
	padding: 10px;
	background-color: lightcoral;
	text-align: center;
	color: white;
}
</style>
