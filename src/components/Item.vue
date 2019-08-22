<template>
    <b-container id="temp" @mouseover="mouseOver" @mouseout="mouseOut" :style="IsHover" class="text-center">
        <h2>Product: {{ item.product }} </h2>
        <p>Name: {{ item.name }} </p>
        <p>Type: {{ item.type }} </p>
        <p>Color: {{ item.color }} </p>
        <p>Price (USD): {{ item.price }} </p>
    </b-container>
</template>
<script>
import {globalStore} from '../main.js'

export default {
  props: {
   item: {} 
  },
  data () {
    return {
      backgroundColor: 'black'
    }
  },
  computed: {
    IsHover () {
     return {
       backgroundColor: this.backgroundColor
     }
    }
  },
  methods: {
    mouseOver () {
      this.backgroundColor = 'white'
    },
    mouseOut () {
      this.backgroundColor = 'black'
    }
  }
}
</script>
<style scoped>
#temp{
  height: 250px;
  color: grey;
}

</style>
