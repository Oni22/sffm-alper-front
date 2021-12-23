<template>
  <div>
    <v-container>
      <v-form>
      <v-row>
        <v-col cols="12">
        <h2>Fehler eintragen</h2>
        <v-divider/>
        <p class="font-weight-light">  
          Um die Entwicklung eines nachhaltig reibungsfreien Fertigungsablaufes voranzutreiben, ist das Eintragen, 
          Analysieren und Auswerten von Fehlerzuständen von hoher Bedeutung. Das Einpflegen von Fehlerzuständen kann, 
          je nach Störungssituation, -grund oder -dauer, mit diversen Methoden und Mitteln erfüllt werden. 
          In diesem Fenster ist zunächst zu unterscheiden, ob ein auftretender Fehler bekannt oder unbekannt ist.
          Das bedeutet, dass eine Kenntnis über die fehlerbeschreibenden Daten vorliegen muss, um den Fehler als "bekannt" einzustufen. 
        </p>
        <v-divider/>
        </v-col> 
        <v-col cols="12"> 
          <h2>Ist der vorliegende Fehler bereits bekannt?</h2>
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
            <v-alert border="bottom" color="#80CBC4" >
              <p v-if="currentRadioValue === 'known'">
                  <strong>"bekannt": Einer der Fehlergründe 01. - 37. liegt vor. Die Ressourcen, Ziele und weitere produktive Daten sind bekannt.</strong>        
                  Der Fehler soll daher in die Datenbank eingetragen werden, um eine zukünftige Auswertung anzustoßen. Es soll eine Maßnahme und Stillstandzeit ausgegeben werden.
                  Dieser Prozess wird angestoßen, wenn ein neuer Fehler in der Fertigung auftritt, dessen Spezifikationen bereits festgelegt wurden.
              </p>
             <p v-if="currentRadioValue === 'unknown'">
                  <strong> "unbekannt": Ein eindeutiger Fehlergrund kann nicht zugewiesen werden. Die Ressourcen, Ziele, Spezifikation und weitere produktive Daten sind unbekannt.
                  </strong>
                  Die Ursachen und Hintergründe für den Fehlerbeseitigungsprozess sind ebenfalls unbekannt.
                  Dieser Prozess wird angestoßen, wenn ein neuer Fehler in der Fertigung auftritt, dessen Spezifikationen 
                  neuartig sind und eine langfristige Lösung der Störung notwendig ist.
              </p>
            </v-alert>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="handleNext()" color="#00695C" dark>Weiter</v-btn>
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