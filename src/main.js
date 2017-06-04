// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import resource from 'vue-resource'

import App from './App'

import mintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import '../static/hello-mui/css/mui.min.css'
import '../static/hello-mui/css/icons-extra.css'

Vue.use(mintUI)
Vue.use(resource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
