<template>
  <div>
    <v-container>
      <h2>Problemlösungsprozess für neue, unbekannte Fehler</h2>
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
                den Eintrag aufrufen. Sie können zwischen den Optionen hin- und her wechseln, um nachträgliche Veränderungen vorzunehmen.
              </div>
              <div>
                <strong>Um die Bearbeitung oder die Informationen einer Phase aufzurufen, klicken Sie auf die jeweilige (horizontal liegende) Phase. 
                Innerhalb der Phasen können Sie die (vertikal liegende) Option auswählen und die Einträge bearbeiten.</strong>
              </div>
          </small>
          </p>
        </v-alert>
        <p></p>

  <v-stepper non-linear v-model="currentStepperIndex">
        <v-stepper-header>
          <v-stepper-step editable step="1" color="#90CAF9"><h1>Plan</h1></v-stepper-step>
            <v-divider></v-divider>
          <v-stepper-step editable step="2" color="#42A5F5"><h1>Do</h1></v-stepper-step>
            <v-divider></v-divider>
          <v-stepper-step editable step="3" color="#1976D2"><h1>Check</h1></v-stepper-step>
            <v-divider></v-divider>
          <v-stepper-step editable step="4" color="#0D47A1"><h1>Act</h1></v-stepper-step>
        </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-toolbar height="60px" color="#E0E0E0">
          In der ersten Phase des Problemlösungsprozesses wird die Planung zur Beseitigung des Problems durchgeführt. 
          Dabei werden zunächst die problembeschreibenden Daten lokalisiert und schriftlich vermerkt. 
        </v-toolbar>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1"  color="#90CAF9">
            Beschreibung des Problems
              <small>Bitte geben Sie eine detaillierte Beschreibung des auftretenden Problems an.</small>
          </v-stepper-step>
            <v-stepper-content step="1">
              <v-card class="mb-12">
                    <v-col cols="12">
                      <v-text-field 
                        label="Wo ist Was und Wie, bei Welchem Produkt, passiert?" 
                        v-model="title"
                        hint="Beispiel: In Arbeitsgang 270 (Auftrags-Nummer: 2009032) ist beim Abstellen der Poliermaschine (Maschinen-Nummer: 03) 
                        die Kante des Produktes ESC GT_2 (Produktnummer: 234) abgebrochen."
                        persistent-hint
                      />
                    </v-col> 
                    <v-col cols="12">
                        <v-combobox
                          v-model="titleTags"
                          chips
                          dense
                          clearable
                          label="Tragen Sie ein Stichwort ein und bestätigen Sie mit ENTER."
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
              </v-card>
              <v-btn color="#339966" outlined @click="e6 = 2">
                weiter
              </v-btn>
            </v-stepper-content>
          <v-stepper-step :complete="e6 > 2" step="2"  color="#90CAF9">
              Ursachen
                <small>Bitten geben Sie die Ursachen für dieses Problem an.</small>
          </v-stepper-step>
            <v-stepper-content step="2">
              <v-card class="mb-12" >
              <v-card-text>
                      <v-row>
                        <v-col cols="5">
                          <v-img
                            max-height="450"
                            max-width="500"
                            src="https://www.consulting-life.de/wp-content/uploads/2017/01/Ishikawa-Diagramm-Struktur-856x400.jpg"
                          ></v-img>
                        </v-col>  
                        <v-col col="7">
                          <p class="font-weight-light">
                            In diesem Abschnitt werden die Fehlerursachen identifiziert und nachgewiesen.
                            Um nachhaltig sicherzustellen, dass ähnlich gelagerte Fehler nicht wiederholt auftreten, müssen die diversen
                            Ebenen des Unternehmens betrachtet werden, aus denen der Fehler entstehen kann.
                            Zur Orientierung muss das Auftreten, die Entdeckung und das Vermeiden betrachtet werden. Es können verschiedene 
                            Werkzeuge angewendet werden, mit denen die Ursache ermittelt werden kann. 
                            Ein Beispiel hierzu ist das Ishikawa-Diagramm, welcher zur tiefgreifenden Analyse von Fehlerursprüngen dient. 
                          </p>
                          <p class="font-weight-light">
                            Für weiterführende Informationen zum Ishikawa-Diagramm besuchen Sie:
                          </p>
                          <p>   
                            https://www.quality.de/lexikon/ishikawa-diagramm/ 
                          </p>
                        </v-col>
                      </v-row>
                      
                        <v-col col="12">
                          <v-combobox
                            v-model="category"
                            chips
                            dense
                            clearable
                            label="Tragen Sie eine Ursache ein und bestätigen Sie mit ENTER"
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
                        </v-col>
                        <v-col col="12">
                          <v-combobox
                              v-model="newCauses"
                              chips
                              dense
                              clearable
                              label="Tragen Sie eine Ursache ein und bestätigen Sie mit ENTER."
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
                          </v-col>
                </v-card-text>
              </v-card>
              <v-btn color="#339966" outlined @click="e6 = 3">
                weiter
              </v-btn>
              <v-btn color="error" outlined @click="e6 = 1">
                zurück
              </v-btn>
            </v-stepper-content>  
          

          <v-stepper-step :complete="e6 > 3" step="3"  color="#90CAF9">
            Stillstandzeit
              <small>Bitte geben Sie die geschätzte Stillstandzeit (in Tagen) für die vorliegende Störung an.</small>
          </v-stepper-step>
            <v-stepper-content step="3">
              <v-card class="mb-12" >
                <v-card-text>
                        <v-col cols="12">
                            <p class="font-weight-light">
                                
                                In diesem Bereich ist eine geschätzte bzw. erwartete Stillstandzeit des Arbeitsganges, durch das Problem, 
                                zu erfassen. Stillstandszeiten entstehen, wenn die Nutzungszeit eines Betriebsmittels unterbrochen wird. 
                                Entsteht bei einem Arbeitsgang eine Stillstandszeit, wirkt sich dies negativ auf die Produktivität aus. 
                                Der Zusammenhang zwischen der Stillstandzeit und der Produktivät kann aus der Formel entnommen werden.
                                
                            </p>
                                Formel zur Produktionslaufzeit:
                                <p class="font-weight-black">
                                    Produktionslaufzeit = gesamte Produktionszeit - Stillstandzeit
                                </p>
                            <p class="font-weight-light">    
                                Um eine erfahrungsbasierte Schätzung zu ermöglichen, 
                                kann das Fehlerprofil von diversen Arbeitsgängen und Fehlergründen erfasst werden.
                                Die aktuellen Fehler können auf der folgenden Seite aufgerufen werden. 
                            </p>
                            <a href="#" @click="openCurrentFaults()">LINK: Aktuelle Fehler</a>
                        </v-col>  
                        <v-col cols="12">
                          <v-text-field
                            type="number"
                            label="Tragen Sie eine Stillstandzeit ein."
                            hint="Bitte geben Sie die geschätzte Stillstandzeit (in Tagen) für die vorliegende Störung an."
                            persistent-hint
                            v-model="downtime"
                          />
                        </v-col>
                </v-card-text>
              </v-card>
              <v-btn color="#339966" outlined @click="e6 = 4">
                weiter
              </v-btn>
              <v-btn color="error" outlined @click="e6 = 2">
                zurück
              </v-btn>
            </v-stepper-content>

          <v-stepper-step :complete="e6 > 4" step="4"  color="#90CAF9">
            Ressourcen
              <small>Bitte geben Sie die notwendigen Ressourcen, zur Lösung des Problem, an.</small>
          </v-stepper-step>
            <v-stepper-content step="4">
              <v-card class="mb-12" >
                <v-card-text>
                    <v-row>
                        <v-col cols="5">
                          <v-img
                            max-height="350"
                            max-width="350"
                            src="https://www.projektmagazin.de/sites/default/files/ressourcenarten.jpg"
                          ></v-img>
                        </v-col>  
                        <v-col col="7">
                          <p class="font-weight-light">
                             In diesem Bereich sind die Ressourcen anzugeben, die für das Finden der Lösung und Beseitigen des Problems
                                benötigt werden. Als Ressourcen werden dabei Bestände und Mittel bezeichnet, die eine gezielten Zweck, zur
                                Erstellung und Bereitstellung von Produkten und Dienstleistungen, erfüllen. 
                                Zu den Ressourcen zählen immaterielle und materielle Güter wie Betriebsmittel, Energie, Rohstoffe und Personal. 
                            
                          </p>
                          <p class="font-weight-light">
                            Für weiterführende Informationen besuchen Sie:
                          </p>
                          <p>   
                            https://wirtschaftslexikon.gabler.de/definition/ressourcen-122425 
                          </p>
                        </v-col>
                    </v-row>
                      
                    <v-combobox
                        v-model="ressources"
                        chips
                        dense
                        clearable
                        label="Tragen Sie eine Ursache ein und bestätigen Sie mit ENTER."
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
                </v-card-text>
              </v-card>
              <v-btn color="#339966" outlined @click="setStepperIndex(2)">
                Weiter zu DO
              </v-btn>
              <v-btn color="error" outlined @click="e6 = 3">
                zurück
              </v-btn>
            </v-stepper-content>
        </v-stepper>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-toolbar height="60px" color="#E0E0E0">
          In der zweiten Phase des Problemlösungsprozesses werden geplante Maßnahmen, ausgehend von der Planung, umgesetzt. 
          Die Maßnahmen werden in dieser Phase eingetragen. Bei erfolgreicher Umsetzung wird das Kontrollkästchen ausgefüllt, 
          sodass eine dauerhafte Verfolgung der Maßnahmen stattfindet. 
        </v-toolbar>
          <v-stepper v-model="e7" vertical>
          <v-stepper-step :complete="e7 > 1" step="1"  color="#42A5F5">
            Sofortmaßnahmen
              <small>Bitten tragen Sie die Sofortmaßnahmen für dieses Problem ein.</small>
          </v-stepper-step>
            <v-stepper-content step="1">
              <v-card class="mb-12">
                <v-row>
                        <v-col cols="12">
                          <p class="font-weight-light">
                             
                                In diesem Bereich werden die Sofortmaßnahmen, zur Umsetzung des identifizierten und erarbeiteten Fehlerzustands, 
                                festgelegt. Die Sofortmaßnahmen dienen zur kurzfristigen Schadensbegrenzung und sollen die weitere 
                                Ausbreitung des Problems verhindern, bis eine dauerhafte Lösung gefunden ist. Zur Orientierung sollten
                                die folgenden Fragen beantwortet werden, um zu den unmittelbar festzulegenden Maßnahmen zu gelangen:   
                            
                          </p>
                          <p>- Wie hoch ist das Risiko des Fehlers?</p>
                          <p>- Welche fehlerhaften Teile müssen in welcher Art und Weise aus dem gesamten Umlauf entfernt werden?</p>
                          <p>- Mit welcher Maßnahme gewinnen wir Zeit für eine tiefgreifende Analyse des Problems?</p>
                          
                        </v-col>
                    </v-row>
                        <v-row no-gutters>
                          <v-col cols="10">
                            <v-text-field 
                            label="Sofortmaßnahmen angeben (Maßnahme XY / Datum: TT.MM.JJJJ)" v-model="currentShortTimeAction.name" />
                          </v-col>
                          <v-col cols="2">
                            <v-btn @click="addShortTimeAction()" block color="grey">
                              Hinzufügen
                            </v-btn>
                          </v-col>
                          <v-col>
                            <v-row v-for="cause in shortTimeAction" :key="cause.name">
                              <v-btn icon @click="removeShortTimeAction(cause)" ><v-icon>{{trashIcon}}</v-icon></v-btn>
                              <v-checkbox v-model="cause.checked"  dense :label="cause.name" />
                            </v-row>
                          </v-col>
                        </v-row>
              </v-card>
              <v-btn color="#339966" outlined @click="e7 = 2">
                weiter
              </v-btn>
            </v-stepper-content>
          <v-stepper-step :complete="e7 > 2" step="2"  color="#42A5F5">
              Abstellmaßnahmen
                <small>Bitten tragen Sie die Abstellmaßnahmen für dieses Problem ein.</small>
          </v-stepper-step>
            <v-stepper-content step="2">
              <v-card class="mb-12" >
              <v-card-text>
                      <v-row no-gutters>
                        <v-col cols="10">
                          <v-text-field label="Abstellmaßnahmen angeben (Maßnahme XY / Datum: TT.MM.JJJJ)" v-model="currentLongTimeAction.name" />
                        </v-col>
                        <v-col cols="2">
                          <v-btn @click="addLongTimeAction()" block color="grey">
                            Hinzufügen
                          </v-btn>
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
              <v-btn color="error" outlined @click="e7 = 1">
                zurück
              </v-btn>
            </v-stepper-content>
          </v-stepper>
      </v-stepper-content> 

      <v-stepper-content step="3">
        <v-toolbar height="60px" color="#E0E0E0">
          In der dritten Phase des Problemlösungsprozesses!!!!!. 
        </v-toolbar>
          <v-stepper v-model="e8" vertical>
          <v-stepper-step :complete="e8 > 1" step="1"  color="#1976D2">
            Ergebnisse
              <small>Ergebnisse</small>
          </v-stepper-step>
            <v-stepper-content step="1">
              <v-card class="mb-12">
                      <v-row no-gutters>
                        <v-col cols="10">
                          <v-text-field label="Ergebnisse angeben (Ergebnis XY / Datum: TT.MM.JJJJ)" v-model="currentResults.name" />
                        </v-col>
                        <v-col cols="2">
                          <v-btn @click="addResult()" block color="grey">
                            Hinzufügen
                            </v-btn>
                        </v-col>
                      </v-row>
                      <v-col>
                        <v-row v-for="cause in results" :key="cause.name">
                          <v-btn icon @click="removeResults(cause)" ><v-icon>{{trashIcon}}</v-icon></v-btn>
                              <v-checkbox v-model="cause.checked"  dense :label="cause.name" />
                        </v-row>
                </v-col>
              </v-card>
              <v-btn color="#339966" outlined @click="e8 = 2">
                weiter
              </v-btn>
            </v-stepper-content>
          <v-stepper-step :complete="e8 > 1" step="2"  color="#1976D2">
              Spezifikationshinweise
                <small>Spezifikationshinweise.</small>
          </v-stepper-step>
            <v-stepper-content step="2">
              <v-card class="mb-12" >
                      <v-row no-gutters>
                        <v-col cols="10">
                          <v-text-field 
                          label="Spezifikationen angeben (Spezifikation XY / Datum: TT.MM.JJJJ)" v-model="currentSpecifications.name" />
                            </v-col>
                              <v-col cols="2">
                                <v-btn @click="addSpecification()" block color="grey">
                                  Hinzufügen
                                </v-btn>
                              </v-col>
                      </v-row>
                        <v-col>
                          <v-row v-for="cause in specifications" :key="cause.name">
                            <v-btn icon @click="removeSpecifications(cause)" ><v-icon>{{trashIcon}}</v-icon></v-btn>
                              <v-checkbox v-model="cause.checked"  dense :label="cause.name" />
                          </v-row>
                        </v-col>
              </v-card>
              <v-btn color="error" outlined @click="e8 = 1">
                zurück
              </v-btn>
            </v-stepper-content>
          </v-stepper>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-toolbar height="60px" color="#E0E0E0">
          In der vierten Phase des Problemlösungsprozesses 
        </v-toolbar>
          <v-stepper v-model="e9" vertical>
          <v-stepper-step :complete="e9 > 1" step="1"  color="#0D47A1">
            Ziele
              <small>Ziele</small>
          </v-stepper-step>
            <v-stepper-content step="1">
              <v-card class="mb-12">
                      <v-row no-gutters>
                        <v-col cols="10">
                          <v-text-field label="Ziele für die Fehlerbeseitigung angeben (Ziel XY / Datum: TT.MM.JJJJ)" v-model="currentGoals.name" />
                        </v-col>
                        <v-col cols="2">
                          <v-btn @click="addGoals()" block color="grey">
                            Hinzufügen
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-col>
                        <v-row v-for="cause in goals" :key="cause.name">
                          <v-btn icon @click="removeGoals(cause)" ><v-icon>{{trashIcon}}</v-icon></v-btn>
                          <v-checkbox v-model="cause.checked"  dense :label="cause.name" />
                        </v-row>
                </v-col>
              </v-card>
              <v-btn color="#339966" outlined @click="e9 = 2">
                weiter
              </v-btn>
            </v-stepper-content>
          <v-stepper-step :complete="e9 > 1" step="2"  color="#0D47A1">
              Standards
                <small>Standards.</small>
          </v-stepper-step>
            <v-stepper-content step="2">
              <v-card class="mb-12" >
                      <v-row no-gutters>
                        <v-col cols="10">
                          <v-text-field label="Eingeführte Standards angeben (Standards XY / Datum: TT.MM.JJJJ)" v-model="currentStandards.name" />
                            </v-col>
                            <v-col cols="2">
                              <v-btn @click="addStandards()" block color="grey">
                                Hinzufügen
                              </v-btn>
                            </v-col>
                      </v-row>
                      <v-col>
                        <v-row v-for="cause in standards" :key="cause.name">
                          <v-btn icon @click="removeStandards(cause)" ><v-icon>{{trashIcon}}</v-icon></v-btn>
                            <v-checkbox v-model="cause.checked"  dense :label="cause.name" />
                        </v-row>
                      </v-col>
              </v-card>
              <v-btn color="error" outlined @click="e9 = 1">
                zurück
              </v-btn>
            </v-stepper-content>
          </v-stepper>
      </v-stepper-content> 
      </v-stepper-items>
      </v-stepper>
      <p></p>
      <v-col cols="12">
      <v-row align="center" justify="space-around">
        <v-btn color="#2E7D32" dark>
          <v-icon left>mdi-arrow-up-bold-box-outline</v-icon>
            Hier klicken, um Ihre Einträge zu sichern
        </v-btn>
      </v-row>
      
    </v-col>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mdiCheck,mdiTrashCan } from "@mdi/js";
import { Routes } from "@/router/utils";

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
  currentStepperIndex = 1

  data(){
    return {
        e6: 1,
        e7: 1,
        e8: 1,
        e9: 1,
        alert: true,
      }
  }

  setStepperIndex(index: number) {
    this.currentStepperIndex = index
  }

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

  openCurrentFaults() {
    this.$router.push(Routes.CURRENT_FAULT)
  }

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


