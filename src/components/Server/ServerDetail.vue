<template>
	<div>
		<span v-if="!server">Please select a server</span>
		<span v-else>
			Server #{{ server.id }} selected, Status: {{ server.status }}
			<hr>
			<button class="btn btn-primary" @click="resetStatus">Change to Normal</button>
		</span>
	</div>
</template>

<script>
import { eventBus } from "../../main";

export default {
	data: function() {
		return {
			server: null
		};
	},
	created() {
		eventBus.$on("serverSelected", server => {
			this.server = server;
		});
	},
	methods: {
		resetStatus() {
			this.server.status = "Normal";
		}
	}
};
</script>
