<template>
    <reaction-container id="temp" class="text-center">
        <h2>Product: {{ item.product }} </h2>
        <p>Name: {{ item.name }} </p>
        <p>Type: {{ item.type }} </p>
        <p>Color: {{ item.color }} </p>
        <p>Price (USD): {{ item.price }} </p>
    </reaction-container>
</template>
<script>
import {globalStore} from '../main.js'
import ReactionContainer from './utils/ReactionContainer'

export default {
  props: {
   item: {} 
  },
  components: {
  'reaction-container': ReactionContainer
  }
}
</script>
<style scoped>
#temp{
  height: 250px;
  color: grey;
}
</style>
