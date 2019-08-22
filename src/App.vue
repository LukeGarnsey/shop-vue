<template>
  <div id="app">
    <img src="./assets/logo.png">
    <item-list></item-list>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import ItemList from './components/ItemList'


export default {
  name: 'App',
  components: {
    'item-list': ItemList
  },
  data: () => ({
    
  })
}
</script>
<style scoped>
div{
  background: black;
}
</style>

