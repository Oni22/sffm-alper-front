<template>
  <div>
    <v-container>
      <h2>Problemlösungsprozess für neue, unbekannte Fehler</h2>
        <p class="font-weight-light">
              In diesem Fenster wird ein Fehler, dessen Spezifikationen unbekannt sind, eingetragen. 
              Hierbei wird ein neuer Problemlösungszyklus, im Sinne des Plan-Do-Check-Act-Zyklus (PDCA-Zyklus), angestoßen.
        </p>    
        <v-alert border="left" colored-border type="info" elevation="2"> 
          <small>
              Bitte tragen Sie die notwendigen Informationen für die Problemlösung ein, indem Sie die Schritte des PDCA-Zyklus bearbeiten.
              <strong>Speichern Sie Ihre Daten mit der Schaltfläche jederzeit ab, um Sie abzusenden.</strong> 
              Nach der Sicherung der Ergebnisse können Sie die Seite verlassen und unter dem Reiter "Aktuelle Problemlösungen" 
              den Eintrag aufrufen.
              Sie können zwischen den Optionen hin- und her wechseln, um nachträgliche Veränderungen vorzunehmen.
          </small>
        </v-alert>
    <v-col cols="12">
      <v-row align="center" justify="space-around">
        <v-btn color="blue" outlined>
          <v-icon left>mdi-arrow-up-bold-box-outline</v-icon>
            Ergebnisse sichern
        </v-btn>
      </v-row>
      <p></p>
    </v-col>
    
  <v-stepper non-linear>
        <v-stepper-header>
          <v-stepper-step editable step="1" color="green"><h1>Plan</h1></v-stepper-step>
            <v-divider></v-divider>
          <v-stepper-step editable step="2"><h1>Do</h1></v-stepper-step>
            <v-divider></v-divider>
          <v-stepper-step editable step="3"><h1>Check</h1></v-stepper-step>
            <v-divider></v-divider>
          <v-stepper-step editable step="4"><h1>Act</h1></v-stepper-step>
        </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-col cols="12">
          In der ersten Phase des Problemlösungsprozesses wird die Planung zur Beseitigung des Problems durchgeführt. Dabei werden zunächst die 
          problembeschreibenden Daten lokalisiert und schriftlich vermerkt. Hierbei werden die möglichen Ursachen und Ursachenbereiche, 
          die geschätzte Stillstandzeit und die notwendigen Ressourcen zur Beseitigung festgelegt. Mithilfe dieser Analyse des Ist-Zustandes 
          sowie der Problemfestlegung lässt sich im Nachgang ein Ziel bestimmen. 
          <h3>Bitte führen sie im Folgenden die Schritte durch, um das Problem aufzunehmen und den Problemlösungszyklus anzustoßen.</h3>
          
        </v-col>
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
                        <v-col cols="12">
                            <v-combobox
                              v-model="titleTags"
                              chips
                              dense
                              clearable
                              label="Tags"
                              hint="Geben Sie mögliche Stichwörter (Tags) zur Beschreibung des Problems an (optional)."
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
                                  @click:close="removeTag(item)"
                                >
                                  <strong>{{ item }}</strong>
                                </v-chip>
                              </template>
                            </v-combobox>                          
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
       <v-col cols="6">
          In der ersten Phase des Problemlösungsprozesses wird die Planung zur Beseitigung des Problems durchgeführt. Dabei werden zunächst die 
          problembeschreibenden Daten lokalisiert und schriftlich vermerkt. Hierbei werden die möglichen Ursachen und Ursachenbereiche, 
          die geschätzte Stillstandzeit und die notwendigen Ressourcen zur Beseitigung festgelegt. Mithilfe dieser Analyse des Ist-Zustandes 
          sowie der Problemfestlegung lässt sich im Nachgang ein Ziel bestimmen. 
          <small>
            <h3>Bitte führen sie im Folgenden die Schritte durch, um das Problem aufzunehmen und den Problemlösungszyklus anzustoßen.
            Sie können zwischen den Optionen hin- und her wechseln, um nachträgliche Veränderungen vorzunehmen.</h3>
          </small>
        </v-col>
                <v-stepper non-linear vertical>
                  <v-stepper-header vertical>
                    <v-stepper-step editable step="a"></v-stepper-step>
                      <v-divider></v-divider>
                    <v-stepper-step editable step="b"></v-stepper-step>
                      <v-divider></v-divider>
                  </v-stepper-header>
                    <v-stepper-items>
                      <v-stepper-content step="a">
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
                      </v-stepper-content>

                      <v-stepper-content step="b">
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
                    </v-stepper-items>
                </v-stepper>   
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-col cols="12">
          In der ersten Phase des Problemlösungsprozesses wird die Planung zur Beseitigung des Problems durchgeführt. Dabei werden zunächst die 
          problembeschreibenden Daten lokalisiert und schriftlich vermerkt. Hierbei werden die möglichen Ursachen und Ursachenbereiche, 
          die geschätzte Stillstandzeit und die notwendigen Ressourcen zur Beseitigung festgelegt. Mithilfe dieser Analyse des Ist-Zustandes 
          sowie der Problemfestlegung lässt sich im Nachgang ein Ziel bestimmen. 
          <small>
            <h3>Bitte führen sie im Folgenden die Schritte durch, um das Problem aufzunehmen und den Problemlösungszyklus anzustoßen.
            Sie können zwischen den Optionen hin- und her wechseln, um nachträgliche Veränderungen vorzunehmen.</h3>
          </small>
        </v-col>
          <v-stepper non-linear vertical>
                  <v-stepper-header vertical>
                    <v-stepper-step editable step="a"></v-stepper-step>
                      <v-divider></v-divider>
                    <v-stepper-step editable step="b"></v-stepper-step>
                      <v-divider></v-divider>
                  </v-stepper-header>
                    <v-stepper-items>
                      <v-stepper-content step="a">
                          <v-card>
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
                       </v-stepper-content>

                       <v-stepper-content step="b">
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
                      </v-stepper-content>
                    </v-stepper-items> 
          </v-stepper>          
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-col cols="12">
          In der ersten Phase des Problemlösungsprozesses wird die Planung zur Beseitigung des Problems durchgeführt. Dabei werden zunächst die 
          problembeschreibenden Daten lokalisiert und schriftlich vermerkt. Hierbei werden die möglichen Ursachen und Ursachenbereiche, 
          die geschätzte Stillstandzeit und die notwendigen Ressourcen zur Beseitigung festgelegt. Mithilfe dieser Analyse des Ist-Zustandes 
          sowie der Problemfestlegung lässt sich im Nachgang ein Ziel bestimmen. 
          <small>
            <h3>Bitte führen sie im Folgenden die Schritte durch, um das Problem aufzunehmen und den Problemlösungszyklus anzustoßen.
            Sie können zwischen den Optionen hin- und her wechseln, um nachträgliche Veränderungen vorzunehmen.</h3>
          </small>
        </v-col>
          <v-stepper non-linear vertical>
                  <v-stepper-header vertical>
                    <v-stepper-step editable step="a"></v-stepper-step>
                      <v-divider></v-divider>
                    <v-stepper-step editable step="b"></v-stepper-step>
                      <v-divider></v-divider>
                  </v-stepper-header>
                    <v-stepper-items>
                      <v-stepper-content step="a">
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
                          </v-stepper-content>
                    </v-stepper-items> 
          </v-stepper>
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
  titleTags: Array<string> = [];
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

  removeTag(item: string) {
    const index = this.titleTags.indexOf(item);
    this.titleTags.splice(index, 1);
    this.titleTags = [...this.titleTags];
  }

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


