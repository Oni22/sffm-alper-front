

<template>
    <div>
        <v-row>
            <v-col cols="12">
                <PDCAInfoRow :description=".title" :title="'Fehlerbezeichnung'"/>
            </v-col>
            <v-col cols="12">
                <PDCAInfoRow :description="pdca.description" :title="'Problembeschreibung'"/>
            </v-col>            
            <v-col cols="12">
                <PDCAInfoRow :description="pdca.downtime" :title="'Geschätzte Stillstandzeit'"/>
            </v-col>
            <v-col cols="12">
                <PDCAInfoRow :description="pdca.shortTimeAction" :title="'Sofortmaßnahmen'"/>
            </v-col>            
            <v-col cols="12" class="mt-1">
                <PDCAInfoRow :description="pdca.newcauses" :title="'Ursachen'"/>
            </v-col>
            <v-col cols="12" class="mt-1">
                <PDCAInfoRow :description="pdca.longTimeAction" :title="'Abstellmaßnahmen'"/>
            </v-col>
            <v-col cols="12" class="mt-1">
                <PDCAInfoRow :description="pdca.ressources" :title="'Ressourcen'"/>
            </v-col>
            <v-col cols="12" class="mt-1">
                <PDCAInfoRow :description="pdca.goals" :title="'Ziele'"/>
            </v-col>
            <v-col cols="12" class="mt-1">
                <PDCAInfoRow :description="pdca.timestamp" :title="'Zeitstempel'"/>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
    import Prediction from '@/api/model/pdca';
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PDCAInfoRow from "@/components/PDCAInfoRow.vue"

    @Component({
        components: {
            PDCAInfoRow
        }
    })
    export default class PDCAInfoCard extends Vue {
        
        @Prop()
        prediction?: Prediction

    }
</script>

<style scoped>

</style>