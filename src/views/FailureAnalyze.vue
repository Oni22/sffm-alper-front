<template>
  <div>
    <v-container>
    <v-col cols="12">
              In diesem Fenster wird ein Fehler, dessen Spezifikationen unbekannt sind, eingetragen. Hierbei wird ein neuer Problemlösungszyklus, im 
              Sinne des Plan-Do-Check-Act-Zyklus (PDCA-Zyklus), angestoßen. Durch das Erarbeiten der notwendigen Faktoren für die auftretende Störung, 
              wird eine nachhaltige Fertigungsoptimierung bzw. Fehlerbeseitigung für diesen Arbeitsschritt angestrebt. 
            <p>  
              Es wird eine Übersicht für das 
              langfristige Bearbeiten der unbekannten Fehlersituation ermöglicht, indem ein durchgehender Zugriff auf die individuellen Problemlösungszyklen 
              gewährleistet wird. Dazu müssen die eingegebenen Daten über die Schaltfläche gesichert werden, um sie zu einem späteren Zeitpunkt über den Reiter 
              "Aktuelle Problemlösungen" aufrufen zu können. 
            </p>
              Weitere Informationen bezüglich es PDCA-Zyklus und der Funktionsweise der Applikation können aus dem Reiter "Informationen zur App"
              entnommen werden.
    </v-col> 
      <v-divider/>

      <v-stepper non-linear>
        <v-stepper-header>
          <v-stepper-step editable step="1">Plan</v-stepper-step>
            <v-divider></v-divider>
          <v-stepper-step editable step="2">Do</v-stepper-step>
            <v-divider></v-divider>
          <v-stepper-step step="3" editable>Check</v-stepper-step>
            <v-divider></v-divider>
          <v-stepper-step step="4" editable>Act</v-stepper-step>
        </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
                <v-stepper non-linear vertical>
                  <v-stepper-header vertical>
                    <v-stepper-step editable step="a"></v-stepper-step>
                      <v-divider></v-divider>
                    <v-stepper-step editable step="b"></v-stepper-step>
                      <v-divider></v-divider>
                    <v-stepper-step editable step="c"></v-stepper-step>
                      <v-divider></v-divider>
                    <v-stepper-step editable step="d"></v-stepper-step>
                      <v-divider></v-divider>
                    <v-stepper-step editable step="e"></v-stepper-step>
                      <v-divider></v-divider>
                  </v-stepper-header>
                    <v-stepper-items>
                      <v-stepper-content step="a">
                        <v-col cols="12">
                            <v-text-field 
                              label="Beschreibung des Problems" v-model="title"
                              hint="Bitte geben Sie eine kurze Beschreibung des auftretenden Problems an."
                              persistent-hint
                            />
                        </v-col> 
                        <v-col cols="4">
                        FDFDFD
                        </v-col>   
                      </v-stepper-content>

                      <v-stepper-content step="b">
                          <v-combobox
                            v-model="newCauses"
                            chips
                            dense
                            clearable
                            label="Ursachen"
                            hint="Welche Ursachen könnten die Auslöser für das Problem sein?"
                            persistent-hint
                            multiple
                          >
                            <template
                              v-slot:selection="{ attrs, item, select, selected }"
                            >
                              <v-chip
                                v-bind="attrs"
                                :input-value="selected"
                                close
                                @click="select"
                                @click:close="removeCause(item)"
                              >
                                <strong>{{ item }}</strong>
                              </v-chip>
                            </template>
                          </v-combobox>
                      </v-stepper-content>
                      
                      <v-stepper-content step="c">
                              <v-combobox
                                v-model="category"
                                chips
                                dense
                                clearable
                                label="Ursachenbereich"
                                hint="Aus welchen Ursachenbereichen (Mensch, Maschine, Management, Mitwelt, Methode) könnte das Problem auftreten?"
                                persistent-hint
                                multiple
                              >
                                <template
                                  v-slot:selection="{ attrs, item, select, selected }"
                                >
                                  <v-chip
                                    v-bind="attrs"
                                    :input-value="selected"
                                    close
                                    @click="select"
                                    @click:close="removeCategory(item)"
                                  >
                                    <strong>{{ item }}</strong>
                                  </v-chip>
                                </template>
                              </v-combobox>
                      </v-stepper-content>

                      <v-stepper-content step="d">
                        <v-col cols="12">
                          <v-text-field
                            type="number"
                            label="Stillstandzeit (in Tagen)"
                            hint="Bitte geben Sie die geschätzte Stillstandzeit (in Tagen) für die vorliegende Störung an."
                            persistent-hint
                            v-model="downtime"
                          />
                        </v-col>
                        <v-col>
                        abc
                        </v-col>  
                      </v-stepper-content>

                      <v-stepper-content step="e">
                          <v-combobox
                              v-model="ressources"
                              chips
                              dense
                              clearable
                              label="Ressourcen"
                              hint="Welche Ressourcen werden zur Lösung des Problems benötigt?"
                              persistent-hint
                              multiple
                            >
                              <template
                                v-slot:selection="{ attrs, item, select, selected }"
                              >
                                <v-chip
                                  v-bind="attrs"
                                  :input-value="selected"
                                  close
                                  @click="select"
                                  @click:close="removeRessources(item)"
                                >
                                  <strong>{{ item }}</strong>
                                </v-chip>
                              </template>
                          </v-combobox>
                      </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>  
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12">
          <v-toolbar flat height="40px" color="#F9ED95">Festlegung der Sofortmaßnahmen</v-toolbar>
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="10">
                    <v-text-field label="Sofortmaßnahmen angeben (Maßnahme XY / Datum: TT.MM.JJJJ)" v-model="currentShortTimeAction.name" />
                  </v-col>
                  <v-col cols="2">
                    <v-btn @click="addShortTimeAction()" block color="grey"
                      >Hinzufügen</v-btn
                    >
                  </v-col>
                </v-row>
                <v-col>
                  <v-row v-for="cause in shortTimeAction" :key="cause.name">
                    <v-btn icon @click="removeShortTimeAction(cause)" ><v-icon>{{trashIcon}}</v-icon></v-btn>
                    <v-checkbox v-model="cause.checked"  dense :label="cause.name" />
                  </v-row>
                </v-col>
              </v-card-text>
        </v-card>
        <v-card>
          <v-toolbar flat height="40px" color="#F9ED95">Festlegung der Abstellmaßnahmen</v-toolbar>
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="10">
                    <v-text-field label="Abstellmaßnahmen angeben (Maßnahme XY / Datum: TT.MM.JJJJ)" v-model="currentLongTimeAction.name" />
                  </v-col>
                  <v-col cols="2">
                    <v-btn @click="addLongTimeAction()" block color="grey"
                      >Hinzufügen</v-btn
                    >
                  </v-col>
                </v-row>
                <v-col>
                  <v-row v-for="cause in longTimeAction" :key="cause.name">
                    <v-btn icon @click="removeLongTimeAction(cause)" ><v-icon>{{trashIcon}}</v-icon></v-btn>
                    <v-checkbox v-model="cause.checked"  dense :label="cause.name" />
                  </v-row>
                </v-col>
              </v-card-text>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12">
          <v-card>
              <v-toolbar height="50px" color="#5FBD5F" flat>Check</v-toolbar>
              <v-toolbar flat height="40px" color="#92D292">Ergebnisdarstellung</v-toolbar>
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="10">
                    <v-text-field label="Ergebnisse angeben (Ergebnis XY / Datum: TT.MM.JJJJ)" v-model="currentResults.name" />
                  </v-col>
                  <v-col cols="2">
                    <v-btn @click="addResult()" block color="grey"
                      >Hinzufügen</v-btn
                    >
                  </v-col>
                </v-row>
                <v-col>
                  <v-row v-for="cause in results" :key="cause.name">
                    <v-btn icon @click="removeResults(cause)" ><v-icon>{{trashIcon}}</v-icon></v-btn>
                    <v-checkbox v-model="cause.checked"  dense :label="cause.name" />
                  </v-row>
                </v-col>
              </v-card-text>
            </v-card>
            <v-card>
              <v-toolbar flat height="40px" color="#92D292">Spezifikationshinweise</v-toolbar>
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="10">
                    <v-text-field label="Spezifikationen angeben (Spezifikation XY / Datum: TT.MM.JJJJ)" v-model="currentSpecifications.name" />
                  </v-col>
                  <v-col cols="2">
                    <v-btn @click="addSpecification()" block color="grey"
                      >Hinzufügen</v-btn
                    >
                  </v-col>
                </v-row>
                <v-col>
                  <v-row v-for="cause in specifications" :key="cause.name">
                    <v-btn icon @click="removeSpecifications(cause)" ><v-icon>{{trashIcon}}</v-icon></v-btn>
                    <v-checkbox v-model="cause.checked"  dense :label="cause.name" />
                  </v-row>
                </v-col>
              </v-card-text>
            </v-card>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card class="mb-12">
          <v-card>
              <v-toolbar height="50px" color="#4777E1" flat>Act</v-toolbar>
              <v-toolbar flat height="40px" color="#96B1EE">Zielstellungen zur Fehlerbeseitigung</v-toolbar>
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="10">
                    <v-text-field label="Ziele für die Fehlerbeseitigung angeben (Ziel XY / Datum: TT.MM.JJJJ)" v-model="currentGoals.name" />
                  </v-col>
                  <v-col cols="2">
                    <v-btn @click="addGoals()" block color="grey"
                      >Hinzufügen</v-btn
                    >
                  </v-col>
                </v-row>
                <v-col>
                  <v-row v-for="cause in goals" :key="cause.name">
                    <v-btn icon @click="removeGoals(cause)" ><v-icon>{{trashIcon}}</v-icon></v-btn>
                    <v-checkbox v-model="cause.checked"  dense :label="cause.name" />
                  </v-row>
                </v-col>
              </v-card-text>
            </v-card>
            <v-card>
              <v-toolbar flat height="40px" color="#96B1EE">Vorgehen/ Schritte zur Standardisierung</v-toolbar>
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="10">
                    <v-text-field label="Eingeführte Standards angeben (Standards XY / Datum: TT.MM.JJJJ)" v-model="currentStandards.name" />
                  </v-col>
                  <v-col cols="2">
                    <v-btn @click="addStandards()" block color="grey"
                      >Hinzufügen</v-btn
                    >
                  </v-col>
                </v-row>
                <v-col>
                  <v-row v-for="cause in standards" :key="cause.name">
                    <v-btn icon @click="removeStandards(cause)" ><v-icon>{{trashIcon}}</v-icon></v-btn>
                    <v-checkbox v-model="cause.checked"  dense :label="cause.name" />
                  </v-row>
                </v-col>
              </v-card-text>
            </v-card>
        </v-card>

      </v-stepper-content>
    </v-stepper-items>
      </v-stepper>
    </v-container>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mdiCheck,mdiTrashCan } from "@mdi/js";

