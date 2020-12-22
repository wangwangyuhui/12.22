<template>
  <div id="app">
    <Header></Header>
    <!-- 表示所有一级路由都在此显示 -->
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name : 'App',
  // 注册路由用+s，有可能注册多个
  components: {
    Header,
    Footer

  }
}

</script>

<style>

</style>
