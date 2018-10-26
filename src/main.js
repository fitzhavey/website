import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VueAnalytics from 'vue-analytics';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

Vue.use(VueAnalytics, {
	id: 'UA-128193698-1',
	router
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
