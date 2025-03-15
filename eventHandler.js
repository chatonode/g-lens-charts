// modalEventHandler.js
import {
  loadReportData,
  getVerticalBarChartData,
  initVerticalBarChart,
  getDoughnutChartData,
  initDoughnutChart,
} from './reportVisualization.js'

document.addEventListener('DOMContentLoaded', async () => {

  const reportData = await loadReportData()
  if (reportData) {
    initVerticalBarChart(getVerticalBarChartData(reportData))
    initDoughnutChart(getDoughnutChartData(reportData))
  }
  // When the Guide button is clicked, show the modal and load the chart
})