@Component
export default class NewPDCA extends Vue {
  newCauses: Array<string> = [];
  category: Array<string> = [];
  title = "";
  downtime = "";
  shortTimeAction: Array<any> = [];
  longTimeAction: Array<any> = [];
  ressources: Array<string> = [];
  goals: Array<any> = [];
  results: Array<any> = [];
  specifications: Array<any> = [];
  standards: Array<any> = [];

  currentShortTimeAction : any = {
    name: "",
    checked: false
  };
  currentLongTimeAction : any = {
    name: "",
    checked: false
  };
  currentResults : any = {
    name: "",
    checked: false
  };
  currentSpecifications : any = {
    name: "",
    checked: false
  };
  currentGoals : any = {
    name: "",
    checked: false
  };
  currentStandards : any = {
    name: "",
    checked: false
  };    
  checkIcon = mdiCheck;
  trashIcon = mdiTrashCan

  removeCause(item: string) {
    const index = this.newCauses.indexOf(item);
    this.newCauses.splice(index, 1);
    this.newCauses = [...this.newCauses];
  }

  removeCategory(item: string) {
    const index = this.category.indexOf(item);
    this.category.splice(index, 1);
    this.category = [...this.category];
  }

  removeShortTimeAction(item: string) {
    const index = this.shortTimeAction.indexOf(item);
    this.shortTimeAction.splice(index, 1);
    this.shortTimeAction = [...this.shortTimeAction];
  }

