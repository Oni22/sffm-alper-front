

export const actions : Record<string,string> = {
    
    "1": "Abstimmung individuell",
    "2": "Planungsfehler prüfen",
    "3": "AAW/REZ/PBX lesen",
    "4": "Abstellmaßnahmen definieren",
    "5": "Abstimmung individuell",
    "6": "Bauteilstillstand klären",
    "7": "Erstellung",
    "8": "Fehlergrund aufdecken",
    "9": "Kein Maßnahmenvorschlag möglich",
    "10": "Kommunikation OEK",
    "11": "Korrekte Zuweisung",
    "12": "Nachqualifizierung",
    "13": "Nachträglich ECR erstellen",
    "14": "Polierbereich WKS1+WKS2",
    "15": "Prüfung Ausweichmöglichkeiten",
    "16": "Prüfung Bestellbarkeit",
    "17": "Prüfung Einsatzmöglichkeiten AV",
    "18": "Prüfung Einsatzmöglichkeiten PT",
    "19": "Prüfung Erhöhung Kapa",
    "20": "Prüfung Investitionsvorhaben",
    "21": "Prüfung Ressourcen",
    "22": "Prüfung Steuerung (der Teile)",
    "23": "Prüfung zusätzliche Kapa MA",
    "24": "Rücksprache OR-Soft-Verwaltung",
    "25": "Sensibilisierung FertigungsMA",
    "26": "Shopfloor-Anpassung",
    "27": "Übersicht Kapa-Angebot",
    "28": "Versionierung",
    "29": "Vertretungsregelung",
    "30": "Vorgelagerte Prozesskette prüfen",
    "31": "Zusätzliche Maschine",
    "32": "Zusätzliche SF-Teilnehmer"

}


export const faults = {
  '"gelöscht" Priorisierung anderes Produkt': "1",
  "Priorisierung OR-Soft": "2",
  "HIP": "3",
  "Maschinenausfall / -Fehler": "4",
  "Krankheitsfall": "5",
  "Warentransport": "6",
  "Prozessoptimierung/ -Übertrag": "7",
  "Prozessprobleme/ -Abweichung": "8",
  "fehlende Kapazität Maschine": "9",
  "fehlende Kapazität Mitarbeiter": "10",
  "fehlende Kapazität PT/Entw.": "11",
  "fehlende Kapazität AV/Steuerung/Einkauf": "12",
  "fehlende Kapazität QS": "13",
  "fehlende Kapazität nicht-OSM": "14",
  "fehlende Arbeitsmaterialien": "15",
  "fehlendes Messprotokoll": "16",
  "fehlender Informationsfluss": "17",
  "fehlende AAW/PBX/REZ": "18",
  "fehlende Rückmeldung": "19",
  "fehlendes Werkzeug": "20",
  "Lieferprobleme extern": "21",
  "Inventur": "22",
  "Wartung/ Umbau": "23",
  "warten auf Slot": "24",
  "warten auf Testergebnisse": "25",
  "Fehlermeldung aktiv": "26",
  "Kundenfreigabe steht aus": "27",
  "Querqualifikation/ Aushilfe in Nachbarabteilung": "28",
  "Keine Information zum Stillstand erhalten": "29",
  "PK fehlerhaft": "30",
  "Taktung (zwei Teile pro Arbeitsgang)": "31",
  "fehlende Qualifikation Mitarbeiter": "32",
  "Nacharbeit": "33",
  "Ausschuss": "34",
  "fehlende Prio": "35",
  "QS Stopp": "36",
  "Facility Management/ Stromabschaltung": "37",
};

