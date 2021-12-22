<template>
    <v-container>
    <v-form>
        <row>
            <h2>Informationen zur App</h2> 
            <v-divider/>
            <v-col cols="12">
                <h3>I. Aktuelle Anpassungen</h3>
                    <p>
                        Version 1 -- Erstanwendung und Implementierung/ Übertragung der Datenbank auf die Applikation,
                        Störungsauswertung auf dieser digitalen Plattform. 
                    <p> Datenbank-Aktualität Stand 10/2021;  
                        Aktuelle Algorithmen: k-nearest-neighbors, decision tree
                    <p/>
                <h3>II. Aufbau und Anwendung</h3>
                    <p>
                        <h4>1. Fehlereintrag mit Künstlicher Intelligenz</h4>
                    <p>
                        Diese Applikation bietet das automatisierte Eintragen und Auswerten von Fehlerzuständen.
                        Für die Verarbeitung der Einträge, von bereits bekannten Fehlern, wird dabei eine Künstliche Intelligenz angewendet, 
                        um die geschätzte Stillstandzeit und die passende Maßnahme für den Fehler auszugeben. Innerhalb dieser Künstlichen 
                        Intelligenz wird das Maschinelle Lernen verwendet, welches die Algorithmen für die Bearbeitung der Dateneingabe liefert. 
                        In der aktuellen Auswertungssystematik werden die Algorithmen, zur Schätzung der Stillstandzeit und Erfassung der 
                        passenden Maßnahme für den aktuellen Fehlergrund, integriert. Das Bestimmen dieser Faktoren erfolgt automatisiert und auf 
                        Basis der gegebenen Datenbank. Eine Sicherung der Auswertung ist zu diesem Zeitpunkt nicht gegeben.
                    <p> 
                        <h4>2. Fehlereintrag mit dem PDCA-Zyklus</h4>
                    <p>
                        Für den Problemlösungsansatz von unbekanten Fehlerzuständen bzw. Störungen wird ein begleitender PDCA-Zyklus bereitgestellt,
                        welcher die Schritte der Problemlösung, durch die einzelnen Bestandteile Plan, Do, Check und Act, durchläuft. Dieser automatisierte
                        Ansatz stellt eine direkte und transparente Möglichkeit zur Bearbeitung von neuen Problemen dar. Der PDCA-Zyklus beschreibt das 
                        kontinuierliche Verbessern der laufenden Prozesse mittels eines durchgehenden Screenings der aktuellen Zustände, die durch neue 
                        Erkenntnisse und geprüfte Systeme dauerhaft in den zukünftigen Prozess integriert werden. Durch das Organisieren und Handeln 
                        nach dem PDCA-Zyklus besteht durchgehend der Gedanke nach dem Finden der aktuell optimalen Lösung, welche in regelmäßigen 
                        Zeitintervallen erneut analysiert und gegebenenfalls überarbeitet wird.
                        Dabei ist das eigenständige Eintragen von problemlösungsrelevanten Daten, wie den Ursachen, Maßnahmen, Ressourcen und Zielen für eine 
                        nachhaltige Auswertung, eine unternehmensweit einheitliche Methodik zur Aufnahme und Analyse von unbekannten Fehlerzuständen.   
                    <p>  
                        Aktuelle Problemlösungen und auftretende Fehler können innerhalb der Applikation aufgerufen werden, um den Fertigungsstatus zu erhalten.
                        Die Anwender dieser Applikation müssen dementsprechend die Befugnis und das Wissen zur Bearbeitung und zum Management der Fehlerzustände
                        besitzen. Das Eintragen und Verfolgen der Fehlerzustandsentwicklungen, über die jeweiligen Analyse- oder Listen-Ansichten, zielen auf das 
                        Erreichen eines allgemein qualitativen und weitestgehend fehlerfreien Fertigungs- und Organisationsprozesses ab. 
                    </p>
            </v-col>
            <v-col cols="12">
                <h3>III. Datenschutzrechtliche Hinweise</h3>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit den Daten passiert, die durch die Applikation verarbeitet werden.
                        Ausführliche Informationen zum Thema Datenschutz entnehmen Sie aus der, unter diesem Text aufgeführten, Datenschutzerklärung.
                    <p>
                        <h4>1. Verarbeitung personenbezogener Daten bei Nutzung der Applikation</h4>
                    <p>
                        Bitte lesen Sie bei jeder Nutzung unserer Internetseite die Datenschutzerklärung, um bei möglichen Änderungen oder Aktualisierungen 
                        auf dem neuesten Stand zu sein. Die Datenschutzerklärung muss von Zeit zu Zeit an die tatsächlichen Verhältnisse und an die Rechtslage angepasst werden.
                    <p>
                        Beim Aufruf Applikation/ Web-Applikation erfasst der Server den Domain-Namen oder die IP-Adresse Ihres Computers, die URL, welche 
                        angefordert wurde, sowie den http-Antwort-Code und ggf. die auf unsere Webseite verweisende URL (Art. 6 Abs. 1 (f) DS-GVO).
                        Dieses Vorgehen ist technisch bedingt üblich und erforderlich, um die Nutzung der Applikation zu ermöglichen.  
                        
                        Ihre personenbezogenen Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber 
                        hinaus dann erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder 
                        sonstigen Vorschriften, denen der Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann, 
                        wenn eine durch die genannten Normen vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren 
                        Speicherung der Daten für einen Vertragsabschluss oder eine Vertragserfüllung besteht.   
                    <p>
                        <h4>2. Betroffenenrechte</h4>
                    <p> 
                        Sie haben gegenüber uns: Das Recht auf über die Sie betreffenden personenbezogenen Daten sowie, das Recht auf Berichtigung, 
                        das Recht auf Löschung, das Recht auf Einschränkung der Verarbeitung und das Recht auf Datenübertragbarkeit sowie im Fall einer 
                        Verarbeitung nach das Recht auf Widerspruch gegen die Verarbeitung.
                    <p>
                        <h4>3. Eintragen der Fehler und Auswertung der Daten über die Fehler</h4>
                    <p> 
                        Die Angaben zum Eintragen eines neuen bekannten oder unbekannten Fehlers, über das Fehlereintragsformular oder PDCA-Formular, werden 
                        zur Durchführung benötigt, da diese Daten die Funktion der Künstlichen Intelligenz aufrufen und den Problemlösungszyklus vorantreiben.
                        Im Sinne der Berliner Glas GmbH ist daher das Aufnehmen und Verarbeiten der fehlerbezogenen Daten essenziell für das Aufstellen und 
                        Verwendenden dieser Applikation.
                    <p>
                        <h4>4. Verantwortlichkeit, Umfang und Änderung der Datenschutzerklärung</h4>
                    <p>
                        Verantwortliche für die Erhebung und Verarbeitung von personenbezogenen Daten ist die:
                    <p>
                        <h4>Berliner Glas GmbH</h4>
                        <h4>Waldkraiburger Straße 5</h4>
                        <h4>12347 Berlin, Deutschland</h4>
                        <h4>Tel. +49 30 60 905-0</h4>
                        <h4>Fax +49 30 60 905-100</h4>
                        <h4>E-Mail: info@berlinerglas.de</h4>
                    <p>
                    <p>
                        Diese Datenschutzerklärung gilt ausschließlich für die Nutzung der von uns angebotenen Internetseiten. Sie gilt nicht für die 
                        Internetseiten anderer Diensteanbieter, auf die wir lediglich durch einen Link verweisen. Für fremde mit unserem Internetauftritt 
                        nicht im Zusammenhang stehenden Erklärungen und Richtlinien übernehmen wir keine Verantwortung und Haftung. Wir behalten uns das Recht 
                        vor, die vorstehenden Datenschutzbestimmungen von Zeit zu Zeit entsprechend künftiger Änderungen hinsichtlich der Erhebung und 
                        Verarbeitung von personenbezogenen Daten anzupassen.
                    </p>   
            </v-col>
        </row>
    </v-form>
    </v-container>
</template>