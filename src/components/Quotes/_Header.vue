<template>
	<header>
		<h2 class="text-center">The Wonderful Quote</h2>
		<hr>
		<div class="row">
			<div class="col-sm-8 col-sm-offset-2">
				<div class="progress">
					<div
						class="progress-bar progress-bar-success"
						role="progressbar"
						:aria-valuenow="quotesCount"
						aria-valuemin="0"
						aria-valuemax="100"
						:style="{'width': ((quotesCount/maxQuotes)*100) + '%'}"
					>
						<strong>{{ quotesCount }} / {{ maxQuotes }}</strong>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	props: ["quotesCount", "maxQuotes"]
};
</script>
