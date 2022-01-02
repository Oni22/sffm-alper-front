<template>
  <div>
    <v-container>
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
        <v-col col="12" >
            <p>
              In der Plan-Phase des Problemlösungsprozesses wird die Planung zur Beseitigung des Problems durchgeführt. 
              Dabei werden zunächst die problembeschreibenden Daten lokalisiert und schriftlich vermerkt. 
            </p>
        </v-col>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1"  color="#90CAF9">
            Beschreibung des Problems <small>Bitte geben Sie eine detaillierte Beschreibung des auftretenden Problems an.</small>
          </v-stepper-step>
            <v-stepper-content step="1">
              <v-card class="mb-12">
                    <v-col cols="12">
                      <v-text-field 
                        label="Wo ist Was und Wie bei Welchem Produkt passiert?" 
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
              Ursachen <small>Bitten geben Sie die Ursachen für dieses Problem an.</small>
          </v-stepper-step>
            <v-stepper-content step="2">
              <v-card class="mb-12" >
              <v-card-text>
                      <v-row>
                        <v-col cols="12">
                          <p class="font-weight-light">
                            In diesem Abschnitt werden die Fehlerursachen identifiziert und nachgewiesen.
                            Zur Orientierung muss das Auftreten, die Entdeckung und das Vermeiden betrachtet werden. Es können verschiedene 
                            Werkzeuge angewendet werden, mit denen die Ursache ermittelt werden kann.
                            Ein Beispiel hierzu ist das Ishikawa-Diagramm, welcher zur tiefgreifenden Analyse von Fehlerursprüngen dient.
                            <a href="https://www.quality.de/lexikon/ishikawa-diagramm/" target="_blank">
                                <p class="font-weight-light">
                                    Für weiterführende Informationen zum Ishikawa-Diagramm hier klicken
                                </p>
                            </a>
                            <v-img
                                    max-height="500"
                                    max-width="500"
                                    src="https://www.consulting-life.de/wp-content/uploads/2017/01/Ishikawa-Diagramm-Struktur-856x400.jpg"
                                />  
                            <p class="font-weight-light">
                                Eine weitere Möglichkeit zur tiefgründigen Analyse von Fehlerursachen ist die 5-Why-Methode (5W-Methode).
                                Hier werden, durch mehrere Nachfrageebenen, die Pfade für die hauptsächliche Ursache des Problems ermittelt. 
                                Dabei wird "so lange nachgehakt", bis eine eindeutige Erklärung für die Fehlersituation vorliegt.
                            <a href="https://www.quality.de/lexikon/5xwarum/#5x_Warum_Definition" target="_blank">
                                <p class="font-weight-light">
                                Für weiterführende Informationen zur 5W-Methode hier klicken
                                </p>
                                </a>
                                <v-img
                                max-height="500"
                                max-width="500"
                                src="https://www.quality.de/wp-content/uploads/2019/06/5xwarum-1024x412.png.webp"
                                /> 
                            </p>
                        </v-col>
                      </v-row>
                        <v-col/>
                        <v-col col="12">
                          <v-text-field
                            v-model="category"
                            chips
                            dense
                            clearable
                            label="Tragen Sie einen Ursachenbereich ein"
                            hint="Aus welchen Ursachenbereichen (Mensch, Maschine, Management, Mitwelt, Methode) könnte das Problem auftreten?"
                            persistent-hint
                            multiple
                          />
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
                                Der Zusammenhang zwischen der Stillstandzeit und der Produktivät kann aus der folgenden Gleichung entnommen werden.  
                            </p>
                                Formel zur Produktionslaufzeit:
                                <p class="font-weight-black">
                                    Produktionslaufzeit = gesamte Produktionszeit - Stillstandzeit
                                </p>
                            <p class="font-weight-light">    
                                Um eine erfahrungsbasierte Schätzung zu ermöglichen, 
                                kann das Fehlerprofil von diversen Arbeitsgängen und Fehlergründen erfasst werden.
                                Die aktuellen Fehler können auf der untenstehenden Seite aufgerufen werden. 
                                <strong>ACHTUNG: Wenn Sie 
                                die Seite aufrufen, gehen alle nicht gesicherten Einträge verloren!
                                </strong>
                            <p>
                              <a href="#" @click="openCurrentFaults()">Aktuelle Fehler</a>
                            </p>
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
            Ressourcen<small>Bitte geben Sie die notwendigen Ressourcen, zur Lösung des Problem, an.</small>
          </v-stepper-step>
            <v-stepper-content step="4">
              <v-card class="mb-12" >
                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                          <p class="font-weight-light">
                             In diesem Bereich sind die Ressourcen anzugeben, die für das Finden der Lösung und Beseitigen des Problems
                                benötigt werden. Als Ressourcen werden dabei Bestände und Mittel bezeichnet, die einen gezielten Zweck zur
                                Erstellung und Bereitstellung von Produkten und Dienstleistungen erfüllen. 
                                Zu den Ressourcen zählen immaterielle und materielle Güter wie Betriebsmittel, Energie, Rohstoffe und Personal. 
                            <a href="https://wirtschaftslexikon.gabler.de/definition/ressourcen-122425" target="_blank">
                                <p class="font-weight-light">
                                    Für weiterführende Informationen zur Ressourcenerfassung hier klicken
                                </p>
                            </a>
                            <v-img
                                max-height="500"
                                max-width="500"
                                src="https://www.projektmagazin.de/sites/default/files/ressourcenarten.jpg"
                              />
                          </p>
                        </v-col>  
                    </v-row>
                    <v-col/>  
                    <v-combobox
                        v-model="ressources"
                        chips
                        dense
                        clearable
                        label="Tragen Sie eine Ressource ein und bestätigen Sie mit ENTER."
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
        <v-col col="12">
          <p>
            In der Do-Phase des Problemlösungsprozesses werden geplante Maßnahmen, ausgehend von der Planung, umgesetzt. 
            Die Maßnahmen werden in dieser Phase eingetragen. Bei erfolgreicher Umsetzung wird das Kontrollkästchen ausgefüllt, 
            sodass eine dauerhafte Verfolgung der Maßnahmen stattfindet. 
          </p>
        </v-col>
          <v-stepper v-model="e7" vertical>
          <v-stepper-step :complete="e7 > 1" step="1"  color="#42A5F5">
            Sofortmaßnahmen<small>Bitten tragen Sie die Sofortmaßnahmen für dieses Problem ein.</small>
          </v-stepper-step>
            <v-stepper-content step="1">
              <v-card class="mb-12">
                <v-card-text>
                        <v-row>
                          <v-col cols="5">
                            <p class="font-weight-light">
                                  In diesem Bereich werden die Sofortmaßnahmen, zur Umsetzung des identifizierten und erarbeiteten Fehlerzustands, 
                                  festgelegt. Die Sofortmaßnahmen dienen zur kurzfristigen Schadensbegrenzung und sollen die weitere 
                                  Ausbreitung des Problems verhindern, bis eine dauerhafte Lösung gefunden ist. Zur Orientierung sollten
                                  die folgenden Fragen beantwortet werden, um zu den unmittelbar festzulegenden Maßnahmen zu gelangen:   
                            </p>
                          </v-col>
                          <v-col cols="7">
                              <v-card color="#90CAF9" outlined>
                                <v-card-text class="font-weight-medium  text-left">
                                  <p>- Wie hoch ist das Risiko des Fehlers?
                                  <p>- Welche fehlerhaften Teile müssen in welcher Art und Weise aus dem gesamten Umlauf entfernt werden?
                                  <p>- Mit welcher Maßnahme gewinnen wir Zeit für eine tiefgreifende Analyse des Problems?
                                  <p>- Welche Maßnahmen sind sofort wirksam (reaktive Problembeseitigung)?</p>
                                </v-card-text>
                              </v-card>
                          </v-col>
                        </v-row>
                        <v-col>
                        </v-col>
                      <v-row no-gutters>
                        <v-col cols="2">
                          <v-btn @click="addShortTimeAction()" block color="#4DB6AC">
                            Hinzufügen
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <v-text-field 
                          label="Sofortmaßnahme (Maßnahme XY / Datum: TT.MM.JJJJ) eingeben und HINZUFÜGEN klicken, um einzufügen." 
                          v-model="currentShortTimeAction.name" 
                          hint="Sie können Maßnahmen eintragen, abhaken und entfernen."
                          persistent-hint
                        />
                        </v-col>
                        <v-col>
                          <v-row v-for="cause in shortTimeAction" :key="cause.name">
                            <v-btn icon @click="removeShortTimeAction(cause)" ><v-icon>{{trashIcon}}</v-icon></v-btn>
                            <v-checkbox v-model="cause.checked"  dense :label="cause.name" />
                          </v-row>
                        </v-col>
                      </v-row>
                </v-card-text>
              </v-card>
              <v-btn color="#339966" outlined @click="e7 = 2">
                weiter
              </v-btn>
              <v-btn color="error" outlined @click="setStepperIndex(1)">
                zurück zu PLAN
              </v-btn>
            </v-stepper-content>
          <v-stepper-step :complete="e7 > 2" step="2"  color="#42A5F5">
              Abstellmaßnahmen
                <small>Bitten tragen Sie die Abstellmaßnahmen für dieses Problem ein.</small>
          </v-stepper-step>
            <v-stepper-content step="2">
              <v-card class="mb-12" >
              <v-card-text>
                      <v-row>
                        <v-col cols="5">
                            <p class="font-weight-light">
                              Zur dauerhaften und nachhaltigen Abstellung bzw. Minderung der Fehlerzustände, sind die erkannten Ursachen 
                              zu beseitigen. Dafür werden Maßnahmen erfasst, welche den Hauptursachen des Fehlerzustands entgegenwirken.
                              Die optimale(n) Maßnahme(n) wird(werden) ausgewählt, um eine effiziente und effektive Problemlösung zu gewährleisten.
                              Gleichzeitig soll, mit dem Festlegen der Maßnahmen, eine unerwünschte Nebenwirkung vermieden werden.
                              Zur Orientierung sollten die folgenden Fragen beantwortet werden, um zu den unmittelbar festzulegenden 
                              Maßnahmen zu gelangen:   
                            </p>
                          </v-col>
                          <v-col cols="7">
                              <v-card color="#90CAF9" outlined>
                                <v-card-text class="font-weight-medium  text-left">
                                  <p>- Wie wirkt die Maßnahme den identifizierten Fehlerursachen entgegen?</p>
                                  <p>- Welche Fehler durch die Maßnahme mittel- und langfristig vermindert / beseitigt?</p>
                                  <p>- Wie wird die Fertigung mit der Maßnahme optimiert?</p>
                                  <p>- Ist die Maßnahme universell (Übertragbarkeit auf andere Prozesse)?</p>
                                  <p>- Wie und wann kann die Maßnahme implementiert werden, um den maximalen Nutzen zu generieren bzw. den minimalen Verlust zu gewährleisten?</p>
                                </v-card-text>
                              </v-card>
                          </v-col>
                      </v-row>
                        <v-col/>
                      <v-row no-gutters>
                        <v-col cols="2">
                          <v-btn @click="addLongTimeAction()" block color="#4DB6AC">
                            Hinzufügen
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="10">
                          <v-text-field label="Abstellmaßnahme (Maßnahme XY / Datum: TT.MM.JJJJ) eingeben und HINZUFÜGEN klicken, um einzufügen." 
                          v-model="currentLongTimeAction.name" 
                          hint="Sie können Maßnahmen eintragen, abhaken und entfernen."
                          persistent-hint
                          />
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
              <v-btn color="#339966" outlined @click="setStepperIndex(3)">
                Weiter zu CHECK
              </v-btn>
              <v-btn color="error" outlined @click="e7 = 1">
                zurück
              </v-btn>
            </v-stepper-content>
          </v-stepper>
      </v-stepper-content> 

      <v-stepper-content step="3">
        <v-col col="12">
          <p>
            In der Check-Phase des PDCA-Zyklus werden die Ergebnisse der erarbeiteten Umsetzungen objektiv betrachtet.
            Die zuvor gesammelten Daten werden hierfür ausgewertet und beurteilt. Dadurch wird festgestellt, ob weitere Anpassungen notwendig 
            sind und die Qualität der Ergebnisse zur Erfüllung der Anforderungen ausreichend ist. 
          </p>
        </v-col>
          <v-stepper v-model="e8" vertical>
          <v-stepper-step :complete="e8 > 1" step="1"  color="#1976D2">
            Ergebnisse<small>Bitten geben Sie die Ergebnisse für dieses Problem an.</small>
          </v-stepper-step>
            <v-stepper-content step="1">
              <v-card class="mb-12">
                      <v-row>
                        <v-col cols="12">
                            <p class="font-weight-light">
                              Die Verifizierung der Ergebnisse erfolgt über die Prüfung der Produkt- und Produktionseigenschaften, die 
                              sich mit der Implementierung der Maßnahme anpassen bzw. verändern.
                              Durch das Ermitteln der qualitätsbezogenen Kennzahlen werden hier umfangreiche Analysen durchgeführt. 
                              Das objektive Betrachten der Veränderungen ist dabei wichtig, um die Steigerung der Ergebnisse zu erkennen.
                              Zur Überprüfung der Ergebnisse können verschiedene Kriterien angegeben werden, die eine qualitative Entwicklung
                              des Prozesses und der Fehlersituation kennzeichnen.
                            <p> 
                              Im Folgenden werden einige Möglichkeiten zur Bewertung der Ergebnisse angeben, welche die Anforderungen und 
                              die getätigten Schritte zur Problembeseitigung gegenüberstellen. Dabei werden die 
                              Stärken, Schwächen, Herausforderungen und Chancen für die Problembearbeitung erarbeitet.
                            </p>
                              Weitere Methoden, für das Auswerten von Ergebnissen mit Kennzahlen und langfristigen Daten, 
                              können ebenfalls angewendet werden. Dazu eignet sich beispielsweise die Prozessfähigkeitsuntersuchung mit 
                              Qualitätsregelkarten: 
                              <a href="http://quality.kenline.de/seiten_d/spc_QRK.htm" target="_blank">Für weiterführende Informationen hier klicken</a>
                        </v-col>
                        <v-col cols="12">
                          <v-expansion-panels focusable>
                            <v-expansion-panel>
                              <v-expansion-panel-header color="#A5D6A7">
                                Stärken: Prozessverbessernder Faktor der Maßnahmen <small>- (Anklicken für Erweiterungen)</small>
                              </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                  Eine Maßnahme wird als zulässige Abstellmaßnahme definiert, wenn sie einen prozessverbessernden Faktor besitzt. 
                                  Sie kann somit nach der möglichen Prozessverbesserung bewertet werden.
                                  <p class="font-weight-light">
                                    1) nahezu gleichbleibender Prozess -- 2) mäßig verbesserter Prozess -- 
                                    3) verbesserter Prozess -- 4) optimierter Prozess
                                  </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                              <v-expansion-panel-header color="#FFF9C4">
                                Schwächen: Bestehende Gefahren <small>- (Anklicken für Erweiterungen)</small>
                              </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                  Trotz der Maßnahmenerarbeitung und den damit zusammenhängenden Bewertungen und Tests, können weiterhin fehlerhaften
                                  Situationen in diesem Bereich auftreten. Diesbezüglich können Gefahren für die Produktion vorliegen, die im Voraus 
                                  identifiziert werden müssen. 
                                  <p class="font-weight-light">
                                    1) Abgedeckte Ursachenbereiche -- 2) Fehlende Fortführung der Sofortmaßnahmen -- 
                                    3) Keine Stillstandzeit-Veränderung -- 4) Fehlerrisiko gleichbleibend
                                  </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel >
                              <v-expansion-panel-header color="#A5D6A7">
                                Chancen: Wirksamkeit der Maßnahme <small>- (Anklicken für Erweiterungen)</small>
                              </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                  Mit der Wirksamkeit der Maßnahme wird der positive Effekt auf die Fertigung abgebildet.
                                  Dabei können verschiedene Wirkungen erreicht werden, die eine nachhaltige und fehlerfreie Fertigung begünstigen.
                                  <p class="font-weight-light">
                                    1) Verhinderte Fehlerwiederholung -- 2) Qualitätssteigerung -- 
                                    3) Durchlaufzeitoptimierung -- 4) Fehlerrisikominimierung
                                  </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                              <v-expansion-panel-header color="#FFF9C4">
                                Herausforderungen: Optimierungshinweise <small>- (Anklicken für Erweiterungen)</small>
                              </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                  Einige Maßnahmen können in einem nicht ausreichenden Umfang vorliegen, da eine Erarbeitung unzureichend ausgefallen ist.
                                  Daher können weiterhin bestehende Herausforderungen, als zusätzliche Optimierungshinweise, angegeben werden.
                                  <p class="font-weight-light">
                                    1) Organisatorische Verbesserungen -- 2) Technologische Entwicklung -- 
                                    3) Administrative Erweiterungen -- 4) Merkmals- und toleranzbezogene Optimierungen
                                  </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>                           
                          </v-expansion-panels>
                        </v-col>                          
                      </v-row>
                      <v-col>
                      </v-col>
                      <v-row no-gutters>
                        <v-col cols="2">
                          <v-btn @click="addResult()" block color="#4DB6AC">
                            Hinzufügen
                            </v-btn>
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="10">
                          <v-text-field 
                            label="Ergebnisse (Ergebnis XY / Datum: TT.MM.JJJJ) eingeben und auf HINZUFÜGEN klicken, um einzufügen."  
                            v-model="currentResults.name"
                            hint="Tragen Sie mögliche Stärken, Schwächen, Chancen oder Herausforderungen ein. Sie können mehrere Ergebnisse eintragen, abhaken und entfernen."
                            persistent-hint
                            />
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
              <v-btn color="error" outlined @click="setStepperIndex(2)">
                zurück zu DO
              </v-btn>
            </v-stepper-content>
          <v-stepper-step :complete="e8 > 1" step="2"  color="#1976D2">
              Spezifikationshinweise
                <small>Bitten geben Sie, wenn möglich, weitere Spezifikationen für die Bearbeitung dieses Problems an.</small>
          </v-stepper-step>
            <v-stepper-content step="2">
              <v-card class="mb-12" >
                      <v-row>
                        <v-col cols="12">
                          <p class="font-weight-light">
                              Um die erarbeiteten Ergebnisse zu überprüfen und gegebenenfalls zu verfeinern, können weitere Spezifikationen
                              zu dem Produkt, Prozess oder zu einer möglichen Maßnahme angegeben werden. Das Herleiten der passenden Eigenschaften
                              kann über mehrere Methoden erfolgen. Eine Option zur Umsetzung geht mit dem Aufstellen von 
                              Arbeitspaket-Spezifikationen einher. 
                          <p> 
                              Die Arbeitspaket-Spezifikationen sind beispielhaft mögliche Ergänzungen zu den geplanten Maßnahmen, die aus einer
                              ersten testweisen Implementierung der Maßnahmen folgen. Dadurch kann das Vorhaben der Nutzenmaximierung aus einer 
                              zeitlichen Perspektive betrachtet und bearbeitet werden. 
                            </p>
                          <v-img
                            max-height="400"
                            max-width="500"
                            src="http://files.webbuilder.hosteurope.de/hosteurope54807/image/ap-spezifikationen.png"
                          ></v-img>
                        </v-col>                    
                      </v-row>
                      <v-col>  
                      </v-col>
                      <v-row no-gutters>
                        <v-col cols="2">
                          <v-btn @click="addSpecification()" block color="#4DB6AC">
                            Hinzufügen
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="10">
                          <v-text-field 
                          label="Spezifikationen angeben (Spezifikation XY / Datum: TT.MM.JJJJ) und HINZUFÜGEN klicken, um einzufügen." 
                          v-model="currentSpecifications.name" 
                          hint="Sie können mehrere Spezifikationen eintragen, abhaken und entfernen."
                          persistent-hint
                          />       
                        </v-col>      
                      </v-row>
                        <v-col>
                          <v-row v-for="cause in specifications" :key="cause.name">
                            <v-btn icon @click="removeSpecifications(cause)" ><v-icon>{{trashIcon}}</v-icon></v-btn>
                              <v-checkbox v-model="cause.checked"  dense :label="cause.name" />
                          </v-row>
                        </v-col>
              </v-card>
              <v-btn color="#339966" outlined @click="setStepperIndex(4)">
                Weiter zu ACT
              </v-btn>
              <v-btn color="error" outlined @click="e8 = 1">
                zurück
              </v-btn>
            </v-stepper-content>
          </v-stepper>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-col col="12">
          <p>
            In der Act-Phase des Problemlösungsprozesses erfolgt die Integration der Neuerungen in die betroffenen Unternehmensbereiche,
            mit der Aussicht auf die Erweiterung auf weitere Bereiche. Dabei wird ein erreichtes Qualitätsniveau, durch die gesetzten Ziele und
            erzielten Ergebnisse, als ein standardisierter Prozess hinterlegt. 
          </p>
        </v-col>
          <v-stepper v-model="e9" vertical>
          <v-stepper-step :complete="e9 > 1" step="1"  color="#0D47A1">
            Ziele
              <small>Bitten geben Sie die Ziele für dieses Problem und die Maßnahmen an.</small>
          </v-stepper-step>
            <v-stepper-content step="1">
              <v-card class="mb-12">
                      <v-row>
                        <v-col cols="5">
                            <p class="font-weight-light">
                              Die gesetzten Ziele des Unternehmens erfolgen aus einem Mindestanspruch an die Fertigung.
                              Eine Zielsetzung gehört zu den betrieblichen Grundentscheidungen eines Unternehmens und wird in der 
                              Regel von der Unternehmensleitung, unter Berücksichtigung der zu erfüllenden Normen, festgelegt.
                            <p> 
                              Einige beispielhafte Ziele des Unternehmens/ Bereiches: 
                            </p>
                        </v-col>
                        <v-col cols="7">
                              <v-card dark color="#0D47A1" rounded>
                                <v-col cols="12">
                                    <p>Sicherheit gewährleisten</p>
                                    <p>Qualität sicherstellen / steigern</p>
                                    <p>Gewinn steigern / Kosten sparen (<small>kürzere Entwicklungszeiten / störungsarme und 
                                        wirtschaftlichere Fertigung / Termintreue</small>)
                                    </p>
                                    <p>Fehlerkosten minimieren / reduzieren (<small>kürzere Entwicklungszeiten / Reduzierung 
                                        von Garantie- und Kulanzkosten</small>)
                                    </p>
                                </v-col>
                              </v-card>         
                        </v-col>
                        <v-col>
                        </v-col>    
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="2">
                          <v-btn @click="addGoals()" block color="#4DB6AC">
                            Hinzufügen
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="10">
                          <v-text-field label="Ziele für die Fehlerbeseitigung angeben (Ziel XY / Datum: TT.MM.JJJJ) und HINZUFÜGEN klicken, um einzufügen." 
                          v-model="currentGoals.name"
                          hint="Sie können mehrere Ziele eintragen, abhaken und entfernen."
                          persistent-hint
                          />
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
              <v-btn color="error" outlined @click="setStepperIndex(3)">
                zurück zu CHECK
              </v-btn>
            </v-stepper-content>
          <v-stepper-step :complete="e9 > 1" step="2"  color="#0D47A1">
              Standards
                <small>Bitten geben Sie die Standards für den angepassten Prozess an.</small>
          </v-stepper-step>
            <v-stepper-content step="2">
              <v-card class="mb-12" >
                <v-row>
                        <v-col cols="12">
                            <p class="font-weight-light">
                              Im Sinne des kontinuierlichen Problemlösungsansatzes wird, ausgehend von dieser Fehlersituation, 
                              eine ständige Verbesserung der Ausgabe erwartet.  Es gilt nun eine kontinuierliche Kontrolle 
                              der ausgegebenen Ziele und eine Standardisierung der Prozesse zu fördern. 
                              Nach einiger Zeit und guter Performance, kann der nächste PDCA-Zyklus angestoßen werden, 
                              wenn ein weiteres Potenzial besteht.
                            </p>
                        </v-col>   
                </v-row>
                      <v-row no-gutters>
                        <v-col cols="2">
                          <v-btn @click="addStandards()" block color="#4DB6AC">
                            Hinzufügen
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="10">
                          <v-text-field label="Standards angeben (Standards XY / Datum: TT.MM.JJJJ) und HINZUFÜGEN klicken, um einzufügen." 
                          v-model="currentStandards.name" 
                          hint="Sie können mehrere Standards eintragen, abhaken und entfernen."
                          persistent-hint
                          />
                        </v-col>  
                      </v-row>
                      <v-col/>
                <v-row no-gutters>
                      <v-col cols="12">
                            <p class="font-weight-light">
                              Um den Prozess nachzuverfolgen und die Zuständigkeiten festzulegen, sind einige ergänzende Daten anzugeben.
                            </p>
                      </v-col> 
                      <v-col cols="12">
                        <v-row v-for="cause in standards" :key="cause.name">
                          <v-btn icon @click="removeStandards(cause)" ><v-icon>{{trashIcon}}</v-icon></v-btn>
                            <v-checkbox v-model="cause.checked"  dense :label="cause.name" />
                        </v-row>
                      </v-col>
                      <v-row no-gutters>
                        <v-col col="12">
                            <v-combobox
                                v-model="userName"
                                chips
                                dense
                                clearable
                                label="Tragen Sie die Teilnehmer_innen ein und bestätigen Sie mit ENTER."
                                hint="Teilnehmer_in XY: Frau/Herr Muster (Aufgabe/ Abteilung)"
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
                                    @click:close="removeUserName(item)"
                                  >
                                    <strong>{{ item }}</strong>
                                  </v-chip>
                                </template>
                              </v-combobox>
                            <v-text-field 
                              label="Tragen Sie die aktuelle Phase der Problemlösung ein." 
                              v-model="currentPhase"
                              hint="Beispiel: Plan - Stillstandszeit bestimmen"
                              persistent-hint
                            />
                            <v-text-field 
                              label="Tragen Sie die Dauer des Problemlösungsprozesses, bis zur aktuellen Phase, ein." 
                              v-model="processDuration"
                              hint="Beispiel: KW 34 - KW 49 (laufender Prozess in der Plan-Phase)"
                              persistent-hint
                            />
                          </v-col> 
                        </v-row>
                        <v-col/>
                    </v-row>
                   <v-col/>  
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
        <v-alert dense outlined type="error" align="center" border="top" prominent>
            <strong>ACHTUNG: Bevor Sie das Fenster verlassen, müssen Sie die Daten abspeichern. 
            Sie können den Eintrag in der Tabelle "Aktuelle Problemlösungen" jederzeit aufrufen und weiter bearbeiten.</strong>
        </v-alert>
        <v-checkbox
              v-model="enabled"
              hide
              details
              class="shrink mr-2 mt-0"
              label="Ich bestätige die Überprüfung der eingegebenen Daten und willige der Datenverarbeitung ein."
            />
        <v-btn color="#00695C" dark @click="save() ; snackbar = true" :disabled="!enabled">
          <v-icon left>mdi-arrow-up-bold-box-outline</v-icon>
            Hier klicken, um Ihre Einträge zu sichern
        </v-btn>
        <v-snackbar v-model="snackbar" absolute>
          {{ text }}
            <template v-slot:action="{ attrs }">
              <v-btn color="primary" text v-bind="attrs" @click="snackbar = false">
                Schließen
              </v-btn>
            </template>
        </v-snackbar>
      </v-row>   
    </v-col>
    </v-container>
  </div>
