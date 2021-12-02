<!--
<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-text>
              <v-row align="center" justify="center">
                <v-col cols="12" align="center">
                  <v-data-table
                    @click:row="openSolution"
                    :headers="headers"
                    :items="faults"
                  >
                    <template v-slot:[`item.timestamp`]="{ item }">{{ formatTimestamp(item.timestamp) }}</template>
                  </v-data-table>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12">
              <v-card>
                  <v-toolbar color="#39A562" > <h2>Aktuelle Problemlösung </h2></v-toolbar>
                  <v-card-text>  
                    <v-row>
                        <v-col v-if="hasCurrentPDCA()">
                            <PDCAInfoCard :solution="CurrentPDCA"/>
                        </v-col>
                        <v-col align="center" v-else>
                            <p>Kein Fehler ausgewählt</p>
                        </v-col>
                    </v-row>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Solution from "@/api/model/solution";
import { Component, Vue } from "vue-property-decorator";
import PDCAInfoCard from "@/components/PDCAInfoCard.vue"

@Component({
    components: {
        PDCAInfoCard
    }
})
export default class CurrentPDCA extends Vue {

  headers = [
    {
      text: "Bezeichnung",
      align: "start",
      sortable: false,
      value: "title",
    },
    {
      text: "Stillstandzeit",
      align: "start",
      sortable: false,
      value: "downtime",
    },
    {
      text: "Ursachen",
      align: "start",
      sortable: false,
      value: "newcauses",
    },
    {
      text: "Maßnahmen",
      align: "start",
      sortable: false,
      value: "newactions",
    },    
    {
      text: "Zeitstempel",
      align: "start",
      sortable: true,
      value: "timestamp",
    },
  ];

  solutions: Solution[] = [];
  CurrentPDCA?: Solution = new Solution();

  async created() {
    const solutions = await this.$api.getAllSolutions();
    this.solutions = solutions;
  }

  openSolution(item: Solution) {
    this.CurrentPDCA = item
  }

  hasCurrentPDCA() {
    return this.CurrentPDCA != null;
  }

  formatTimestamp(timestamp:string) {
      return new Date(timestamp)

  }
}
</script>

<style scoped>
</style>
-->