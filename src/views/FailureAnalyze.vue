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
      <v-row>
        <v-col cols="12">
          <BarChart :height="100" :pieData="pieData" style="height:150px" />
        </v-col>
        <v-col cols="12">
          <h3>Kumulierte Stillstandzeit</h3>
          <p class="font-weight-light">
            In dieser Ansicht wird eine Analyse zu der kumulierten Stillstandzeit der Fehlergründe vorgenommen. 
            Es wird ersichtlich, welche Fehlergründe die höchste gesamte Stillstandzeit generieren. 
          </p>
        </v-col>
      </v-row>
      <v-row>
          <DoughnutChart :height="100" :chartData="chartData" style="height:150px" />
      </v-row>
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
  chartData = {};

  mounted() {
    this.loadFaults()
  }

  async loadFaults() {

    const chartData = {
      labels:  new Array<string>(),
      datasets: [
        {
          backgroundColor: new Array<string>(),
          data: new Array<number>(),
          label: "Fehler Analyse"
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