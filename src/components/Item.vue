<template>
    <div>
        <p>Name: {{ item.name }} </p>
        <p>Description: {{ item.description }} </p>
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
                name: this.$route.params.id,
                description: "Totally Simple to look at item.",
                price: globalStore.ItemData[0].price
            }
        }
    },
    watch: {
      '$route': 'update'
    },
    methods:{
        update(){
            this.item.name = this.$route.params.id
        }
    }
}
</script>