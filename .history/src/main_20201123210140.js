import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = "http://192.168.83.36:3000";

axios.interceptors.request.use(config => {
  if (config.method == "post") {
    let paramsString = "";
    for (let key in config.data){
      paramsString += `${key}=${config.data[key]}$`;
    }

    config.data = paramsString.slice(0,-1);
  }
})


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
