
<template>
    <div>
        <v-row class="row-border">
            <v-col cols="4" class="title-border">
                {{title}}
            </v-col>
            <v-col cols="8">
                {{description}}
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class FaultInfoRow extends Vue {
        
        @Prop()
        title?: string

        @Prop()
        description?: string

    }
</script>

<style>

.row-border {
    border: 2px solid black;
}

.title-border {
    border-right: 2px solid black;
}

</style>