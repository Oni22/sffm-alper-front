<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>Aktuelle Problemlösungen</h2>
          <v-divider/>
            <p class="font-weight-light">  
              Ein wichtiger Bestandteil zur Erfassung von neuen Fehlereinträgen ist die Übersicht der aktuellen Problemlösungsprozesse. 
              Dieses Fenster bietet die Möglichkeit zur direkten Einsicht in die aktuell laufenden Lösungszyklen, 
              durch den Import in die Applikation. Die Tabelle, mit der Möglichkeit zur Sortierung nach dem Importzeitpunkt, 
              ermöglicht eine genaue Betrachtung der Fehlersituationen durch das Aufrufen der detaillierten Ansicht. 
            </p>
          <v-divider/>
        </v-col>
        <v-col cols="12">
            <p class="font-weight-light">  
              Klicken Sie eine Zeile (einen PDCA-Zyklus) an, um eine detaillierte Ansicht zu erhalten und die Problemlösung zu ergänzen.
            </p>
          <v-divider/>
          <v-card>
            <v-card-text>
              <v-row align="center" justify="center">
                <v-col cols="12" align="center">
                  <v-data-table
                    :loading="isTableLoading"
                    @click:row="openPDCA"
                    :headers="headers"
                    :items="pdca"
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
                  <v-toolbar color="#90CAF9"> 
                    <h2>
                      Aktuelle Problemlösung <small>(hier können Sie den oben ausgewählten PDCA-Zyklus anpassen und abspeichern)</small> 
                    </h2>
                  </v-toolbar>
                    <v-row>
                      <PDCACycle @onSave="reloadPDCAList()" ref="pdcaCycle"/>
                    </v-row>
              </v-card>
          </v-col>
      </v-row>
      
    </v-container>
  </div>
</template>


<script lang="ts">
import PDCA from "@/api/model/pdca";
import { Component, Vue } from "vue-property-decorator";
import PDCACycle from "@/components/PDCACycle.vue"
import { Routes } from '@/router/utils'


@Component({
    components: {
        PDCACycle
    }
})


export default class CurrentPDCA extends Vue {
  enabled = false;
  isTableLoading = false

  data(){
    return {
        alert: true,
        snackbar: false,
        text: 'Ihr Eintrag wurde gesichert.',
      }
  }

  headers = [
    {
      text: "Beschreibung",
      align: "start",
      sortable: false,
      value: "title",
    },
    {
      text: "Störungs-Tags",
      align: "start",
      sortable: false,
      value: "titleTags",
    },
    {
      text: "Teilnehmer_innen",
      align: "start",
      sortable: false,
      value: "userName",
    },
    {
      text: "aktuelle Phase",
      align: "start",
      sortable: false,
      value: "currentPhase",
    },
    {
      text: "Zeitstempel",
      align: "start",
      sortable: true,
      value: "timestamp",
    },
  ];

  pdca: PDCA[] = [];
  currentPDCA?: PDCA = new PDCA();

  async created() {
    this.fetchList()
  }

  async fetchList() {
    const pdca = await this.$api.getAllPDCA();
    this.pdca = pdca;
  }

  openPDCA(item: PDCA) {
    console.log("SET CURRENT")
    const pdcaCycle = this.$refs.pdcaCycle as PDCACycle
    pdcaCycle.setCurrentPDCA(item)
    this.currentPDCA = item
  }

  formatTimestamp(timestamp:string) {
      return new Date(timestamp)

  }

  async reloadPDCAList() {
    this.isTableLoading = true
    try {
      await this.fetchList()
    } catch(err) {
      console.log(err)
    }

    this.isTableLoading = false
  }

}
</script>

<style scoped>
</style>
