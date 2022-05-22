<template>
  <navbar></navbar>
  <div class="app"> App: {{lines}}
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {

    data(){
      return{
          lines: 0
      }
    },

  components: {
    Navbar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
