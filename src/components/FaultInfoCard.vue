

<template>
    <div>
        <v-row>
            <v-col cols="12" class="mt-1">
                <template v-slot:[`item.workplace`]="{ item }">{{ formatWorkplace(item.workplace) }}</template>
                <FaultInfoRow :description="fault.workplace" :title="'Arbeitsgang'"/>    
            </v-col>
            <v-col cols="12" class="mt-1">
                <FaultInfoRow :description="fault.department" :title="'Bereich'"/>
            </v-col>
            <v-col cols="12" class="mt-1">
                <FaultInfoRow :description="fault.product" :title="'Produkt'"/>
            </v-col>
            <v-col cols="12" class="mt-1">
                <FaultInfoRow :description="fault.dispolevel" :title="'Dispostufe'"/>
            </v-col>
            <v-col cols="12" class="mt-1">
                <FaultInfoRow :description="fault.timestamp" :title="'Zeitstempel'"/>
            </v-col>                
            

        </v-row>
    </div>
</template>

<script lang="ts">
    import Fault from '@/api/model/fault';
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import FaultInfoRow from "@/components/FaultInfoRow.vue"
    import {workspacesOverview, products} from "@/utils";

    @Component({
        components: {
            FaultInfoRow
        }
    })
    export default class FaultInfoCard extends Vue {
        
    @Prop()
    fault?: Fault

    formatWorkplace(workplace: string) {
        return workspacesOverview[workplace]
    }

    }
</script>

<style scoped>

</style>