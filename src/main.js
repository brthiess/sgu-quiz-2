import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    makeApiRequest: function(url){
      return new Promise(function(resolve, reject) {
        setTimeout(function(){
          fetch(url, {
            method: 'GET'
          })
          .then((resp) => resp.json()) 
          .then(function(data) {
            resolve(data);
          }).catch(function(error){
            reject(error);
          });
        }, 2000);
      });
    }
  }
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')           


