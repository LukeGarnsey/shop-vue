<template>
    <b-container @mouseover="mouseOver" @mouseout="mouseOut" :style="IsHover">
        <slot></slot>
    </b-container>
</template>
<script>
export default {
  data () {
    return {
			backgroundColor: 'black',
			movement: 0,
      lastX: 0,
      lastY: 0
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
    mouseOver (event) {
			this.backgroundColor = 'white'
    },
    mouseOut () {
			this.backgroundColor = 'black'
    }
  }
}
</script>
<style scoped>


</style>
