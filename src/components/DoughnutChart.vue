<script>
// CommitChart.ts
import { Doughnut, mixins } from 'vue-chartjs'
// import ChartDataLabels from 'chartjs-plugin-datalabels'; 
// import { Chart } from 'chart.js'; 
const { reactiveProp } = mixins;
// Chart.plugins.register(ChartDataLabels);
export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ["chartData"],
  mounted () {
    // // Overwriting base render method with actual data.
    // this.addPlugin([ChartDataLabels]) 
    console.log(this.chartData)
    this.renderChart(this.chartData,{
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        arc: {
          borderWidth: 0,
          borderColor:'#333'
        }
      },
      plugins: {
        datalabels: {
          color: '#FFFFFF',
            font: {
              weight: "bold"
            }
          },
      },
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 20
        }
      }
    })
  }
}

</script>