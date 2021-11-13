<template>
    <div>
        <v-row align="center" justify="center">
            <v-col cols="12" class="col-md-6" style="background:red" align="center">
                <v-btn color="error">Add Fault</v-btn>
            </v-col>
            <v-col cols="12" class="col-md-6" style="background:blue">
                <v-btn color="error">Add Fault</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class CurrentFaults extends Vue {
        
    }
</script>

<style scoped>

</style>