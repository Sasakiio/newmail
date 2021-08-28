import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

import toast from 'components/common/toast'
import { create } from 'axios/lib/axios'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

//安装toast插件
Vue.use(toast)

new Vue({
	router,
  store,
  render: h => h(App),
}).$mount('#app')


// 定义外部接口可配置
// Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = '/api'
// Axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false

   // this.$axios.get("/m5")
   // .then(res=>{
   //    console.log(res)
   // })
   // .catch(err=>{
   //    console.log(err)
   // })


//import axios from 'axios'
//let startApp = function () {
 // axios.get('/static/config.json').then((res) => {
    // 基础地址
    //Vue.prototype.BASE_URL = res.BASE_URL;

//     new Vue({
//      el: '#app',
//      router,
//      store,
//       components: {
//        App
//     },
//      template: '<App/>'
//    })
//  })
// }

// startApp()
