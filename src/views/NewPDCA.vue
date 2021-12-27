<template>
  <div>
    <v-container>
      <h2>Problemlösungsprozess für neue, unbekannte Fehler</h2>
      <v-divider/>
        <p class="font-weight-light">
              In diesem Fenster wird ein Fehler, dessen Spezifikationen unbekannt sind, eingetragen. 
              Hierbei wird ein neuer Problemlösungszyklus, im Sinne des Plan-Do-Check-Act-Zyklus (PDCA-Zyklus), angestoßen.
              Bitte tragen Sie die notwendigen Informationen für die Problemlösung ein, indem Sie die Schritte des PDCA-Zyklus bearbeiten.
        </p>    
        <v-alert :value="alert" color="#78909C" border="left" type="info" elevation="2" dismissible> 
          <p class="font-weight-light">
          <small>
              <div class="text-h6">
                Bearbeitungshinweise
              </div>
              <div>
                Speichern Sie Ihre Daten mit der untenstehenden Schaltfläche jederzeit ab, um Sie abzusenden.
                Nach der Sicherung der Ergebnisse können Sie die Seite verlassen und unter dem Reiter "Aktuelle Problemlösungen" 
                den Eintrag aufrufen. Sie können zwischen den Optionen des PDCA-Zyklus hin- und her wechseln, 
                um nachträgliche Veränderungen vorzunehmen.
              </div>
              <div>
                <strong>Um die Bearbeitung oder die Informationen einer Phase aufzurufen, klicken Sie auf die jeweilige (horizontal liegende) Phase. 
                Innerhalb der Phasen können Sie die (vertikal liegende) Option auswählen und die Einträge bearbeiten.</strong>
              </div>
          </small>
          </p>
        </v-alert>
        <v-col>
            <v-divider />
        </v-col>
        <v-row>
          <PDCACycle :pdca="currentPDCA"/>
        </v-row>
    </v-container>
  </div>
</template>

 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mdiCheck,mdiTrashCan } from "@mdi/js";
import { Routes } from "@/router/utils";
import PDCA from "@/api/model/pdca";
import PDCACycle from "@/components/PDCACycle.vue";


@Component({
    components: {
        PDCACycle
    }
})

export default class NewPDCA extends Vue {
  enabled = false;

  pdca: PDCA[] = [];
  currentPDCA?: PDCA = new PDCA();

}
</script>

<style scoped>
</style>


