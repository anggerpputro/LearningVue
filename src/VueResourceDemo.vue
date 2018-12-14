<template>
	<div class="container">
		<h1 class="text-center">HTTP</h1>

		<hr>

		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<div class="form-group">
					<label for>Username:</label>
					<input class="form-control" type="text" v-model="user.username">
				</div>
				<div class="form-group">
					<label for>Email:</label>
					<input class="form-control" type="email" v-model="user.email">
				</div>
				<div class="form-group">
					<button class="btn btn-primary" @click="submit">Submit</button>
				</div>
				<hr>
				<div class="form-group">
					<button class="btn btn-primary" @click="fetchData">Get Data</button>
				</div>
				<br>
				<br>
				<ul class="list-group">
					<li class="list-item-group" v-for="(u, i) in users" :key="i">{{ u.username }} - {{ u.email }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			resource: {},
			user: {
				username: "",
				email: ""
			},
			users: []
		};
	},
	created() {
		this.resource = this.$resource("data.json");
	},
	methods: {
		submit() {
			// this.$http.post("data.json", this.user).then(
			// 	response => {
			// 		console.log(response);
			// 	},
			// 	error => {
			// 		console.error(error);
			// 	}
			// );
			this.resource.save({}, this.user);
		},
		fetchData() {
			this.$http
				.get("data.json")
				.then(response => {
					return response.json();
				})
				.then(data => {
					const arrayData = [];
					for (let key in data) {
						arrayData.push(data[key]);
					}
					this.users = arrayData;
				});
		}
	}
};
</script>
