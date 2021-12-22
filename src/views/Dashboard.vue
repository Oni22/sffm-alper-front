<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app color="#B2DFDB">
            <v-list>
                <v-list-item>  
                    <h1>Berliner Glas</h1> 
                </v-list-item>
                <v-divider/>
                <v-list-item-group>
                    <v-list-item v-for="route in routes" :key="route.path" @click="openPage(route.path)" >{{route.name}}
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="#009B8B">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title >AIOn - Artifical Intelligence Online</v-toolbar-title>
        </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    </v-app>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Routes } from '@/router/utils'

    @Component({
        name: "Dashboard"
    })
    export default class Dashboard extends Vue {
        
        drawer = true

        routes = [
            {
                name: "Aktuelle Fehler",
                path: Routes.CURRENT_FAULT
            },
            {
                name: "Aktuelle Problemlösungen",
                path: Routes.CURRENT_PDCA
            },
            {
                name: "Fehler eintragen",
                path: Routes.NEW_FAILURE_ENTRY
            },
            {
                name: "Fehler analysieren",
                path: Routes.FAILURE_ANALYZE
            },
            {
                name: "Fehlerliste",
                path: Routes.FAILURE_LIST
            },
            {
                name: "Informationen zur App",
                path: Routes.APP_INFO
            }
            
        ]

        openPage(path: string) {
            this.$router.push(path)
        }
        
    }
</script>

<style scoped>

</style>