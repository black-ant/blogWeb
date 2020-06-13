<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App'
  }
</script>

<style>


  #app {
    height: 100%;
    /*margin-top: 60px;*/
  }

  html, body, #app {
    height: 100%;
  }
</style>
