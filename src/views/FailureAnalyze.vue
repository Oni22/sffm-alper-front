<template>
  <div>
    <v-row>
      <v-col>
        <BarChart :height="100" :chartData="chartData" style="height:200px" />
      </v-col>
    </v-row>
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
          color: "#ff9021"
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