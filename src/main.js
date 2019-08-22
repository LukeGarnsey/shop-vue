import Vue from 'vue'
import App from './App'
import router from './router'
import faker from 'faker'
import uuid from 'uuid/v4'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

var globalStore = new Vue({
  data: {
    ItemData: [
      {
      }
    ]
  },
  methods: {
    GenerateData: function (amount) {
      this.ItemData = []
      for (var i = 0; i < amount; i++) {
        this.ItemData.push(
          {
            id: uuid().substring(0, 8),
            name: faker.commerce.productName(),
            color: faker.commerce.color(),
            price: faker.commerce.price(),
            type: faker.commerce.productAdjective(),
            product: faker.commerce.product()
          }
        )
      }
    }
  }
})
globalStore.GenerateData(100)
export { globalStore }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
