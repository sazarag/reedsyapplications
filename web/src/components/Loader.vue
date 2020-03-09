<template>
  <div class="loader" v-if="activeLoaderCount > 0">
    <div class="container">
      <div class="loading">
        <div class="loading-img"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loader',
  data () {
    return {
      activeLoaderCount: 0
    }
  },
  methods: {
    showSpinner () {
      this.activeLoaderCount++
    },
    hideSpinner () {
      this.activeLoaderCount--
    }
  },
  created: function () {
    this.eventHub.$on('before-request', this.showSpinner)
    this.eventHub.$on('request-error', this.hideSpinner)
    this.eventHub.$on('after-response', this.hideSpinner)
    this.eventHub.$on('response-error', this.hideSpinner)
  },
  beforeDestroy: function () {
    this.eventHub.$off('before-request', this.showSpinner)
    this.eventHub.$off('request-error', this.hideSpinner)
    this.eventHub.$off('after-response', this.hideSpinner)
    this.eventHub.$off('response-error', this.hideSpinner)
  }
}
</script>
<style scoped>
.loader {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 105;
    border: none;
    background-color: rgba(146, 139, 139, 0.2);
    border-radius: 0;
    animation: none !important;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}
.loading-img {
	background-image: url("../assets/images/loading.svg");
	background-repeat: no-repeat;
	height: 50px;
	width: 50px;
	-webkit-animation-name: spin;
	-webkit-animation-duration: 1.2s;
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-timing-function: cubic-bezier(0.44, 0.18, 0.54, 0.81);
	-moz-animation-name: spin;
	-moz-animation-duration: 1.2s;
	-moz-animation-iteration-count: infinite;
	-moz-animation-timing-function: cubic-bezier(0.44, 0.18, 0.54, 0.81);
	-ms-animation-name: spin;
	-ms-animation-duration: 1.2s;
	-ms-animation-iteration-count: infinite;
	-ms-animation-timing-function: cubic-bezier(0.44, 0.18, 0.54, 0.81);

	animation-name: spin;
	animation-duration: 1.2s;
	animation-iteration-count: infinite;
	animation-timing-function: cubic-bezier(0.44, 0.18, 0.54, 0.81);
 }
</style>
<style>
.loader {
    animation: none !important;
    border: none;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: 16px;
    position: relative;
    width: 16px;
}
</style>