<template>
	<div>
		<comp-header :quotesCount="quotes.length" :maxQuotes="maxQuotes"></comp-header>

		<div class="container">
			<comp-new-quote @quoteAdded="addQuote"></comp-new-quote>

			<hr>

			<comp-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></comp-quote-grid>
		</div>

		<comp-footer></comp-footer>
	</div>
</template>

<script>
import CompHeader from "./components/Quotes/_Header.vue";
import CompFooter from "./components/Quotes/_Footer.vue";
import CompNewQuote from "./components/Quotes/NewQuote.vue";
import CompQuoteGrid from "./components/Quotes/QuoteGrid.vue";

export default {
	components: {
		compHeader: CompHeader,
		compFooter: CompFooter,
		compNewQuote: CompNewQuote,
		compQuoteGrid: CompQuoteGrid
	},
	data: function() {
		return {
			maxQuotes: 10,
			quotes: ["Quote 1", "Quote 2"]
		};
	},
	methods: {
		addQuote(quote) {
			if (this.quotes.length < this.maxQuotes) {
				this.quotes.push(quote);
			}
		},
		deleteQuote(index) {
			this.quotes.splice(index, 1);
		}
	}
};
</script>
