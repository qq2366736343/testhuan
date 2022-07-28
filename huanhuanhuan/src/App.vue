<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'App',
  mounted() {
    axios
        .get('/api/users/login/')
        .then(response => (console.log(response)))
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
  }
}
</script>
<style>
</style>
