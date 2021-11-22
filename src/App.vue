<template>
  <div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Fault from './api/model/fault';

  @Component
  export default class App extends Vue {


  }
</script>

<style scoped>

</style>