  removeLongTimeAction(item: string) {
    const index = this.longTimeAction.indexOf(item);
    this.longTimeAction.splice(index, 1);
    this.longTimeAction = [...this.longTimeAction];
  }

  removeRessources(item: string) {
    const index = this.ressources.indexOf(item);
    this.ressources.splice(index, 1);
    this.ressources = [...this.ressources];
  }

  removeResults(item: string) {
    const index = this.results.indexOf(item);
    this.results.splice(index, 1);
    this.results = [...this.results];
  }

  removeSpecifications(item: string) {
    const index = this.specifications.indexOf(item);
    this.specifications.splice(index, 1);
    this.specifications = [...this.specifications];
  }

  removeGoals(item: string) {
    const index = this.goals.indexOf(item);
    this.goals.splice(index, 1);
    this.goals = [...this.goals];
  }

  removeStandards(item: string) {
    const index = this.standards.indexOf(item);
    this.standards.splice(index, 1);
    this.standards = [...this.standards];
  }

  addShortTimeAction() {
    if(this.shortTimeAction.some(item => item.name === this.currentShortTimeAction.name)) {
      return
    }
    this.shortTimeAction.push({
      checked: false,
      name: this.currentShortTimeAction.name
    });
    this.currentShortTimeAction.name = ""
  }

   addLongTimeAction() {
    if(this.longTimeAction.some(item => item.name === this.currentLongTimeAction.name)) {
      return
    }
    this.longTimeAction.push({
      checked: false,
      name: this.currentLongTimeAction.name
    });
    this.currentLongTimeAction.name = ""
  }

   addResult() {
    if(this.results.some(item => item.name === this.currentResults.name)) {
      return
    }
    this.results.push({
      checked: false,
      name: this.currentResults.name
    });
    this.currentResults.name = ""
  }

   addSpecification() {
    if(this.specifications.some(item => item.name === this.currentSpecifications.name)) {
      return
    }
    this.specifications.push({
      checked: false,
      name: this.currentSpecifications.name
    });
    this.currentSpecifications.name = ""
  }

   addGoals() {
    if(this.goals.some(item => item.name === this.currentGoals.name)) {
      return
    }
    this.goals.push({
      checked: false,
      name: this.currentGoals.name
    });
    this.currentGoals.name = ""
  }

   addStandards() {
    if(this.standards.some(item => item.name === this.currentStandards.name)) {
      return
    }
    this.standards.push({
      checked: false,
      name: this.currentStandards.name
    });
    this.currentStandards.name = ""
  }

}
</script>

<style scoped>
</style>


