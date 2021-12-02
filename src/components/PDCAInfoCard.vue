

<template>
    <div>
        <v-row>
            <v-col cols="12">
                <PDCAInfoRow :description=".title" :title="'Fehlerbezeichnung'"/>
            </v-col>
            <v-col cols="12">
                <PDCAInfoRow :description="solution.description" :title="'Problembeschreibung'"/>
            </v-col>            
            <v-col cols="12">
                <PDCAInfoRow :description="solution.downtime" :title="'Geschätzte Stillstandzeit'"/>
            </v-col>
            <v-col cols="12">
                <PDCAInfoRow :description="solution.shortTimeAction" :title="'Sofortmaßnahmen'"/>
            </v-col>            
            <v-col cols="12" class="mt-1">
                <PDCAInfoRow :description="solution.newcauses" :title="'Ursachen'"/>
            </v-col>
            <v-col cols="12" class="mt-1">
                <PDCAInfoRow :description="solution.longTimeAction" :title="'Abstellmaßnahmen'"/>
            </v-col>
            <v-col cols="12" class="mt-1">
                <PDCAInfoRow :description="solution.ressources" :title="'Ressourcen'"/>
            </v-col>
            <v-col cols="12" class="mt-1">
                <PDCAInfoRow :description="solution.goals" :title="'Ziele'"/>
            </v-col>
            <v-col cols="12" class="mt-1">
                <PDCAInfoRow :description="solution.timestamp" :title="'Zeitstempel'"/>
            </v-col>
            
        </v-row>
    </div>
</template>

<script lang="ts">
    import Solution from '@/api/model/solution';
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PDCAInfoRow from "@/components/PDCAInfoRow.vue"

    @Component({
        components: {
            PDCAInfoRow
        }
    })
    export default class PDCAInfoCard extends Vue {
        
        @Prop()
        solution?: Solution

    }
</script>

<style scoped>

</style>