import Vue from 'vue'
import App from './App.vue'
import Router from './router'

Vue.config.productionTip = false

new Vue({
    router: Router,
    render(createElement) {
        return createElement(App)
    }
}).$mount('#app')