export const products = {
  "ESC Grundteil": "1",
  "MMP ESC unbeschichtet": "2",
  "MMP ESC AL203": "3",
  "SMMP ESC V3": "4",
  "SMMP ESC CrN": "5",
  "SMMP ESC SiO2": "6",
  "Supremax Grundteil": "7",
  "MMP Supremax V3 AF kpl": "8",
  "MMP Supremax V3": "9",
  "MMP Glue Al203": "10",
  "MMP w/Interface Al203": "11",
  "SMMP Block": "12",
  "SMMP Glue ASSY CrN": "13",
  "SMMP w/Interface CrN": "14",
  "Side Mirror B CNC Dispo1 (1041869)": "15",
  "Side Mirror B FEPO1  Dispo2 (1054275)": "16",
  "Side Mirror B FEPO2  Dispo3 (1042663)": "17",
};

export const workspaces = {
  "Ätzen Syrgenstein": "1",
  "AV Modules": "2",
  "AV Modules Klebesatz 1 ": "3",
  "AV Modules Klebesatz 2 ": "4",
  "AV Modules Klebesatz 2/ HV Inserts ": "5",
  "AV Modules Klebesatz 3": "6",
  "AV Modules Koffer/ Hilfsplatten beistellen": "7",
  "AV Modules Lager ": "8",
  "AV Modules Messschild ": "9",
  "AV Modules Versand Papiere ": "10",
  "AV/ FS Koffer beistellen": "11",
  "AV/ FS Messtool Stack MMP beistellen": "12",
  "AV/ FS Messtool Stack SMMP beistellen": "13",
  "CS APS 1104": "14",
  "CS APS 1104 Alu Spiegel A": "15",
  "CS APS 1104 Alu Spiegel B": "16",
  "CS Beschichtung VISS": "17",
  "CS Beschichtung VISS 600": "18",
  "CS Beschichtungsnachbereitung": "19",
  "CS Beschichtungsumbau A/B": "20",
  "CS Beschichtungsvorbereitung Spiegel A": "21",
  "CS Chrom XG Seite": "22",
  "CS Viss Seite C TiN": "23",
  "CS Viss Seite D TiN": "24",
  "DSSP D28 Folie 9µm Seite C / D": "25",
  "DSSP D28 Handschleifen": "26",
  "DSSP D28 Run 2": "27",
  "DSSP D28 Seite C / D": "28",
  "DSSP D45 Run 1": "29",
  "DSSP D45 Seite C / D": "30",
  "DSSP D45 Seite C / D ": "31",
  "DSSP DOPA D28 nachschleifen": "32",
  "DSSP Schnellpolieren Seite C ": "33",
  "DSSP Schnellpolieren XG": "34",
  "EMU Bond-Ofen Vakuum Xerion 1": "35",
  "EMU Laser Charmilles 400": "36",
  "ESC 3D RR Person OSM danach Zygo": "37",
  "ESC Abkleben": "38",
  "ESC Ätzraum": "39",
  "ESC Ätzraum HF-Reinigung": "40",
  "ESC Bond auflegen": "41",
  "ESC Bonden": "42",
  "ESC Carosche Säure ": "43",
  "ESC CrN-Ätzen": "44",
  "ESC Entwickeln": "45",
  "ESC Feinreinigung": "46",
  "ESC Grundreinigung": "47",
  "ESC Mikroskopische Kontrolle": "48",
  "ESC RR Kontrolle": "49",
  "ESC RR Laminator 1 (Typ UVL 60.2)": "50",
  "ESC RR Q-Tool 2 Aufbau": "51",
  "ESC RR Q-Tool 2 Stackmessung Person OSM": "52",
  "ESC RR Q-Tool Ausbau": "53",
  "ESC RR RGA NGQ": "54",
  "ESC RR RGA NGQ 250": "55",
  "ESC RR UV-Belichter ORC-EM1201F": "56",
  "ESC RR UV-Belichter ORC-EXM1201F": "57",
  "ESC SR litho Entwickeln": "58",
  "ESC SR Prüf- & Kontrollplatz": "59",
  "ISEL Bürsten": "60",
  "ISEL Noppen verrunden Diamant": "61",
  "ISEL Noppen verrunden Zirox": "62",
  "ISEL Noppenverrunden Zirox ": "63",
  "ISEL Senkung schleifen": "64",
  "ISEL Wafer-Pins ausschleifen": "65",
  "NA Schiebemaschine": "66",
  "OSM  Fasen Aufbohren der Kontakte": "67",
  "OSM  RR Folienschutz für Fasen": "68",
  "OSM  RR Montage 1 ESC": "69",
  "OSM 3D Vermessung": "70",
  "OSM Abkitten": "71",
  "OSM Abkleben für CNC2": "72",
  "OSM Abkleben für Handschleifen": "73",
  "OSM Abkleben, ablackieren": "74",
  "OSM Abkleben, schützen": "75",
  "OSM Absäuern": "76",
  "OSM Abtragstabelle": "77",
  "OSM Abwampen LILA Folie": "78",
  "OSM Ansprengen Folienschutz": "79",
  "OSM Aufwampen LILA Folie": "80",
  "OSM Ausbau aus SPS-Box": "81",
  "OSM Block Beschriftung": "82",
  "OSM Bondinspection": "83",
  "OSM CNC BEA": "84",
  "OSM Entwickler": "85",
  "OSM E-Quali Hochspannung": "86",
  "OSM Fasen": "87",
  "OSM Fasen Aufbohren der Kontakte": "88",
  "OSM Fasen Kontaktieren des ESCs": "89",
  "OSM Fasen Wafer und E-Pins": "90",
  "OSM Finale Kontrolle Block ": "91",
  "OSM FS  Messtool Stack beistellen": "92",
  "OSM Grundreinigung": "93",
  "OSM Grundreinigung nach CNC1": "94",
  "OSM Grundreinigung nach CNC2": "95",
  "OSM Handsäge": "96",
  "OSM HV Stand Off Test": "97",
  "OSM Kitten": "98",
  "OSM Kontrolle des ESCs": "99",
  "OSM Laser": "100",
  "OSM Laser Charmilles 400": "101",
  "OSM Lebensdauertest": "102",
  "OSM New View Messung": "103",
  "OSM New View Messung Protokoll Vorlage": "104",
  "OSM Pechpolieren 1. Blockfläche B": "105",
  "OSM Pechpolieren 2. Blockfläche A": "106",
  "OSM Pechpolieren XG": "107",
  "OSM Polieren Seite A": "108",
  "OSM Polieren Seite B": "109",
  "OSM PV / PI": "110",
  "OSM QA-Report erstellen": "111",
  "OSM Schleifen Seite A": "112",
  "OSM Schleifen Seite B": "113",
  "OSM Schnellpolieren 1. Blockfläche B": "114",
  "OSM Schnellpolieren 2. Blockfläche A": "115",
  "OSM Sichtkontrolle": "116",
  "OSM Silberleitlack entfernen": "117",
  "OSM SiSiC E-Quali Hochspannung": "118",
  "OSM Smartscope": "119",
  "OSM SMP 800": "120",
  "OSM SMP D-Seite": "121",
  "OSM Tellerschleifen optional": "122",
  "OSM Tellerschleifmaschine": "123",
  "OSM US Grundreinigung": "124",
  "OSM US Reinigung": "125",
  "OSM US Reinigung abkleben": "126",
  "OSM Zwischenkontrolle": "127",
  "OSM Zwischenkontrolle nach ISA Optional": "128",
  "OSM Zwischenkontrolle vor ISA": "129",
  "OSM Zylomat Kontrolle, einrichten": "130",
  "OSM Zylomat Polieren": "131",
  "RR 3D KMG": "132",
  "RR Abkleben": "133",
  "RR Ausbau Beschichtungstool": "134",
  "RR Bond auflegen, Silberleitlack": "135",
  "RR Bonden": "136",
  "RR Einbau Beschichtungstool": "137",
  "RR Einbau in SPS-Box": "138",
  "RR Endkontrolle": "139",
  "RR E-Quali Niederspannung": "140",
  "RR HV Arcing-Test": "141",
  "RR HV Test ": "142",
  "RR Inspektion ": "143",
  "RR Inspektion vor CS ": "144",
  "RR Kontaktierung Glätten": "145",
  "RR Kontrolle": "146",
  "RR Kontrolle nach CS ": "147",
  "RR Kontrolle vor CS ": "148",
  "RR Montage": "149",
  "RR Montage 1 ESC ": "150",
  "RR Montage 2 HV-Inserts ": "151",
  "RR Montage 2 Taget Inserts ": "152",
  "RR Montage 2 Target Plates ": "153",
  "RR Montage 2 Thermistor Insert ": "154",
  "RR Montage 2 Verguss Widerstände": "155",
  "RR Montage 2 Wafer-Pin Inserts ": "156",
  "RR Montage 3 LID Assy": "157",
  "RR Montage 3 Mounting Posts": "158",
  "RR Montage 3 Mounting Posts / 5th": "159",
  "RR Montage 3 Verguss Lid & Posts ": "160",
  "RR Montage abkleben": "161",
  "RR Montage ESC ": "162",
  "RR Montage Flex Assy Zeichnung": "163",
  "RR Montage Kontakterung ESC in MP": "164",
  "RR Montage Tempern": "165",
  "RR Montage Verguss Inserts": "166",
  "RR Montage Verpacken": "167",
  "RR Montage Vorbereitung  Block 1": "168",
  "RR Montage Vorbereitung Block 2": "169",
  "RR NV-Prüfung": "170",
  "RR RGA": "171",
  "RR Vakuum Tempern": "172",
  "RR Vermessung": "173",
  "RR Vermessung nach Verguss": "174",
  "RR Vermessung Posts ": "175",
  "RR Vermessung vor Verguss ": "176",
  "RR Verpackung": "177",
  "RR Via Kontaktieren": "178",
  "SBT 3D Vermessung": "179",
  "SBT abkitten des Würfels": "180",
  "SBT Abtragstabelle": "181",
  "SBT AKF-Prüfung Person OSM": "182",
  "SBT Ätzraum": "183",
  "SBT Ätzraum Alu und TiN Absäuern": "184",
  "SBT Ätzraum Carosche Säure": "185",
  "SBT Block Beschriftung": "186",
  "SBT ESC Chrom ätzen": "187",
  "SBT Fasen": "188",
  "SBT Finale Kontrolle Block": "189",
  "SBT FRT ": "190",
  "SBT GISMO": "191",
  "SBT Grund-/ Feinreinigung": "192",
  "SBT IFM 24 Fläche": "193",
  "SBT Interferometer 24 Horizontal ": "194",
  "SBT ISA BEA optional": "195",
  "SBT ISA Konstantabtrag": "196",
  "SBT Kitten Block": "197",
  "SBT Läppen A": "198",
  "SBT Läppen B": "199",
  "SBT New View": "200",
  "SBT Polieren 1.Blockfläche B": "201",
  "SBT Polieren 2.Blockfläche A": "202",
  "SBT -Polieren Personell": "203",
  "SBT Schnellpolieren 1.Blockfläche B": "204",
  "SBT Schnellpolieren 2.Blockfläche A": "205",
  "SBT Simulationsrechnung ISA optional ": "206",
  "SBT Zygo 24 nach C polieren": "207",
  "SBT Zygo 24 nach ISA optional": "208",
  "SBT Zygo 24 Person OSM ": "209",
  "SBT Zygo 24 vor ISA": "210",
  "SBT Zygo Ausbau Stackmessung Person OSM ": "211",
  "SBT Zygo Stackmessung": "212",
  "SBT Zygomessung Person OSM": "213",
  "SC ESC Ätzraum": "214",
  "SC ESC Belichten Bottom": "215",
  "SC ESC Belichten Noppen": "216",
  "SC ESC Chrom ätzen": "217",
  "SC ESC Hardbake": "218",
  "SC ESC Laminieren": "219",
  "SC ESC RR Kontrolle": "220",
  "SC ESC Spülen mit Soda Topseite": "221",
  "VF 3D Vermessung": "222",
  "VF CNC 32 (DMU) 5 Achsen": "223",
  "VF CNC 32 BEA 1 LWS D ": "224",
  "VF CNC 32 BEA 2 Potgat Seite C ": "225",
  "VF CNC 33 BEA 1 LWS D": "226",
  "VF CNC 33 Ultrasonic (DMS 70-5)": "227",
  "VF CNC AF": "228",
  "VF CNC BEA1": "229",
  "VF CNC BEA2": "230",
  "VF Grundreinigung nach CNC BEA": "231",
  "VF Handsäge": "232",
  "VF säubern": "233",
  "VF SMP D-Seite": "234",
  "WA Kontrolle": "235",
  "WA Syrgenstein": "236",
  "WE Kontrolle": "237",
  "WE Syrgenstein": "238",
  "3D Vermessung": "239",
  "ab-/ umkitten LBC": "240",
  "Abkitten LBC": "241",
  "absprengen": "242",
  "am 24 Interferometer messen": "243",
  "Auskitten LBC": "244",
  "Auswäsche": "245",
  "Auswäsche LBC": "246",
  "AV: Materialbuchung vornehmen": "247",
  "AV: Teile einlagern,  Folge PK": "248",
  "Bauteil/e ölfrei reinigen": "249",
  "Bohrung mit M9 lack 2x lackieren,,": "250",
  "CNC Bea": "251",
  "CNC Tieflochbohren": "252",
  "diagonal sägen": "253",
  "Dokumentation des Istzustands": "254",
  "einkitten in Kitt-Tool  4 Spuren 90°": "255",
  "Einwinkeln": "256",
  "Entspannungsätzen": "257",
  "fasen von Hand (im Fasenraum)": "258",
  "Interferometer 18 Horizontal": "259",
  "Interferometer Line Beam": "260",
  "ISA 2. Run (incl. Simulation)": "261",
  "ISA 3. Run (incl. Simulation)": "262",
  "IS-Messraum_Goniometer": "263",
  "Kitten": "264",
  "Kitten LBC": "265",
  "Kitten LBC  Kathete matt vorschleifen": "266",
  "Kitten LBC  Kathete vorpolieren": "267",
  "Kontrolle Line Beam": "268",
  "Lackieren/Sprühen": "269",
  "Lagerbuchung/Einlagern": "270",
  "Material prüfen": "271",
  "mechanische Messung": "272",
  "nachläppen": "273",
  "NLP 1200 polieren": "274",
  "NLP 1200 schleifen": "275",
  "Optische Zwischenkontrolle / Manuelle Re": "276",
  "OSM VF abkitten": "277",
  "OSM VF säubern": "278",
  "Planfräsen CNC SMP 800": "279",
  "QA  DN Stopp": "280",
  "Reinigung": "281",
  "Reinigung nach Tegla": "282",
  "Reinigung SBT": "283",
  "Sägekanten nachfasen": "284",
  "Sauberkeitskontrolle": "285",
  "Säubern / Waschen von Hand": "286",
  "SMP-800": "287",
  "Ultraschallreinigung": "288",
  "Ultraschallreinigung gemäß": "289",
  "Umpacken in Stickstoffbox": "290",
  "umsprengen": "291",
  "Verpacken in Seidenpapier zum Versand zu": "292",
  "Wareneingang von Tegla": "293",
  "Wetzen  nur wenn notwendig": "294",
  "Zygo 24": "295",
  "Zygo- Messung": "296",
};