</template>

 
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mdiCheck,mdiTrashCan } from "@mdi/js";
import { Routes } from "@/router/utils";
import PDCA from "@/api/model/pdca";

@Component
export default class NewPDCA extends Vue {

  enabled = false;
  title = "";
  titleTags: Array<string> = [];
  newCauses: Array<string> = [];
  category = "";
  downtime = "";
  ressources: Array<string> = [];
  shortTimeAction: Array<any> = [];
  longTimeAction: Array<any> = [];
  results: Array<any> = [];
  specifications: Array<any> = [];
  goals: Array<any> = [];
  standards: Array<any> = [];
  userName = "";
  processDuration = ""
  currentPhase = "";
  currentStepperIndex = 1
  currentPDCAId = ""

  data(){
    return {
        e6: 1,
        e7: 1,
        e8: 1,
        e9: 1,
        alert: true,
        model: 0,
        snackbar: false,
        text: 'Ihr Eintrag wurde gesichert.',
      }
  }

  setCurrentPDCA(pdca: PDCA) {
    console.log("HALLO")
    this.title = pdca.title ?? ""
    this.titleTags = pdca.titleTags ?? []
    this.newCauses = pdca.newCauses ?? []
    this.category = pdca.category ?? ""
    this.downtime = pdca.downtime ?? ""
    this.ressources = pdca.ressources ?? []
    this.shortTimeAction = pdca.shortTimeActions ?? []
    this.longTimeAction = pdca.longTimeActions ?? []
    this.results = pdca.results ?? []
    this.specifications = pdca.specifications ?? []
    this.goals = pdca.goals ?? []
    this.standards = pdca.standards ?? []
    this.processDuration = pdca.processDuration ?? ""
    this.currentPhase = pdca.currentPhase ?? ""
    this.userName = pdca.userName ?? ""
    this.currentPDCAId = pdca.id ?? ""
    console.log("PDCA ID", this.currentPDCAId)

  }

  async save() {
    
    const pdca = new PDCA()
    pdca.title = this.title
    pdca.titleTags = this.titleTags
    pdca.newCauses = this.newCauses
    pdca.category = this.category
    pdca.downtime = this.downtime
    pdca.ressources = this.ressources
    pdca.shortTimeActions = this.shortTimeAction.map(s => s.name)
    pdca.longTimeActions = this.longTimeAction.map(g => g.name)
    pdca.results = this.results.map(g => g.name)
    pdca.specifications = this.specifications.map(s => s.name)
    pdca.goals = this.goals.map(g => g.name)
    pdca.standards = this.standards.map(s => s.name)
    pdca.processDuration = this.processDuration
    pdca.currentPhase = this.currentPhase
    pdca.userName = this.userName
    
    console.log(pdca)
    if(this.currentPDCAId && this.currentPDCAId !== "") {  

      const res = await this.$api.updatePDCA(pdca,this.currentPDCAId)
      console.log(res)
    } else {

      const res = await this.$api.sendPDCA(pdca)
      this.currentPDCAId = res?.id ?? ""

    }

    this.$emit("onSave")

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


