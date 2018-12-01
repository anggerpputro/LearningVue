import Vue from "vue";
// import App from './Assigment6.vue'
// import App from "./UserComponent.vue";
// import App from "./Assignment7.vue";
// import App from "./Assignment8.vue";
import App from "./Quotes.vue";

export const eventBus = new Vue();

new Vue({
	el: "#app",
	render: h => h(App)
});
