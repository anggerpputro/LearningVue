<template>
	<div>
		<p>Server Details:</p>
		<p>- ID: {{ server.id }}</p>
		<p>- Status: {{ server.status }}</p>
	</div>
</template>

<script>
import { eventBus } from "../../main";

export default {
	props: {
		server: Object
	},
	data: function() {
		return {
			serverId: "",
			serverStatus: ""
		};
	},
	created: function() {
		eventBus.$on("serverDetailsClicked", function(server) {
			this.serverId = server.id;
			this.serverStatus = server.status;
		});
	}
};
</script>
