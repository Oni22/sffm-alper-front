<template>
    <v-row justify="center">
        <v-col cols="6">
            <v-date-picker v-model="months" type="month" multiple color="grey"></v-date-picker>
        </v-col>
    </v-row>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Routes } from '@/router/utils'


  @Component
  export default class FailureAnalyze extends Vue {

    months = "2018-09"



  }

</script>

<style scoped>

</style>

