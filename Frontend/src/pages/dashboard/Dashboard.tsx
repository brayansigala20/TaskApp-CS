import { Line } from 'react-chartjs-2'
import {
  Chart as chartjs,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LinearScale
} from 'chart.js'
chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)
import { useReports } from '../../hooks'
import { useEffect } from 'react'
const bene = [0]
const Months = [
  { month: 'Enero', number: '01' },
  { month: 'Febrero', number: '02' },
  { month: 'Marzo', number: '03' },
  { month: 'Abril', number: '04' },
  { month: 'Mayo', number: '05' },
  { month: 'Junio', number: '06' },
  { month: 'Julio', number: '07' },
  { month: 'Agosto', number: '08' },
  { month: 'Septimbre', number: '09' },
  { month: 'Octubre', number: '10' },
  { month: 'Noviembre', number: '11' },
  { month: 'Diciembre', number: '12' }]


const myOptions = {
  scales: {
    y: {
      min: 0
    },
    x: {
      ticks: { color: 'blue' }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}
const Dashboard = () => {
  const myData = {
    labels: Months.map(month => month.month),
    datasets: [{
      label: 'completos',
      data: bene,
      tension: 0.5,
      fill: true,
      borderColor: 'rgb(255,99,132)',
      backgroundColor: 'rgba(255,99,132,0.5)',
      pointRadius: 5,
      pointBorderColor: 'rgba(255,99,132)',
      pointBackgroudColor: 'rgba(255,99,132)'
    }]
  }
  // const { reports } = useReports()
  // useEffect(() => {
  //   for (let i = 0; i <= Months.length - 1; i++) {
  //     let dateReport = reports?.
  //     filter((report: any) => report.date.split('-')[1].toString() === Months[i].number)
  //     let rep = {...dateReport}
  //     console.log(rep)
  //   }
  // }, [])
  // console.log(reports.filter((report:any)=> report.state === true).map((report:any)=> report.state).length)
  return (
    <>
      <Line data={myData} options={myOptions} />
    </>
  )
}

export default Dashboard