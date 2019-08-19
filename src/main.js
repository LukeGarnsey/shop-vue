import Vue from 'vue'
import App from './App'
import router from './router'
import faker from 'faker'
import uuid from 'uuid/v4';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

var globalStore = new Vue({
  data: {
    ItemData : [
      {
        name: faker.commerce.productName(), description: uuid().substring(0, 8), price: faker.commerce.price()
      }
      ]
  },

  vuetify,

  methods: {
    GenerateData: function (amount) {
      this.ItemData = [];
      for(var i = 0; i<amount; i++){
        this.ItemData.push(
            {
              id: uuid().substring(0, 8),
              name : faker.commerce.productName(),
              color: faker.commerce.color(),
              price: faker.commerce.price(),
              type: faker.commerce.productAdjective(),
              product: faker.commerce.product()

            }
        );
      }
    }
  }
});
globalStore.GenerateData(100);
export { globalStore };
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
 
})


