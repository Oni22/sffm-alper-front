<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
        <h2>Aktuelle Fehler</h2>
        <v-divider/>
          <p class="font-weight-light">  
            Ein wichtiger Bestandteil zur Transparenz und Einheitlichkeit der eingetragenen 
            Fehler ist die Übersicht der aktuellen Fehlereinträge. Dieses Fenster bietet die  
            Möglichkeit zur direkten Einsicht in die zeitlich aktuellen Fehler, 
            durch den Import in die Applikation. Bei vorhandenem Zeitbedarf können die 
            Fehlergründe aus Nachbarabteilungen, Vorgängerprozessen oder anderen Produkten wahrgenommen werden.  
            Die Fehlertabelle, mit der Möglichkeit zur Sortierung nach dem Importzeitpunkt, ermöglicht 
            eine genaue Betrachtung der Fehlersituationen, durch das Aufrufen der detaillierten Ansicht eines Fehlers. 
          </p>
        <v-divider/>
        </v-col>  
        <v-col cols="12">
          <p class="font-weight-light">  
            Klicken Sie eine Zeile (einen Fehlereintrag) an, um eine detaillierte Ansicht zu erhalten.
          </p>
          <v-divider/>
          <v-card>
            <v-card-text>
              <v-row align="center" justify="center">
                <v-col cols="12" align="center">
                  <v-data-table
                    @click:row="openFault"
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
            <v-toolbar color="#4DB6AC">
              <h2> 
                Aktueller Fehler <small>(detaillierte Eigenschaften für den oben ausgewählten Fehler)</small>
              </h2>   
            </v-toolbar>
            <v-card-text>  
              <v-row>
                  <v-col v-if="hasCurrentFault()">
                      <FaultInfoCard :fault="currentFault"/>
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
import Fault from "@/api/model/fault";
import {
  faults,
  workspaces,
  products,
  actions,
  primaryCauses,
  secundaryCauses,
} from "@/utils";
import { Component, Vue } from "vue-property-decorator";
import FaultInfoCard from "@/components/FaultInfoCard.vue"

@Component({
    components: {
        FaultInfoCard
    }
})
export default class CurrentFaults extends Vue {

  headers = [
    {
      text: "Fehlergrund",
      align: "start",
      sortable: false,
      value: "reason",
    },
    {
      text: "Arbeitsgang",
      align: "start",
      sortable: false,
      value: "workplace",
    },
    {
      text: "Dispostufe",
      align: "start",
      sortable: false,
      value: "dispolevel",
    },
    {
      text: "Bereich",
      align: "start",
      sortable: false,
      value: "department",
    },
    {
      text: "Zeitstempel",
      align: "start",
      sortable: true,
      value: "timestamp",
    },
  ];

  faults: Fault[] = [];
  currentFault?: Fault = new Fault();

  async created() {
    const faults = await this.$api.getAllFaults();
    this.faults = faults;
  }

  openFault(item: Fault) {
    this.currentFault = item
  }

  hasCurrentFault() {
    return this.currentFault != null;
  }

  formatTimestamp(timestamp:string) {
      return new Date(timestamp)

  }
}
</script>

<style scoped>
</style>