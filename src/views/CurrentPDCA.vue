<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>Aktuelle Problemlösungen</h2>
          <v-divider/>
            <p class="font-weight-light">  
              Ein wichtiger Bestandteil zur Erfassung von neuen Fehlereinträgen ist die Übersicht der aktuellen Problemlösungsprozesse. 
              Dieses Fenster bietet die Möglichkeit zur direkten Einsicht in die aktuell laufenden Lösungszyklen, 
              durch den Import in die Applikation. Die Tabelle, mit der Möglichkeit zur Sortierung nach dem Importzeitpunkt, 
              ermöglicht eine genaue Betrachtung der Fehlersituationen durch das Aufrufen der detaillierten Ansicht. 
            </p>
          <v-divider/>
        </v-col>
        <v-col cols="12">
            <p class="font-weight-light">  
              Klicken Sie eine Zeile (einen PDCA-Zyklus) an, um eine detaillierte Ansicht zu erhalten.
            </p>
          <v-divider/>
          <v-card>
            <v-card-text>
              <v-row align="center" justify="center">
                <v-col cols="12" align="center">
                  <v-data-table
                  >
                  </v-data-table>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12">
              <v-card>
                  <v-toolbar color="#90CAF9"> 
                    <h2>
                      Aktuelle Problemlösung <small>(detaillierte Eigenschaften für den oben ausgewählten PDCA-Zyklus)</small> 
                    </h2>
                  </v-toolbar>
                  <v-card-text>  
                    <v-row>
                        <v-col>
                            
                        </v-col>
                        <v-col align="center">
                            <p>Kein Fehler ausgewählt</p>
                        </v-col>
                    </v-row>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>
