<template>
	<div class="container">
		<div class="text-center" style="margin: 30px auto">
			<button class="btn btn-danger" @click="showRed">Red</button>
			<button class="btn btn-success" @click="showGreen">Green</button>
			<button class="btn btn-primary" @click="showBlue">Blue</button>
		</div>

		<div v-if="selectedComponent != ''">
			<component :is="selectedComponent">
				<h3 slot="title">{{ componentTitle }}</h3>
				<p slot="content">{{ componentContent }}</p>
			</component>
		</div>
		<div v-else>
			<p>Please click the button</p>
		</div>
	</div>
</template>

<script>
import CompRed from "./components/Assignment8/Red.vue";
import CompGreen from "./components/Assignment8/Green.vue";
import CompBlue from "./components/Assignment8/Blue.vue";

export default {
	components: {
		compRed: CompRed,
		compGreen: CompGreen,
		compBlue: CompBlue
	},
	data: function() {
		return {
			selectedComponent: "",
			componentTitle: "",
			componentContent: ""
		};
	},
	methods: {
		changeComponent(color) {
			this.componentTitle = color + " Title";
			this.componentContent = color + " Content";
			this.selectedComponent = "comp" + color;
		},
		showRed() {
			this.changeComponent("Red");
		},
		showGreen() {
			this.changeComponent("Green");
		},
		showBlue() {
			this.changeComponent("Blue");
		}
	}
};
</script>
