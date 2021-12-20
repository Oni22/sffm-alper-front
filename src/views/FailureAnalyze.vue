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
                    <v-col cols="12">
                       <BarChart :height="100" :options="myOptions" :chartData="chartData" style="height:300px" />
                    </v-col>
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
                    <v-col cols="12">
                       <BarChart :height="100" :options="myOptions" :chartData="dispoChartData" style="height:300px" />
                    </v-col>   
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
                    <v-col cols="12">
                      <BarChart :height="100" :options="myOptions" :chartData="productChartData" style="height:300px" />
                    </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item :key="4" :value="'tab-' + 4">
            <v-card flat>
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <h3>Anteiliger Zeitverlust je Fehlerkategorie</h3>
                    <p class="font-weight-light">
                      In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Fehlerkategorien vorgenommen. 
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <DoughnutChart :height="100" :options="myOptions" :chartData="categoryChartData" style="height:300px" />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item :key="5" :value="'tab-' + 5">
            <v-card flat>
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <h3>Zeitverlust je KW in Tagen</h3>
                    <p class="font-weight-light">
                      In dieser Ansicht wird eine Analyse zum Zeitverlust für die KWs in Tagen vorgenommen. 
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <LineChart :height="100" :options="myOptions" :chartData="timestampChartData" style="height:300px" />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item :key="6" :value="'tab-' + 6">
            <v-card flat>
              <v-card-text>
                <v-row>
                    <v-col cols="4">
                      <h3>Kumulierter Zeitverlust je Fehlergrund in Tagen</h3>
                      <p class="font-weight-light">
                        In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Fehlergründe vorgenommen. 
                        Es wird ersichtlich, welche Fehlergründe die höchste gesamte Stillstandzeit generieren. 
                      </p>
                    </v-col>
                    <v-col cols="8">
                      <BarChart :height="100" :options="myOptions" :chartData="chartData" style="height:300px" />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                      <h3>Kumulierter Zeitverlust je Dispostufe in Tagen</h3>
                      <p class="font-weight-light">
                        In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Dispostufen vorgenommen. 
                        Es wird ersichtlich, welche Dispostufen die höchste gesamte Stillstandzeit generieren. 
                      </p>
                    </v-col>
                    <v-col cols="8">
                      <BarChart :height="100" :options="myOptions" :chartData="dispoChartData" style="height:300px" />
                    </v-col>
                </v-row>
                 <v-row>
                    <v-col cols="4">
                      <h3>Kumulierter Zeitverlust je Produkt in Tagen</h3>
                      <p class="font-weight-light">
                        In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Produkte vorgenommen. 
                        Es wird ersichtlich, welche Produkte die höchste gesamte Stillstandzeit generieren. 
                      </p>
                    </v-col>
                    <v-col cols="8">
                      <BarChart :height="100" :options="myOptions" :chartData="productChartData" style="height:300px" />
                    </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <h3>Anteiliger Zeitverlust je Fehlerkategorie</h3>
                    <p class="font-weight-light">
                      In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Fehlerkategorien vorgenommen. 
                    </p>
                  </v-col>
                  <v-col cols="8">
                    <DoughnutChart :height="100" :options="myOptions" :chartData="categoryChartData" style="height:300px" />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <h3>Zeitverlust je KW in Tagen</h3>
                    <p class="font-weight-light">
                      In dieser Ansicht wird eine Analyse zum Zeitverlust für die KWs in Tagen vorgenommen. 
                       (LINIENDIAGRAMM)
                    </p>
                  </v-col>
                  <v-col cols="8">
                    CHARTTYPE
                  </v-col>
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
import LineChart from "@/components/LineChart.vue";

@Component({
  name: "FailureAnalyze",
  components: {
    DoughnutChart,
    BarChart,
    LineChart,
  },
})
export default class FailureAnalyze extends Vue {
  data (){
    return{
      tab:null,
    }
  }
  chartData = {};
  dispoChartData = {};
  productChartData = {};
  categoryChartData = {};
  timestampChartData = {};
  
  myOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'top',
          clamp: true,
          color: '#000000',
            font: {
              weight: "bold"
            }
          },
      },
      scales: {
        xAxes: [{
            barPercentage: 0.7
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            min: 0,
            stepSize: 1
          }
        }]
      },
      layout: {
        padding: {
            top: 50,
        }
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 40
        }
      }
    }

  mounted() {
    this.loadFaults()
    this.loadDispoLevels()
    this.loadProducts()
    this.loadCategory()
    this.loadTimestamp()
  }

                      
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
          color: "#CD5C5C"
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

  async loadDispoLevels() {

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
          dispolevel: fault.dispolevel,
          color: "#DAA520"
        })
      }

      for(const item of items) {
        const i = item as any
        chartData.labels.push(i.dispolevel ?? "")
        chartData.datasets[0].data.push(i.days)
        chartData.datasets[0].backgroundColor.push(i.color)
      }

      this.dispoChartData = chartData

      console.log(this.dispoChartData)

    } catch(err) {
    }
  }

  async loadProducts() {

    const chartData = {
      labels:  new Array<string>(),
      datasets: [
        {
          backgroundColor: new Array<string>(),
          data: new Array<number>(),
          label: "Produkt-Analyse"
        },
      ],
    };

    try {
      const faults = await this.$api.getAllFaults();

      const items : any[] = []
      
      for(const fault of faults) {

        if(items.some(f => f.product === fault.product)) {
          continue
        }

        const allFaultTypes = faults.filter(f => f.product === fault.product)

        let days = 0

        for(const sameTypes of allFaultTypes) {
          days = days + (sameTypes?.estimatedDownTime ?? 0)
        }

        items.push({
          days: days,
          product: fault.product,
          color: "#6495ED"
        })
      }

      for(const item of items) {
        const i = item as any
        chartData.labels.push(i.product ?? "")
        chartData.datasets[0].data.push(i.days)
        chartData.datasets[0].backgroundColor.push(i.color)
      }

      this.productChartData = chartData

      console.log(this.productChartData)

    
    } catch(err) {

    }
  }

  async loadCategory() {

    const chartData = {
      labels:  new Array<string>(),
      datasets: [
        {
          backgroundColor: [
            'rgb(186,85,211)',
            'rgb(100,149,237)',
            'rgb(60,179,113)',
            'rgb(255,160,122)',
          ],
          data: new Array<number>(),
          label: "Kategorie-Analyse"
        },
      ],
    };

    try {
      const faults = await this.$api.getAllFaults();

      const items : any[] = []
      
      for(const fault of faults) {

        if(items.some(f => f.category === fault.category)) {
          continue
        }

        const allFaultTypes = faults.filter(f => f.category === fault.category)

        let days = 0

        for(const sameTypes of allFaultTypes) {
          days = days + (sameTypes?.estimatedDownTime ?? 0)
        }

        items.push({
          days: days,
          category: fault.category,
          color: "blue"
        })
      }

      for(const item of items) {
        const i = item as any
        chartData.labels.push(i.category ?? "")
        chartData.datasets[0].data.push(i.days)
        chartData.datasets[0].backgroundColor.push(i.color)
      }

      this.categoryChartData = chartData

      console.log(this.categoryChartData)

    
    } catch(err) {

    }
  }

  async loadTimestamp() {

    const chartData = {
      labels:  new Array<string>(),
      datasets: [
        {
          backgroundColor: new Array<string>(),
          data: new Array<number>(),
          label: "Kategorie-Analyse"
        },
      ],
    };

    try {
      const faults = await this.$api.getAllFaults();

      const items : any[] = []
      
      for(const fault of faults) {

        if(items.some(f => f.timestamp === fault.timestamp)) {
          continue
        }

        const allFaultTypes = faults.filter(f => f.timestamp === fault.timestamp)

        let days = 0

        for(const sameTypes of allFaultTypes) {
          days = days + (sameTypes?.estimatedDownTime ?? 0)
        }

        items.push({
          days: days,
          timestamp: fault.timestamp,
          color: "blue"
        })
      }

      for(const item of items) {
        const i = item as any
        chartData.labels.push(i.timestamp ?? "")
        chartData.datasets[0].data.push(i.days)
        chartData.datasets[0].backgroundColor.push(i.color)
      }

      this.timestampChartData = chartData

      console.log(this.timestampChartData)

    
    } catch(err) {

    }
  }

}
</script>

<style scoped>
</style>