import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


import 'bootstrap'
import '@/assets/scss/custom.scss'

import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import 'simple-line-icons/dist/styles/simple-line-icons.css'

import AOS from 'aos'
import "aos/dist/aos.css"


Vue.use(VueAxios, axios)
Vue.use(CoolLightBox);
Vue.config.productionTip = false;

//const messages = Object.assign(languages)
//var i18n = new VueI18n({
////	locale: defaultLocale,
//	fallbackLocale: 'es',
//	messages
// })


//axios.defaults.baseURL = 'http://localhost/electry_api/wp-json/';
//axios.defaults.baseURL = 'https://okgooru.es/pruebas-tecnicas/electry-api-v04/wp-json/';
axios.defaults.baseURL = 'https://electryconsulting.com/wp-json/';

import VueMeta from 'vue-meta'
import i18n from './i18n'
Vue.use(VueMeta)

new Vue({
  router,
  created() {
    AOS.init();
  },

  i18n,
  render: h => h(App)
}).$mount('#app');
