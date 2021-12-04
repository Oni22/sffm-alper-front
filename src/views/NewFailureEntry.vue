<template>
  <div>
    <v-container>
      <v-form>
      <v-row>
        <v-col cols="12">
          Um die Entwicklung eines nachhaltig reibungsfreien Fertigungsablaufes voranzutreiben, ist das Eintragen, Analysieren und Auswerten von Fehlerzuständen
          von hoher Bedeutung. Die Analyse und die Auswertung von Fehlerzuständen können, je nach Störungssituation, -grund oder -dauer, mit diversen Methoden 
          und Mitteln erfüllt werden. Die Lösung eines vorliegenden Problems soll mit dem Durchlaufen des Problemlösungszyklus gewährleistet werden. 
          Dazu wird in der folgenden Ansicht eine unterstützende Problemlösungssystematik durchgeführt.
        </v-col> 
        <v-col>
          <v-divider/>
        </v-col>
        <v-col cols="12"> <h2>Ist der vorliegende Fehler bereits bekannt?</h2>
            (bekannt bedeutet hierbei das Vorliegen der Komponenten "Fehlergrund", "Fehlerkategorie" und weiteren produktbezogene Informationen)
        </v-col>
      </v-row>  
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-text>
            <v-radio-group v-model="currentRadioValue">
              <v-radio label="Ja, der Fehler ist bekannt" value="known" ></v-radio>
              <v-radio label="Nein, der Fehler ist unbekannt" value="unknown" ></v-radio>
            </v-radio-group>
            <p v-if="currentRadioValue === 'known'">Für den Fehler sind Ursachen, Fehlergründe und weitere Produktionsdaten bekannt. 
                  Der Fehler soll daher in die Datenbank eingetragen werden, um eine zukünftige Auswertung anzustoßen. </p>
             <p v-if="currentRadioValue === 'unknown'">Die Daten für diesen Fehler sind unbekannt. Es sind keine passenden bzw. umgesetzten Maßnahmen für dieses Problem vorhanden.
                  Die Ursachen und Hintergründe für den Fehlerbeseitigungsprozess sind ebenfalls unbekannt.</p>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="handleNext()" color="success">Weiter</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
    </v-container>
  </div>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { faults,workspaces,products, actions} from '@/utils'
  import Fault from '@/api/model/fault';
  import { Routes } from '@/router/utils'


  @Component
  export default class NewFailure extends Vue {

    enabled = false
    enabled2 = false
    loading = false
    currentRadioValue = "known"

    handleNext() {
      if(this.currentRadioValue === "known") {
        this.$router.push(Routes.NEW_FAILURE)
      } else {
         this.$router.push(Routes.NEW_PDCA)
      }
    }
  
  }

</script>

<style scoped>

</style>