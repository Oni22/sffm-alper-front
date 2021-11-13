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

    faults: Fault[] = [];
    
    async created() {

      const faults = await this.$api.getAllFaults()
      console.log(faults)
      this.faults = faults
      
    }

  }
</script>

<style scoped>

</style>