//FÜR NEW-FAILURE URSACHENPROGNOSE
export const primaryCauses = {
  '"gelöscht" Priorisierung anderes Produkt': "Management",
  "Priorisierung OR-Soft": "Management",
  "HIP": "Mensch",
  "Maschinenausfall / -Fehler": "Maschine",
  "Krankheitsfall": "Mensch",
  "Warentransport": "Mensch",
  "Prozessoptimierung/ -Übertrag": "Methode",
  "Prozessprobleme/ -Abweichung": "Methode",
  "fehlende Kapazität Maschine": "Management",
  "fehlende Kapazität Mitarbeiter": "Mensch",
  "fehlende Kapazität PT/Entw.": "Mensch",
  "fehlende Kapazität AV/Steuerung/Einkauf": "Mensch",
  "fehlende Kapazität QS": "Mensch",
  "fehlende Kapazität nicht-OSM": "Mensch",
  "fehlende Arbeitsmaterialien": "Mensch",
  "fehlendes Messprotokoll": "Methode",
  "fehlender Informationsfluss": "Mensch",
  "fehlende AAW/PBX/REZ": "Methode",
  "fehlende Rückmeldung": "Mensch",
  "fehlendes Werkzeug": "Material",
  "Lieferprobleme extern": "Mitwelt",
  "Inventur": "Management",
  "Wartung/ Umbau": "Maschine",
  "warten auf Slot": "Mensch",
  "warten auf Testergebnisse": "Mensch",
  "Fehlermeldung aktiv": "Methode",
  "Kundenfreigabe steht aus": "Management",
  "Querqualifikation/ Aushilfe in Nachbarabteilung": "Mensch",
  "Keine Information zum Stillstand erhalten": "Mensch",
  "PK fehlerhaft": "Management",
  "Taktung (zwei Teile pro Arbeitsgang)": "Mensch",
  "fehlende Qualifikation Mitarbeiter": "Mensch",
  "Nacharbeit": "Methode",
  "Ausschuss": "Methode",
  "fehlende Prio": "Management",
  "QS Stopp": "Methode",
  "Facility Management/ Stromabschaltung": "Mitwelt",
};

