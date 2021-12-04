<template>
  <div>
    <v-container>
      <v-form>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-toolbar color="success" flat>Plan</v-toolbar>
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="Bezeichnung" v-model="title" />
                  </v-col>
                  <v-col cols="12">
                    <v-combobox
                      v-model="newCauses"
                      chips
                      dense
                      clearable
                      label="Ursachen"
                      hint="Befehls text"
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
                  <v-col cols="12">
                    <v-combobox
                      v-model="category"
                      chips
                      dense
                      clearable
                      label="Ursachenbereich"
                      hint="Befehls text"
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
                  <v-col cols="12">
                    <v-text-field
                      type="number"
                      label="Stillstandzeit"
                      v-model="downtime"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-combobox
                      v-model="ressources"
                      chips
                      dense
                      clearable
                      label="Ressourcen"
                      hint="Befehls text"
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
                  </v-col>
                  <v-col cols="12">
                    <v-combobox
                      v-model="goals"
                      chips
                      dense
                      clearable
                      label="Ziele"
                      hint="Befehls text"
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
                          @click:close="removeGoals(item)"
                        >
                          <strong>{{ item }}</strong>
                        </v-chip>
                      </template>
                    </v-combobox>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card>
              <v-toolbar flat color="success">Sofortmaßnahmen</v-toolbar>
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="10">
                    <v-text-field label="Sofortmaßnahmen" v-model="currentShortTimeAction.name" />
                  </v-col>
                  <v-col cols="2">
                    <v-btn @click="addShortTimeAction()" block color="success"
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
          </v-col>
        </v-row>

         <v-row>
          <v-col cols="12">
            <v-card>
              <v-toolbar flat color="success">Abstellmaßnahmen</v-toolbar>
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="10">
                    <v-text-field label="Sofortmaßnahmen" v-model="currentLongTimeAction.name" />
                  </v-col>
                  <v-col cols="2">
                    <v-btn @click="addLongTimeAction()" block color="success"
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
          </v-col>
        </v-row>

      </v-form>
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
  goals: Array<string> = [];
  currentShortTimeAction : any = {
    name: "",
    checked: false
  };
   currentLongTimeAction : any = {
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

  removeGoals(item: string) {
    const index = this.goals.indexOf(item);
    this.goals.splice(index, 1);
    this.goals = [...this.goals];
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
}
</script>

<style scoped>
</style>