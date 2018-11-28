<template>
	<ul class="list-group">
		<app-server v-for="server in servers" :key="server.id" :server="server"></app-server>
	</ul>
</template>

<script>
import AppServer from "./Server.vue";

export default {
	components: {
		"app-server": AppServer
	},
	data: function() {
		return {
			servers: [
				{ id: 1, status: "Normal" },
				{ id: 2, status: "Critical" },
				{ id: 3, status: "Good" },
				{ id: 4, status: "Critical" },
				{ id: 5, status: "Unknown" }
			]
		};
	}
};
</script>
