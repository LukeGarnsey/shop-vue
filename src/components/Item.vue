<template>
    <div>
        <h2>Product: {{ item.product }} </h2>
        <p>Name: {{ item.name }} </p>
        <p>Type: {{ item.type }} </p>
        <p>Color: {{ item.color }} </p>
        <p>Price (USD): {{ item.price }} </p>
    </div>
</template>
<script>
import {globalStore} from '../main.js'

export default {
    name: 'Item',
    data(){
        return{
            item:{
                name: "",
                type: "",
                price: "",
                color: "",
                product: ""
            }
        }
    },
    watch: {
      '$route': 'update'
    },
    methods:{
        update(){
            this.item = globalStore.ItemData.find(x=> x.id == this.$route.params.id);
        }
    },
    beforeMount(){
        this.update()
    }
}
</script>