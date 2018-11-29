<template>
	<div class="container">
		<app-header></app-header>

		<hr>

		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<app-servers></app-servers>
			</div>
			<div class="col-xs-12 col-sm-6">
				<app-server-detail></app-server-detail>
			</div>
		</div>

		<hr>

		<app-footer></app-footer>
	</div>
</template>

<script>
import AppHeader from "./components/Shared/Header.vue";
import AppFooter from "./components/Shared/Footer.vue";
import AppServers from "./components/Server/Servers.vue";
import AppServerDetail from "./components/Server/ServerDetail.vue";

export default {
	components: {
		"app-header": AppHeader,
		"app-footer": AppFooter,
		"app-servers": AppServers,
		"app-server-detail": AppServerDetail
	}
};
</script>

<style>
</style>
