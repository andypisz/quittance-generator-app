import Vue from 'vue'
import App from './App.vue'
import "vuesax/dist/vuesax.css"; // Vuesax styles
import Vuesax from "vuesax";

Vue.config.productionTip = false

// Vuesax
Vue.use(Vuesax, {
  // options here
});

new Vue({
  render: h => h(App),
}).$mount('#app')
