<template>
  <div id="app">
    <s-header id="header"></s-header>
    <b-container id="header-space"></b-container>
    <item-list></item-list>
    <s-footer id="footer"></s-footer>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Header from './components/utils/Header'
import Footer from './components/utils/Footer'
import ItemList from './components/ItemList'



export default {
  name: 'App',
  components: {
    'item-list': ItemList,
    's-header' : Header,
    's-footer' : Footer
  },
  data: () => ({
    
  })
}
</script>
<style scoped>
div{
  background: black;
}
#header{
    position: fixed;
    width: 100vw;
    z-index: 1;
}
#header-space{
  height: 100px;
}
#footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    z-index: 1;
}

</style>

