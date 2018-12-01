<template>
	<div class="row">
		<div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
			<form>
				<div class="form-group">
					<label for>New Quote:</label>
					<input type="text" class="form-control" v-model="newQuote" @keyup.enter="addQuote">
				</div>
				<div class="form-group">
					<button class="btn btn-primary" @click.prevent="addQuote">Add Quote</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			newQuote: ""
		};
	},
	methods: {
		addQuote() {
			if (this.newQuote != "") {
				this.$emit("quoteAdded", this.newQuote);
				this.newQuote = "";
			}
		}
	}
};
</script>
