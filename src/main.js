import Vue from "vue";
import VueResource from "vue-resource";
// import App from './Assigment6.vue'
// import App from "./UserComponent.vue";
// import App from "./Assignment7.vue";
// import App from "./Assignment8.vue";
// import App from "./Quotes.vue";
// import App from "./Assignment9.vue";
// import App from "./Assignment10.vue";
// import App from "./Assignment11.vue";
import App from "./VueResourceDemo.vue";

Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-http-e47d2.firebaseio.com/";

export const eventBus = new Vue();

Vue.filter("count", value => {
	return value + " (" + value.length + ")";
});

new Vue({
	el: "#app",
	render: h => h(App)
});
