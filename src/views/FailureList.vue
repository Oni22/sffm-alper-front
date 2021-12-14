
<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
        <h2>Fehlerliste</h2>
        <v-divider/>
        <p class="font-weight-light">
          In diesem Fenster werden alle aktuellen und bekannten Auswahloptionen aufgelistet, die für die BU OSM relevant sind. Die Fehlergrundliste wird dabei, 
          zusätzlich zu der Nutzung in der Applikation, für das Shopfloor-Management verwendet. Die Entnahme der aktuellen Fehlergründe, Bereiche, Dispostufen 
          und Bauteile ist von hoher Bedeutung für die einheitliche Wahrnehmung der Fertigungssituation. 
          Die Arbeitsgänge werden, aufgrund der hohen Anzahl, in dieser Ansicht nicht aufgeführt. Sie können aus dem SAP-System oder vom Shopfloor-Board 
          entnommen werden. 
        </p>
        </v-col> 
        <v-col>
          <v-divider/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">              
          <v-list>
            <v-toolbar height="40px" color="#E8EAF6" flat>Fehlergründe</v-toolbar>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>01. "gelöscht" Priorisierung anderes Produkt</v-list-item-title>
                    <v-list-item-subtitle>Administration</v-list-item-subtitle>
                      <v-divider/>
                  <v-list-item-title>02. Priorisierung OR-Soft</v-list-item-title>
                    <v-list-item-subtitle>Administration</v-list-item-subtitle>
                      <v-divider/>
                  <v-list-item-title>03. HIP</v-list-item-title>
                    <v-list-item-subtitle>Qualität</v-list-item-subtitle>
                       <v-divider/>
                  <v-list-item-title>04. Maschinenausfall / -Fehler</v-list-item-title>
                    <v-list-item-subtitle>Technik</v-list-item-subtitle>
                       <v-divider/>
                  <v-list-item-title>05. Krankheitsfall</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/>
                  <v-list-item-title>06. Warentransport</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/>
                  <v-list-item-title>07. Prozessoptimierung/ -Übertrag</v-list-item-title>
                    <v-list-item-subtitle>Qualität</v-list-item-subtitle>
                       <v-divider/>
                  <v-list-item-title>08. Prozessprobleme/ -Abweichung</v-list-item-title>
                    <v-list-item-subtitle>Qualität</v-list-item-subtitle>
                       <v-divider/>
                  <v-list-item-title>09. fehlende Kapazität Maschine</v-list-item-title>
                    <v-list-item-subtitle>Administration</v-list-item-subtitle>
                       <v-divider/>
                  <v-list-item-title>10. fehlende Kapazität Mitarbeiter </v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/>
                  <v-list-item-title>11. fehlende Kapazität PT/Entw.</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>12. fehlende Kapazität AV/Steuerung/Einkauf</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/>
                  <v-list-item-title>13. fehlende Kapazität QS</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/>
                  <v-list-item-title>14. fehlende Kapazität nicht-OSM</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>15. fehlende Arbeitsmaterialien</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>16. fehlendes Messprotokoll</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>17. fehlender Informationsfluss</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/>
                  <v-list-item-title>18. fehlende AAW/PBX/REZ</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/>
                  <v-list-item-title>19. fehlende Rückmeldung</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/>   
                  <v-list-item-title>20. fehlendes Werkzeug</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/>    
                  <v-list-item-title>21. Lieferprobleme extern</v-list-item-title>
                    <v-list-item-subtitle>Administration</v-list-item-subtitle>
                       <v-divider/>
                  <v-list-item-title>22. Inventur </v-list-item-title>
                    <v-list-item-subtitle>Administration</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>23. Wartung/ Umbau</v-list-item-title>
                    <v-list-item-subtitle>Technik</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>24. warten auf Slot</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>25. warten auf Testergebnisse</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>26. Fehlermeldung aktiv</v-list-item-title>
                    <v-list-item-subtitle>Qualität</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>27. Kundenfreigabe steht aus</v-list-item-title>
                    <v-list-item-subtitle>Administration</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>28. Querqualifikation/ Aushilfe in Nachbarabteilung</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>29. Keine Information zum Stillstand erhalten</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>30. PK fehlerhaft</v-list-item-title>
                    <v-list-item-subtitle>Administration</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>31. Taktung (zwei Teile pro Arbeitsgang)</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>32. fehlende Qualifikation Mitarbeiter</v-list-item-title>
                    <v-list-item-subtitle>Organisation</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>33. Nacharbeit</v-list-item-title>
                    <v-list-item-subtitle>Qualität</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>34. Ausschuss</v-list-item-title>
                    <v-list-item-subtitle>Qualität</v-list-item-subtitle>
                       <v-divider/> 
                  <v-list-item-title>35. fehlende Prio</v-list-item-title>
                    <v-list-item-subtitle>Administration</v-list-item-subtitle>
                       <v-divider/>
                  <v-list-item-title>36. QS Stopp</v-list-item-title>
                    <v-list-item-subtitle>Qualität</v-list-item-subtitle>
                       <v-divider/>
                  <v-list-item-title>37. Facility Management/ Stromabschaltung</v-list-item-title>
                    <v-list-item-subtitle>Administration</v-list-item-subtitle>
                       <v-divider/>                                                                
                </v-list-item-content>
              </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="6">              
          <v-list>
            <v-toolbar height="40px" color="#E8EAF6" flat>Bereiche</v-toolbar>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>OSM-Planfertigung
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>OSM-Vorfertigung
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>OSM-Zylinderfertigung
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>OSM-Zwischenprozesse
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>OSM
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>SBT
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>WTC
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>CS
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>RR
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>ILM
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>EUV
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>EMU
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>ESC
                  </v-list-item-title><v-divider/>
                </v-list-item-content>
              </v-list-item>
            <v-toolbar height="40px" color="#E8EAF6" flat>Dispostufen</v-toolbar>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>ESC GT_1
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>ESC MMP_2
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>ESC MMP_3
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>ESC SMMP_2
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>ESC SMMP_3
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>ESC SMMP_4
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>Block GT_1
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>Block MMP_2
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>Block MMP_3
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>GL MMP_4
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>GL MMP_5
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>Block SMMP_2
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>GL SMMP_5
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>GL SMMP_6
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>Side Mirror B CNC Dis.1 (1041869)
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>Side Mirror B FEPO Dis.2 (1054275)
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>Side Mirror B FEPO Dis.3 (1042663)
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>Block GT_2
                  </v-list-item-title><v-divider/>
                </v-list-item-content>
              </v-list-item>
            <v-toolbar height="40px" color="#E8EAF6" flat>Produkte</v-toolbar>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>ESC Grundteil
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>MMP ESC unbeschichtet
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>MMP ESC AL203
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>SMMP ESC V3
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>SMMP ESC CrN
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>SMMP ESC SiO2
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>Supremax Grundteil
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>MMP Supremax V3 AF kpl
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>MMP Supremax V3
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>MMP Glue Al203
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>MMP w/Interface Al203
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>SMMP Block
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>SMMP Glue ASSY CrN
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>SMMP w/Interface CrN
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>Side Mirror B CNC Dispo1 (1041869)
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>Side Mirror B FEPO1  Dispo2 (1054275)
                  </v-list-item-title><v-divider/>
                  <v-list-item-title>Side Mirror B FEPO2  Dispo3 (1042663)
                  </v-list-item-title><v-divider/>
                </v-list-item-content>
              </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
