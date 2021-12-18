<template>
  <div>
    <v-container>
        <h2>Fehler analysieren</h2>
        <v-divider/>
          <p class="font-weight-light">
                In diesem Fenster werden die eingetragenen Fehler analysiert. 
                Dabei werden diverse grafische Darstellungen aufgezeigt. um das Verständnis und den Überblick zur aktuellen Produktionssituation
                zu bieten. Die Visualisierung dient als ergänzendes Mittel zum Fehlereintrag und umfasst alle eingetragenen Fehlerzustände.    
          </p>
          <v-card>
            <v-card-text>         
              <v-col cols="12">  
                ZEITLICHER FILTER!!!!
              </v-col>
            </v-card-text>
          </v-card>

        <v-tabs v-model="tab" fixed-tabs background-color="#00695C" dark>
          <v-tabs-slider></v-tabs-slider>
          <v-tab href="#tab-1">
           <h3>Fehlergrund</h3>
          </v-tab>
          <v-tab href="#tab-2">
           <h3>Dispostufe</h3>
          </v-tab>
          <v-tab href="#tab-3">
            <h3>Produkt</h3>
          </v-tab>
          <v-tab href="#tab-4">
            <h3>Fehlerkategorie</h3>
          </v-tab>
          <v-tab href="#tab-5">
            <h3>Wochenverlauf</h3>
          </v-tab>
          <v-tab href="#tab-6">
            <h3>Alle Ansichten</h3>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item :key="1" :value="'tab-' + 1">
            <v-card flat>
              <v-card-text>
                <v-row>
                    <v-col cols="12">
                      <h3>Kumulierter Zeitverlust je Fehlergrund in Tagen</h3>
                      <p class="font-weight-light">
                        In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Fehlergründe vorgenommen. 
                        Es wird ersichtlich, welche Fehlergründe die höchste gesamte Stillstandzeit generieren. 
                      </p>
                    </v-col>
                </v-row>
                <v-row>
                    <BarChart :height="100" :chartData="chartData" style="height:150px" />
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item :key="2" :value="'tab-' + 2">
            <v-card flat>
              <v-card-text>
                <v-row>
                    <v-col cols="12">
                      <h3>Kumulierter Zeitverlust je Dispostufe in Tagen</h3>
                      <p class="font-weight-light">
                        In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Dispostufen vorgenommen. 
                        Es wird ersichtlich, welche Dispostufen die höchste gesamte Stillstandzeit generieren. 
                      </p>
                    </v-col>
                </v-row>
                <v-row>
                    <BarChart :height="100" :chartData="chartData" style="height:150px" />
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item :key="3" :value="'tab-' + 3">
            <v-card flat>
              <v-card-text>
                <v-row>
                    <v-col cols="12">
                      <h3>Kumulierter Zeitverlust je Produkt in Tagen</h3>
                      <p class="font-weight-light">
                        In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Produkte vorgenommen. 
                        Es wird ersichtlich, welche Produkte die höchste gesamte Stillstandzeit generieren. 
                      </p>
                    </v-col>
                </v-row>
                <v-row>
                    BARCHART
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item :key="4" :value="'tab-' + 4">
            <v-card flat>
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <h3>Zeitverlust je KW in Tagen</h3>
                    <p class="font-weight-light">
                      In dieser Ansicht wird eine Analyse zum Zeitverlust für die KWs in Tagen vorgenommen. 
                      LINECHART (LINIENDIAGRAMM)
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                    CHARTTYPE
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item :key="5" :value="'tab-' + 5">
            <v-card flat>
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <h3>Anteiliger Zeitverlust je Fehlerkategorie</h3>
                    <p class="font-weight-light">
                      In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Fehlerkategorien vorgenommen. 
                      PIECHART/ DOUGHNUTCHART
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                    CHARTTYPE
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item :key="6" :value="'tab-' + 6">
            <v-card flat>
              <v-card-text>
                <v-row>
                    <v-col cols="12">
                      <h3>Kumulierter Zeitverlust je Fehlergrund in Tagen</h3>
                      <p class="font-weight-light">
                        In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Fehlergründe vorgenommen. 
                        Es wird ersichtlich, welche Fehlergründe die höchste gesamte Stillstandzeit generieren. 
                      </p>
                    </v-col>
                </v-row>
                <v-row>
                    <BarChart :height="100" :chartData="chartData" style="height:150px" />
                </v-row>
                <v-row>
                    <v-col cols="12">
                      <h3>Kumulierter Zeitverlust je Dispostufe in Tagen</h3>
                      <p class="font-weight-light">
                        In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Dispostufen vorgenommen. 
                        Es wird ersichtlich, welche Dispostufen die höchste gesamte Stillstandzeit generieren. 
                      </p>
                    </v-col>
                </v-row>
                <v-row>
                    BARCHART
                </v-row>
                 <v-row>
                    <v-col cols="12">
                      <h3>Kumulierter Zeitverlust je Produkt in Tagen</h3>
                      <p class="font-weight-light">
                        In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Produkte vorgenommen. 
                        Es wird ersichtlich, welche Produkte die höchste gesamte Stillstandzeit generieren. 
                      </p>
                    </v-col>
                </v-row>
                <v-row>
                    BARCHART
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <h3>Zeitverlust je KW in Tagen</h3>
                    <p class="font-weight-light">
                      In dieser Ansicht wird eine Analyse zum Zeitverlust für die KWs in Tagen vorgenommen. 
                      LINECHART (LINIENDIAGRAMM)
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                    CHARTTYPE
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <h3>Anteiliger Zeitverlust je Fehlerkategorie</h3>
                    <p class="font-weight-light">
                      In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Fehlerkategorien vorgenommen. 
                      PIECHART/ DOUGHNUTCHART
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                    CHARTTYPE
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>   
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DoughnutChart from "@/components/DoughnutChart.vue";
import BarChart from "@/components/BarChart.vue";

