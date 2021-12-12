<template>
  <div>
    <v-container>
      <v-form>
      <v-row>
        <v-col cols="12">
          <h2>Fehleraufnahme für neue, bekannte Fehler</h2>
          <p class="font-weight-light">
            In diesem Fenster wird ein neuer Fehler, dessen Spezifikationen bereits bekannt sind, eingetragen. Das Ausfüllen der Felder und anschließendes 
            Absenden begünstigt die Prognose einer Stillstandzeit, einer passenden Maßnahme und einem primären sowie sekundären Ursachenfeld. Durch die 
            Bearbeitung mit Maschine-Learning-Algorithmen, wird eine Fehlerliste für die tiefgreifenden Analysen der Fehlersituationen aufgestellt.
          </p> 
        </v-col> 
        <v-col>
          <v-divider/>
        </v-col>
        <v-col cols="12">
          <v-btn color="#78909C" outlined @click="alert = !alert">
              Bearbeitungshinweise anzeigen/ausblenden
          </v-btn>    
        <v-alert :value="alert" color="#78909C" border="left" type="info" elevation="2"> 
          <p class="font-weight-light">
            <small>
              <div class="text-h6">
                Bearbeitungshinweise
              </div>
              <div>
                Tragen Sie im Folgenden die fehlerbeschreibenden Daten ein, welche sich mit diesem Fehlerzustand ergeben. 
                Zusätzlich kann eine Fehlerbeschreibung, für das präzise Formulieren der Abweichung bzw. Störung, verfasst werden.
              </div>
            </small>
          </p>
        </v-alert>
        </v-col>
      </v-row> 
      <v-row>
        <v-col cols="6">
          <v-select  label="Wählen Sie die Fehlergrund aus:" :items="faultItems" v-model="currentFault" />
        </v-col>
         <v-col cols="6">
          <v-select  label="Wählen Sie das Produkt aus:" :items="productItems" v-model="currentProduct" />
        </v-col>
         <v-col cols="6">
          <v-select  label="Wählen Sie den Arbeitsgang aus:" :items="workspaceItems" v-model="currentWorkspace" />
        </v-col>
        <v-col cols="6">
          <v-select v-model="currentCategory" :items="faultCategories" label="Wählen Sie die Fehlerkategorie aus:"/>
        </v-col> 
        <v-col cols="6">
          <v-select v-model="currentArea" :items="areas" label="Wählen Sie den Bereich aus:" />
        </v-col> 
        <v-col cols="6">
          <v-select v-model="currentDispolevel" :items="dispoLevels" label="Wählen Sie die Dispostufe aus:" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="description" counter maxlength="150" label="Geben Sie eine Beschreibung zur Fehlerentstehung ein:" >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
        <v-checkbox v-model="enabled" hide details class="shrink mr-2 mt-0" 
        label="Ich bestätige die Überprüfung der eingegebenen Daten und willige der Datenverarbeitung ein.">
        </v-checkbox>
        </v-col>
      </v-row>
      <v-row> 
        <v-col>
          <v-btn dark color="#2E7D32" :disabled="!enabled" :loading="loading"  @click="send()">
            Ergebnisse ausgeben
            <v-icon right>mdi-folder</v-icon>
          </v-btn>
        </v-col>       
      </v-row> 
      <v-row>
        <v-col>
          <v-divider/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-toolbar height="40" color="#009B8B" elevation="0">Vorgeschlagene Maßnahme</v-toolbar>
            <v-card-text> 
              <h4>Für diesen Fehler wird folgende Maßnahme vorgeschlagen:</h4>
              <h2 class="mt-5">{{actionToDo}}</h2>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-toolbar height="40" color="#009B8B" elevation="0">Ursachenbereiche</v-toolbar>
            <v-card-text> 
              <h4>Dieser Fehler besitzt ein primäres und sekundäres Ursachenfeld, in denen die Ursprünge für den Fehler liegen:</h4>
              Primäres Ursachenfeld:
              <h2 class="mt-5">{{primaryCause}}</h2>
              Sekundäres Ursachenfeld:
              <h2 class="mt-5">{{secundaryCause}}</h2>
            </v-card-text>
          </v-card>
        </v-col>        
        <v-col cols="12">
          <v-card>
            <v-toolbar height="40" color="#009B8B" elevation="0">Ausfalltage</v-toolbar>
            <v-card-text> 
              <h4>Ausfalltage:</h4>
              <h2 class="mt-5">{{downtimeInDays}}</h2>
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
  import { faults,workspaces,products, actions,primaryCauses, secundaryCauses} from '@/utils'
  import Fault from '@/api/model/fault';

  @Component
  export default class NewFailure extends Vue {

    enabled = false
    loading = false
    currentFault = this.faultItems[0]
    currentWorkspace = this.workspaceItems[0]
    currentProduct = this.productItems[0]
    currentDispolevel = "ESC GT_1"
    currentArea = "OSM-Planfertigung"
    currentCategory = "Administration"
    description = ""
    actionToDo = ""
    primaryCause = ""
    secundaryCause = ""
    downtimeInDays = 0

    data(){
    return {
        alert: true,
      }
  }

    faultCategories = [
      "Administration",
      "Organisation",
      "Qualität",
      "Technik"
    ]

    areas = [
      "OSM-Planfertigung",
      "OSM-Vorfertigung",
      "OSM-Zylinderfertigung",
      "OSM-Zwsichenprozesse",
      "OSM",
      "SBT",
      "WTC",
      "CS",
      "RR",
      "ILM",
      "EUV",
      "EMU",
      "ESC",
    ]

    dispoLevels = [
      "ESC GT_1",
      "ESC MMP_2",
      "ESC MMP_3",
      "ESC SMMP_2",
      "ESC SMMP_3",
      "ESC SMMP_4",
      "Block GT_1",
      "Block MMP_2",
      "Block MMP_3",
      "GL MMP_4",
      "GL MMP_5",
      "Block SMMP_2",
      "GL SMMP_5",
      "GL SMMP_6",
      "Side Mirror B CNC Dis.1 (1041869)",
      "Side Mirror B FEPO Dis.2 (1054275)",
      "Side Mirror B FEPO Dis.3 (1042663)",
      "Block GT_2",
    ]

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

//        if((prediction?.pCause?.length ?? 0) > 0 && prediction?.pCause) {
//          const primaryCauseResult = String(prediction?.pCause[0])
//          this.primaryCause = parseInt(downtimeResult)
//        }

//        if((prediction?.sCause?.length ?? 0) > 0 && prediction?.sCause) {
//          const secundaryCauseResult = String(prediction?.sCause[0])
//          this.secundaryCause = parseInt(secundaryCauseResult)/        }        

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