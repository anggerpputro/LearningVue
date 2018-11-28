<template>
	<div class="component">
		<h1>User Components</h1>

		<button class="btn btn-primary" @click="changeName">Change Name</button>
		<p>Name is {{ name }}</p>

		<hr class="clearfix">

		<div class="row clearfix">
			<div class="col-xs-12 col-sm-6">
				<user-detail :name="name" @nameWasReset="name = $event" :resetFunc="resetFromParent"></user-detail>
			</div>
			<div class="col-xs-12 col-sm-6">
				<user-edit></user-edit>
			</div>
		</div>
	</div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
	components: {
		"user-detail": UserDetail,
		"user-edit": UserEdit
	},
	data: function() {
		return {
			name: "Angger"
		};
	},
	methods: {
		changeName() {
			this.name = "Angger Priyardhan Putro";
		},
		resetFromParent() {
			this.name = "Angger";
		}
	}
};
</script>

<style scoped>
div {
	background-color: lightblue;
}
</style>
