<template>
  <div>
    <v-container>
        <h2>Fehler analysieren</h2>
        <v-divider/>
          <p class="font-weight-light">
                In diesem Fenster werden die eingetragenen Fehler analysiert. 
                Dabei werden diverse grafische Darstellungen aufgezeigt. um das Verständnis und den Überblick zur aktuellen Produktionssituation
                zu bieten. Die Visualisierung dient als ergänzendes Mittel zum Fehlereintrag und umfasst alle eingetragenen Fehlerzustände. 
          <p>
                <strong>Klicken Sie auf einen Reiter, um die gewünschte Ansicht zu erhalten. Über den Filter können Sie den Zeitraum der Betrachtung festlegen.</strong>     
          </p>
        <v-divider/>
              <v-col cols="12">  
                <v-row>
                <v-card>
                  <v-col cols="12">
                    <v-date-picker color="#00695C" v-model="dates" full-width range/>
                  </v-col>
                  <v-card-actions>
                    <v-btn @click="filterByDateRange()" >Filtern</v-btn>
                  </v-card-actions>
                </v-card>
                </v-row>
              </v-col>
        <v-col>
          <v-divider/>
        </v-col>      
        <v-tabs v-model="tab" fixed-tabs background-color="#00695C" dark>
          <v-tabs-slider></v-tabs-slider>
          <v-tab href="#tab-1">
           <h3>Fehlergrund</h3>
          </v-tab>
          <v-tab href="#tab-2">
           <h3>Arbeitgang</h3>
          </v-tab>
          <v-tab href="#tab-3">
            <h3>Dispostufe / Produkt</h3>
          </v-tab>
          <v-tab href="#tab-4">
            <h3>Kategorie / Bereich</h3>
          </v-tab>
          <v-tab href="#tab-5">
            <h3>Wochenverlauf</h3>
          </v-tab>
          <v-tab href="#tab-6">
            <h3>Alle Ansichten</h3>
          </v-tab>
        </v-tabs>

        <v-col cols="12">
        <v-tabs-items v-model="tab">
          <v-tab-item :key="1" :value="'tab-' + 1">
            <v-card flat>
              <v-card-text>
                <v-row>
                    <v-col cols="12">
                      <h3>Kumulierter Zeitverlust je Fehlergrund in Tagen</h3>
                      <p class="font-weight-light">
                        In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Fehlergründe vorgenommen. 
                        Es wird ersichtlich, welche Fehlergründe die höchste gesamte Stillstandzeit generieren. Die Betrachtung 
                        der Fehlergründe zeigt die wesentlichen Stellschrauben für die Fertigung auf. Eine detaillierte Orientierung
                        bezüglich der Fehlersituation erfolgt innerhalb des PDCA-Zyklus und den Sofort- und Abstellmaßnahmen. 
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
                      <h3>Kumulierter Zeitverlust je Arbeitsgang in Tagen</h3>
                      <p class="font-weight-light">
                        In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Arbeitgänge vorgenommen. 
                        Es wird ersichtlich, welche Arbeitgänge eine Stillstandzeit generieren. Mit der Verfolgung dieser 
                        Ansicht können organisatorische und planerische Engpässe erkannt werden. 
                      </p>
                    </v-col>
                    <v-col cols="12">
                        <BarChart :height="100" :options="myOptions" :chartData="chartDataPIE" style="height:300px" />
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
                        In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Produkte und Dispostufen vorgenommen. 
                        Mit dieser Ansicht können die herausfordernden Produkte und fehleranfälligen Dispostufen erkannt werden, 
                        um die Taktung und Planung dementsprechend zu gestalten. 
                      </p>
                    </v-col>
                    <v-col cols="12">
                      <BarChart :height="100" :options="myOptions" :chartData="productChartData" style="height:300px" />
                    </v-col>
                    <v-col cols="12">
                       <BarChart :height="100" :options="myOptions" :chartData="dispoChartData" style="height:300px" />
                    </v-col> 
                    <v-col cols="6">
                      <DoughnutChart :height="100" :options="myOptions" :chartData="productChartDataPIE" style="height:300px" />
                    </v-col>
                    <v-col cols="6">
                      <DoughnutChart :height="100" :options="myOptions" :chartData="dispolevelChartDataPIE" style="height:300px" />
                    </v-col>
                    <v-col cols="12">
                      Wochenverlauf für Fehler der Produkte (wann wurde ein Fehler für das Produkt eingetragen) StackedBarChart mit den Produkten pro Woche
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
                    <h3>Anteiliger Zeitverlust je Fehlerkategorie und Bereich</h3>
                    <p class="font-weight-light">
                      In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Fehlerkategorien und Bereiche vorgenommen. 
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <DoughnutChart :height="100" :options="myOptions" :chartData="categoryChartData" style="height:300px" />
                  </v-col><v-col cols="6">
                    <DoughnutChart :height="100" :options="myOptions" :chartData="departmentChartData" style="height:300px" />
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
                    <v-col cols="12">
                      <h3>Kumulierter Zeitverlust je Fehlergrund in Tagen</h3>
                      <p class="font-weight-light">
                        In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Fehlergründe vorgenommen. 
                        Es wird ersichtlich, welche Fehlergründe die höchste gesamte Stillstandzeit generieren. Die Betrachtung 
                        der Fehlergründe zeigt die wesentlichen Stellschrauben für die Fertigung auf. Eine detaillierte Orientierung
                        bezüglich der Fehlersituation erfolgt innerhalb des PDCA-Zyklus und den Sofort- und Abstellmaßnahmen.  
                      </p>
                      <BarChart :height="100" :options="myOptions" :chartData="chartData" style="height:300px" />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                      <h3>Kumulierter Zeitverlust je Arbeitgang in Tagen</h3>
                      <p class="font-weight-light">
                         In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Arbeitgänge vorgenommen. 
                        Es wird ersichtlich, welche Arbeitgänge eine Stillstandzeit generieren. Mit der Verfolgung dieser 
                        Ansicht können organisatorische und planerische Engpässe erkannt werden.  
                      </p>
                        <BarChart :height="100" :options="myOptions" :chartData="chartDataPIE" style="height:300px" />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                      <h3>Kumulierter Zeitverlust je Dispostufe in Tagen</h3>
                      <p class="font-weight-light">
                        In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Dispostufen vorgenommen. 
                        Mit dieser Ansicht können die fehleranfälligen Dispostufen erkannt werden, 
                        um die Taktung und Planung dementsprechend zu gestalten.
                      </p>
                      <BarChart :height="100" :options="myOptions" :chartData="dispoChartData" style="height:300px" />
                    </v-col>
                </v-row>
                 <v-row>
                    <v-col cols="12">
                      <h3>Kumulierter Zeitverlust je Produkt in Tagen</h3>
                      <p class="font-weight-light">
                        In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Produkte vorgenommen. 
                        Mit dieser Ansicht können die herausfordernden Produkte erkannt werden, 
                        um die Taktung und Planung dementsprechend zu gestalten.
                      </p>
                      <BarChart :height="100" :options="myOptions" :chartData="productChartData" style="height:300px" />
                    </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <h3>Anteiliger Zeitverlust je Fehlerkategorie</h3>
                    <p class="font-weight-light">
                      In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Fehlerkategorien vorgenommen. 
                    </p>
                    <DoughnutChart :height="100" :options="myOptions" :chartData="categoryChartData" style="height:300px" />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <h3>Zeitverlust je KW in Tagen</h3>
                    <p class="font-weight-light">
                      In dieser Ansicht wird eine Analyse zum Zeitverlust für die KWs in Tagen vorgenommen. 
                    </p>
                     <LineChart :height="100" :options="myOptions" :chartData="timestampChartData" style="height:300px" />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        </v-col>   
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DoughnutChart from "@/components/DoughnutChart.vue";
import BarChart from "@/components/BarChart.vue";
import LineChart from "@/components/LineChart.vue";
import StackedBarChart from "@/components/StackedBarChart.vue";
import Fault from "@/api/model/fault";