@Component({
  name: "FailureAnalyze",
  components: {
    DoughnutChart,
    BarChart,
  },
})
export default class FailureAnalyze extends Vue {
  data (){
    return{
      tab:null,
    }
  }
  chartData = {};
  

  mounted() {
    this.loadFaults()
  }

/*    async loadDispoLevels() {

    const chartData = {
      labels:  new Array<string>(),
      datasets: [
        {
          backgroundColor: new Array<string>(),
          data: new Array<number>(),
          label: "Dispostufen-Analyse"
        },
      ],
    };

    try {
      const faults = await this.$api.getAllFaults();

      const items : any[] = []
      
      for(const fault of faults) {

        if(items.some(f => f.dispolevel === fault.dispolevel)) {
          continue
        }

        const allFaultTypes = faults.filter(f => f.dispolevel === fault.dispolevel)

        let days = 0

        for(const sameTypes of allFaultTypes) {
          days = days + (sameTypes?.estimatedDownTime ?? 0)
        }

        items.push({
          days: days,
          reason: fault.dispolevel,
          color: "green"
        })
      }

      for(const item of items) {
        const i = item as any
        chartData.labels.push(i.dispolevel ?? "")
        chartData.datasets[0].data.push(i.days)
        chartData.datasets[0].backgroundColor.push(i.color)
      }

      this.chartData = chartData

      console.log(this.chartData)

    }
  }
*/  
                      
  async loadFaults() {

    const chartData = {
      labels:  new Array<string>(),
      datasets: [
        {
          backgroundColor: new Array<string>(),
          data: new Array<number>(),
          label: "Fehlergrund-Analyse"
        },
      ],
    };

    try {
      const faults = await this.$api.getAllFaults();

      const items : any[] = []
      
      for(const fault of faults) {

        if(items.some(f => f.reason === fault.reason)) {
          continue
        }

        const allFaultTypes = faults.filter(f => f.reason === fault.reason)

        let days = 0

        for(const sameTypes of allFaultTypes) {
          days = days + (sameTypes?.estimatedDownTime ?? 0)
        }

        items.push({
          days: days,
          reason: fault.reason,
          color: "#FFA726"
        })
      }

      for(const item of items) {
        const i = item as any
        chartData.labels.push(i.reason ?? "")
        chartData.datasets[0].data.push(i.days)
        chartData.datasets[0].backgroundColor.push(i.color)
      }

      this.chartData = chartData

      console.log(this.chartData)

    } catch (err) {}
  }
}
</script>

<style scoped>
</style>