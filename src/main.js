import Vue from 'vue'
import { Button } from 'ant-design-vue'
import App from './App'
import router from './router'

Vue.component(Button.name, Button)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')