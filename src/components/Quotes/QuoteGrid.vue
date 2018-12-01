<template>
	<div class="row">
		<comp-quote v-for="(quote,index) in quotes" :key="index" @click.native="deleteQuote(index)">
			<h3 class="box-title">{{ quote }}</h3>
		</comp-quote>
	</div>
</template>

<script>
import CompQuote from "./Quote.vue";

export default {
	props: ["quotes"],
	components: {
		compQuote: CompQuote
	},
	methods: {
		deleteQuote(index) {
			this.$emit("quoteDeleted", index);
		}
	}
};
</script>

