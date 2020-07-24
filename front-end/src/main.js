import Vue from 'vue'
import { Button, Input, List } from 'ant-design-vue'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Input)
Vue.use(List)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
