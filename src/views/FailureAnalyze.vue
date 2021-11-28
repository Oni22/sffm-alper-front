<template>
    <v-container fluid>
        <v-col cols="3">
            <v-select v-model="value" :items="items" label="Select Item" multiple>
                <template v-slot:selection="{ item, index }">
                    <v-chip v-if="index === 0">
                        <span>
                            {{ item }}
                        </span>
                    </v-chip>
                        <span v-if="index === 1" class="grey--text text-caption">
                            (+{{ value.length - 1 }} others)
                        </span>
                </template>
            </v-select>
            <v-select v-model="value" :items="items" label="Select Item" multiple>
                <template v-slot:selection="{ item, index }">
                    <v-chip v-if="index === 0">
                        <span>
                            {{ item }}
                        </span>
                    </v-chip>
                        <span v-if="index === 1" class="grey--text text-caption">
                            (+{{ value.length - 1 }} others)
                        </span>
                </template>
            </v-select>          
        </v-col>    
    </v-container>
</template>