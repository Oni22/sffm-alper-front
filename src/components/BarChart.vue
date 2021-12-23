<script>
// CommitChart.ts
import { Bar, mixins } from 'vue-chartjs'
// import ChartDataLabels from 'chartjs-plugin-datalabels'; 
// import { Chart } from 'chart.js'; 
const { reactiveProp } = mixins;
// Chart.plugins.register(ChartDataLabels);
export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ["chartData","options"],
  mounted () {
    // // Overwriting base render method with actual data.
    // this.addPlugin([ChartDataLabels]) 
    this.renderChart(this.chartData,this.options ?? {
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
            barPercentage: 0.4,
            stacked: true,
        }],
        yAxes: [{
          ticks: {
            stacked: true,
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
          boxWidth: 30
        }
      }
    })
  }
}

</script>