import Vue from 'vue';
import App from './App.vue';
import store from '../store/index';

new Vue({
  store, // Use the Vuex store
  render: h => h(App),
}).$mount('#app');
