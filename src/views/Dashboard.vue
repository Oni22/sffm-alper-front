<template>
    <v-app>
        <v-navigation-drawer
            v-model="drawer"
            app
        >
        
        <v-list>
            <v-list-item>
                <h1>Berliner Glas</h1>
            </v-list-item>
            <v-divider/>
            <v-list-item-group>
                <v-list-item>Aktuelle Fehler</v-list-item>
                <v-list-item>Fehler eintragen</v-list-item>
                <v-list-item>Fehler analysieren</v-list-item>
            </v-list-item-group>
        </v-list>

        </v-navigation-drawer>
        
        <v-app-bar app color="#1BA174">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>AIOn</v-toolbar-title>
        </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    </v-app>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        name: "Dashboard"
    })
    export default class Dashboard extends Vue {
        
        drawer = true
        
    }
</script>

<style scoped>

</style>