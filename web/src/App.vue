<template>
  <div id="app">
    
    <loader></loader>
    <router-view :key="$route.fullPath" class="router-content"/>
    
  </div>
</template>

<script>
import Loader from './components/Loader.vue'
import '@/assets/css/app.scss'
export default {
  name: 'App',
  components: {
    Loader
  }
}
</script>

<style>

</style>
