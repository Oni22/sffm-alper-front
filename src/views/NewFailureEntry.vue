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
                <v-btn color="green" :disabled="!enabled" :loading="loading" >
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
  import { Routes } from '@/router/utils'


  @Component
  export default class NewFailure extends Vue {

    enabled = false
    enabled2 = false
    loading = false
  
  }

</script>

<style scoped>

</style>