export const secundaryCauses = {
  '"gelöscht" Priorisierung anderes Produkt': "Mensch",
  "Priorisierung OR-Soft": "Maschine",
  "HIP": "Methode",
  "Maschinenausfall / -Fehler": "Methode",
  "Krankheitsfall": "Methode",
  "Warentransport": "Management",
  "Prozessoptimierung/ -Übertrag": "Mitwelt",
  "Prozessprobleme/ -Abweichung": "Mensch",
  "fehlende Kapazität Maschine": "Maschine",
  "fehlende Kapazität Mitarbeiter": "Management",
  "fehlende Kapazität PT/Entw.": "Management",
  "fehlende Kapazität AV/Steuerung/Einkauf": "Management",
  "fehlende Kapazität QS": "Management",
  "fehlende Kapazität nicht-OSM": "Mitwelt",
  "fehlende Arbeitsmaterialien": "Management",
  "fehlendes Messprotokoll": "Mensch",
  "fehlender Informationsfluss": "Management",
  "fehlende AAW/PBX/REZ": "Mensch",
  "fehlende Rückmeldung": "Methode",
  "fehlendes Werkzeug": "Methode",
  "Lieferprobleme extern": "Mensch",
  "Inventur": "Mensch",
  "Wartung/ Umbau": "Methode",
  "warten auf Slot": "Management",
  "warten auf Testergebnisse": "Methode",
  "Fehlermeldung aktiv": "Mensch",
  "Kundenfreigabe steht aus": "Mitwelt",
  "Querqualifikation/ Aushilfe in Nachbarabteilung": "Management",
  "Keine Information zum Stillstand erhalten": "Management",
  "PK fehlerhaft": "Mensch",
  "Taktung (zwei Teile pro Arbeitsgang)": "Management",
  "fehlende Qualifikation Mitarbeiter": "Methode",
  "Nacharbeit": "Mensch",
  "Ausschuss": "Maschine",
  "fehlende Prio": "Methode",
  "QS Stopp": "Maschine",
  "Facility Management/ Stromabschaltung": "Management",
};
