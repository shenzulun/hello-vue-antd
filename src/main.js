import Vue from 'vue'
import { Button,Icon,Row,Col, Layout } from 'ant-design-vue'
import App from './App'
import router from './router'

Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Layout.name, Layout)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')