<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-combobox v-model="select" :items="faults" label="Wählen Sie den Fehlergrund aus:" clearable>
          </v-combobox>
        </v-col>
        <v-col cols="6">
          <v-combobox v-model="select" :items="faults" label="Wählen Sie die Fehlerkategorie aus:" clearable>
          </v-combobox>
        </v-col> 
        <v-col cols="6">
          <v-combobox v-model="select" :items="faults" label="Wählen Sie den Arbeitsgang aus:" clearable>
          </v-combobox>
        </v-col> 
        <v-col cols="6">
          <v-combobox v-model="select" :items="faults" label="Wählen Sie den Bereich aus:" clearable>
          </v-combobox>
        </v-col> 
        <v-col cols="6">
          <v-combobox v-model="select" :items="faults" label="Wählen Sie das Produkt aus:" clearable>
          </v-combobox>
        </v-col>
        <v-col cols="6">
          <v-combobox v-model="select" :items="faults" label="Wählen Sie die Dispostufe aus:" clearable>
          </v-combobox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="description" :rules="rules" counter maxlength="150" label="Geben Sie eine Beschreibung zur Fehlerentstehung ein:" >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-checkbox v-model="enabled" hide details class="shrink mr-2 mt-0" label="Ich bestätige die Überprüfung der eingegebenen Daten">
        </v-checkbox>
      </v-row>
      <v-row>        
        <v-btn>
          weiter
        </v-btn>
      </v-row>  
    </v-container>
  </div>
</template>