@Component({
  name: "FailureAnalyze",
  components: {
    DoughnutChart,
    BarChart,
    LineChart,
    StackedBarChart
  },
})
export default class FailureAnalyze extends Vue {
  tab = 0
  dates : string[] = []
  faults : Fault[] = []
  faultsFiltered : Fault[] = []
  chartData = {};
  chartDataPIE = {};
  workplaceData = {};
  dispoChartData = {};
  dispolevelChartDataPIE = {};
  productChartData = {};
  productChartDataPIE = {};
  categoryChartData = {};
  timestampChartData = {};
  departmentChartData = {};
  
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

  async mounted() {
    await this.loadData()
    this.drawGraphs()
  }

  drawGraphs() {
    this.loadFaultsBAR()
    this.loadDispoLevels()
    this.loadDispoLevelsPIE()
    this.loadProducts()
    this.loadProductsPIE()
    this.loadCategory()
    this.loadTimestamp()
    this.loadWorkplaces()
    this.loadDepartment()
  }

  async loadData() {
    this.faults = await this.$api.getAllFaults();
    this.faultsFiltered = this.faults
  }
                      
  async loadFaultsBAR() {
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
      const items : any[] = []
    
      for(const fault of this.faultsFiltered) {
        if(items.some(f => f.reason === fault.reason)) {
          continue
        }
        const allFaultTypes = this.faultsFiltered.filter(f => f.reason === fault.reason)
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

  async loadWorkplaces() {
    const chartData = {
      labels:  new Array<string>(),
      datasets: [
        {
          backgroundColor: new Array<string>(),
          data: new Array<number>(),
          label: "Arbeitgang-Analyse"
        },
      ],
    };
    try {
      const items : any[] = []
      
      for(const fault of this.faultsFiltered) {
        if(items.some(f => f.workplace === fault.workplace)) {
          continue
        }
        const allFaultTypes = this.faultsFiltered.filter(f => f.workplace === fault.workplace)
        let days = 0
        
        for(const sameTypes of allFaultTypes) {
          days = days + (sameTypes?.estimatedDownTime ?? 0)
        }
        items.push({
          days: days,
          workplace: fault.workplace,          
          color: "#558B2F"
        })
      }
      for(const item of items) {
        const i = item as any
        chartData.labels.push(i.workplace ?? "")
        chartData.datasets[0].data.push(i.days)
        chartData.datasets[0].backgroundColor.push(i.color)
      }
      this.chartDataPIE = chartData
      console.log(this.chartDataPIE)

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
      const items : any[] = []
    
      for(const fault of this.faultsFiltered) {
        if(items.some(f => f.dispolevel === fault.dispolevel)) {
          continue
        }
        const allFaultTypes = this.faultsFiltered.filter(f => f.dispolevel === fault.dispolevel)
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

  async loadDispoLevelsPIE() {
    const chartData = {
      labels:  new Array<string>(),
      datasets: [
        {
          backgroundColor: [
            'rgb(50,179,113)',
            'rgb(225,160,122)',
            'rgb(150,85,211)',
            'rgb(60,149,237)',
            'rgb(100,149,237)',
            'rgb(176,224,230)',
            'rgb(128,128,128)',
            'rgb(210,105,30)',
            'rgb(160,82,45)',
            'rgb(205,90,122)',
            'rgb(170,70,211)',
            'rgb(80,149,100)',
            'rgb(53,119,113)',
            'rgb(40,100,113)',            
            'rgb(215,20,122)',
            'rgb(100,185,211)',
            'rgb(70,149,237)',
            'rgb(48,19,113)',
            'rgb(235,80,122)',
            'rgb(140,35,211)',
            'rgb(45,149,237)',
            'rgb(238,130,238)',
            'rgb(135,206,250)',
            'rgb(186,115,211)',
            
          ],
          data: new Array<number>(),
          label: "-Analyse"
        },
      ],
    };

    try {
      const items : any[] = []
      
      for(const fault of this.faultsFiltered) {
        if(items.some(f => f.dispolevel === fault.dispolevel)) {
          continue
        }
        const allFaultTypes = this.faultsFiltered.filter(f => f.dispolevel === fault.dispolevel)
        let days = 0

        for(const sameTypes of allFaultTypes) {
          days = days + (sameTypes?.estimatedDownTime ?? 0)
        }
        items.push({
          days: days,
          dispolevel: fault.dispolevel,
          color: "#CD5C5C"
        })
      }

      for(const item of items) {
        const i = item as any
        chartData.labels.push(i.dispolevel ?? "")
        chartData.datasets[0].data.push(i.days)
        chartData.datasets[0].backgroundColor.push(i.color)
      }
      this.dispolevelChartDataPIE = chartData
      console.log(this.dispolevelChartDataPIE)

    } catch (err) {}

  }

  filterByDateRange() {

    if(this.dates.length == 2) {
      let startDate = new Date(this.dates[0])
      let endDate = new Date(this.dates[1])

      if(startDate.getTime() > endDate.getTime()) {
        startDate = new Date(this.dates[1])
        endDate = new Date(this.dates[0])
      }

      startDate.setSeconds(0)
      startDate.setMinutes(0)
      startDate.setHours(0)
      startDate.setMilliseconds(0)
      endDate.setSeconds(0)
      endDate.setMinutes(0)
      endDate.setHours(0)
      endDate.setMilliseconds(0)


      this.faultsFiltered = this.faults.filter(f => {
        const date = new Date(f.timestamp ?? "")
        date.setSeconds(0)
        date.setMinutes(0)
        date.setHours(0)
        date.setMilliseconds(0)
        return date.getTime() >= startDate.getTime() && date.getTime() <= endDate.getTime()
      })

      console.log(this.faultsFiltered)

    }

    this.drawGraphs()

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
      const items : any[] = []
      
      for(const fault of this.faultsFiltered) {
        if(items.some(f => f.product === fault.product)) {
          continue
        }
        const allFaultTypes = this.faultsFiltered.filter(f => f.product === fault.product)
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

  async loadProductsPIE() {
    const chartData = {
      labels:  new Array<string>(),
      datasets: [
        {
          backgroundColor: [
            'rgb(238,130,238)',
            'rgb(135,206,250)',
            'rgb(186,115,211)',
            'rgb(50,179,113)',
            'rgb(225,160,122)',
            'rgb(40,100,113)',            
            'rgb(215,20,122)',
            'rgb(100,185,211)',
            'rgb(150,85,211)',
            'rgb(60,149,237)',
            'rgb(100,149,237)',
            'rgb(160,82,45)',
            'rgb(205,90,122)',
            'rgb(170,70,211)',
            'rgb(80,149,100)',
            'rgb(53,119,113)',
            'rgb(70,149,237)',
            'rgb(48,19,113)',
            'rgb(235,80,122)',
            'rgb(140,35,211)',
            'rgb(45,149,237)',
            'rgb(176,224,230)',
            'rgb(128,128,128)',
            'rgb(210,105,30)',
            
          ],
          data: new Array<number>(),
          label: "-Analyse"
        },
      ],
    };

    try {
      const items : any[] = []
      
      for(const fault of this.faultsFiltered) {
        if(items.some(f => f.product === fault.product)) {
          continue
        }
        const allFaultTypes = this.faultsFiltered.filter(f => f.product === fault.product)
        let days = 0

        for(const sameTypes of allFaultTypes) {
          days = days + (sameTypes?.estimatedDownTime ?? 0)
        }
        items.push({
          days: days,
          product: fault.product,
          color: "#CD5C5C"
        })
      }

      for(const item of items) {
        const i = item as any
        chartData.labels.push(i.product ?? "")
        chartData.datasets[0].data.push(i.days)
        chartData.datasets[0].backgroundColor.push(i.color)
      }
      this.productChartDataPIE = chartData
      console.log(this.productChartDataPIE)

    } catch (err) {}

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
      const items : any[] = []
      
      for(const fault of this.faultsFiltered) {
        if(items.some(f => f.category === fault.category)) {
          continue
        }
        const allFaultTypes = this.faultsFiltered.filter(f => f.category === fault.category)
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

  async loadDepartment() {

    const chartData = {
      labels:  new Array<string>(),
      datasets: [
        {
          backgroundColor: [
            'rgb(250,128,114)',
            'rgb(255,165,0)',
            'rgb(238,232,170)',
            'rgb(128,128,0)',
            'rgb(144,238,144)',
            'rgb(32,178,170)',
            'rgb(64,224,208)',
            'rgb(175,238,238)',
            'rgb(250,128,114)',
            'rgb(255,165,0)',
            'rgb(238,232,170)',
            'rgb(128,128,0)',
            'rgb(144,238,144)',
            'rgb(32,178,170)',
            'rgb(64,224,208)',
            'rgb(175,238,238)',
          ],
          data: new Array<number>(),
          label: "Beriechs-Analyse"
        },
      ],
    };

    try {
      const items : any[] = []
      
      for(const fault of this.faultsFiltered) {
        if(items.some(f => f.department === fault.department)) {
          continue
        }
        const allFaultTypes = this.faultsFiltered.filter(f => f.department === fault.department)
        let days = 0

        for(const sameTypes of allFaultTypes) {
          days = days + (sameTypes?.estimatedDownTime ?? 0)
        }
        items.push({
          days: days,
          department: fault.department,
          color: "blue"
        })
      }

      for(const item of items) {
        const i = item as any
        chartData.labels.push(i.department ?? "")
        chartData.datasets[0].data.push(i.days)
        chartData.datasets[0].backgroundColor.push(i.color)
      }
      this.departmentChartData = chartData
      console.log(this.departmentChartData)

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
          label: "Zeitraum-Analyse"
        },
      ],
    };

    try {
      const items : any[] = []
      
      for(const fault of this.faultsFiltered) {
        if(items.some(f => {
          const timeStamp = new Date(f.jsDate ?? "")
          const currentTimeStamp = new Date(fault.timestamp ?? "")
          timeStamp.setMilliseconds(0)
          timeStamp.setSeconds(0)
          timeStamp.setHours(0)
          timeStamp.setMinutes(0)
          currentTimeStamp.setMilliseconds(0)
          currentTimeStamp.setSeconds(0)
          currentTimeStamp.setHours(0)
          currentTimeStamp.setMinutes(0)
          return currentTimeStamp.getTime() === timeStamp.getTime()
        })) {
          continue
        }
        const allFaultTypes = this.faultsFiltered.filter(f => {
          const timeStamp = new Date(f.timestamp ?? "")
          const currentTimeStamp = new Date(fault.timestamp ?? "")
          timeStamp.setMilliseconds(0)
          timeStamp.setSeconds(0)
          timeStamp.setHours(0)
          timeStamp.setMinutes(0)
          currentTimeStamp.setMilliseconds(0)
          currentTimeStamp.setSeconds(0)
          currentTimeStamp.setHours(0)
          currentTimeStamp.setMinutes(0)
          return currentTimeStamp.getTime() === timeStamp.getTime()
        })
        let days = 0

        for(const sameTypes of allFaultTypes) {
          days = days + (sameTypes?.estimatedDownTime ?? 0)
        }
        const date = new Date(fault.timestamp ?? "")
        items.push({
          days: days,
          timestamp: date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear(),
          jsDate: date.toISOString(),
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