<template>
 <b-container>
      <b-row>
        <b-col sm="6" md = "4" v-for="item in storeItems" :key="item.id">
          <my-item :item="item"></my-item>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
import {globalStore} from '../main.js'

import Item from './Item'

export default {
  components: {
    'my-item': Item
  },
  data: () => ({
    storeItems: globalStore.ItemData
  })
}
</script>
<style scoped>

</style>
