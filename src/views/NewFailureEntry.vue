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
            <v-toolbar height="40" color="green" elevation="0"><h3>Ja, der Fehler ist bekannt.</h3></v-toolbar>
            <v-card-text> 
              <v-row>
                <v-col>
                  <v-checkbox v-model="enabled" hide details class="shrink mr-2 mt-0" 
                  label="Für den Fehler sind Ursachen, Fehlergründe und weitere Produktionsdaten bekannt. 
                  Der Fehler soll daher in die Datenbank eingetragen werden, um eine zukünftige Auswertung anzustoßen.">
                  </v-checkbox>
                </v-col>
              </v-row>
                <v-btn color="green" :disabled="!enabled" :loading="loading"  @click="send()">
                    Weiter
                </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-toolbar height="40" color="orange" elevation="0"><h3>Nein, der Fehler ist unbekannt.</h3></v-toolbar>
            <v-card-text>
              <v-row>
                <v-col> 
                  <v-checkbox v-model="enabled2" hide details class="shrink mr-2 mt-0" 
                  label="Die Daten für diesen Fehler sind unbekannt. Es sind keine passenden bzw. umgesetzten Maßnahmen für dieses Problem vorhanden.
                  Die Ursachen und Hintergründe für den Fehlerbeseitigungsprozess sind ebenfalls unbekannt.">
                  </v-checkbox>
                </v-col>
              </v-row>  
                <v-btn color="orange" :disabled="!enabled2" :loading="loading"  @click="send()">
                  Weiter
                </v-btn>  
            </v-card-text>
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

  @Component
  export default class NewFailure extends Vue {

    enabled = false
    enabled2 = false
    loading = false
    currentFault = this.faultItems[0]
    currentWorkspace = this.workspaceItems[0]
    currentProduct = this.productItems[0]
    currentDispolevel = "ESC GT_1"
    currentArea = "OSM-Planfertigung"
    currentCategory = "Administration"
    description = ""
    actionToDo = ""
    downtimeInDays = 0


    async send() {

      try {
        console.log(this.currentWorkspace)
        this.loading = true
        const fault = new Fault()
        fault.reason = this.currentFault
        fault.category = this.currentCategory
        fault.workplace = this.currentWorkspace
        fault.product = this.currentProduct
        fault.department = this.currentArea
        fault.dispolevel = this.currentDispolevel
        const createdFault = await this.$api.sendFault(fault)
        const prediction = await this.$api.predict(createdFault?.product ?? "",createdFault?.workplace ?? "",createdFault?.reason ?? "")

        if((prediction?.action?.length ?? 0) > 0 && prediction?.action) {
          const predictionResult = String(prediction?.action[0])
          this.actionToDo = actions[predictionResult];
        }

        if((prediction?.downtime?.length ?? 0) > 0 && prediction?.downtime) {
          const downtimeResult = String(prediction?.downtime[0])
          this.downtimeInDays = parseInt(downtimeResult)
        }

        console.log("PREDICTION",prediction)

      } catch(err) {
        console.log(err)
      }

      this.loading = false

    }


    get faultItems() {

      let values = []

      for(const [key,value] of Object.entries(faults)) {
        values.push(key)
      }

      return values
    }

    get productItems() {

      let values = []

      for(const [key,value] of Object.entries(products)) {
        values.push(key)
      }

      return values
    }

    get workspaceItems() {

      let values = []

      for(const [key,value] of Object.entries(workspaces)) {
        values.push(key)
      }

      return values
    }

  }
</script>

<style scoped>

</style>