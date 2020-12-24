<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
    <like/>
    <Rank/>
    <Floor/>
    <Floor/>
    <brand/>
  </div>
</template>

<script>

import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import like from './Like'
import Rank from './Rank'
import Brand from './Brand/Brand.vue'
import Floor from './Floor'


export default {
  name: 'Home',
  components:{
    ListContainer,
    TodayRecommend,
    like,
    Rank,
    
    Brand,
    Floor,
    
    
  }
}
</script>

<style lang="less" scoped>

</style>
