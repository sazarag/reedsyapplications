<template>
  <div class="not-found-404">
    <div class="main">
      <div class="column is-half">
        <div class="error-404" alt="error-404"></div>
        <div class="text">Page can not found ?</div>
        <router-link :to="{ name: 'HomePage'}">
          <button class="button">Go Home</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound404',
  data () {
    return {
    }
  },
}
</script>

<style scoped>
.not-found-404 {
  text-align: center;
  min-height: 300px;
}
.not-found-404 img {  
  margin: 114px auto 0px auto;
}
.text {
  padding: 30px 0 45px 0;
  font-size:1.5em;
  color: var(--text-color5);
}
.home-btn {
  padding: 0 60px;
  margin-bottom: 87px;
}
</style>
<style>
.header {
  position: relative;
}
</style>
