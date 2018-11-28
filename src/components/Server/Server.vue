<template>
	<li class="list-group-item" style="cursor: pointer;" @click="serverClicked">Server #{{ id }}</li>
</template>

<script>
export default {
	props: ["id"],
	methods: {
		serverClicked() {}
	}
};
</script>
