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

const myOptions = {
  scales: {
    y: {
      min: 0,
      max: 30
    },
    x: {
      ticks: { color: 'white' }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}
const Dashboard = () => {
  const { reports } = useReports()
  const func = () => {
    const arreglosPorMes: any = {};
    reports.forEach((obj: any) => {
      const fecha = new Date(obj.date);
      const year = fecha.getFullYear();
      const month = fecha.getMonth() + 1;
      const clave = `${year}-${month}`;
      if (!arreglosPorMes[clave]) {
        arreglosPorMes[clave] = [];
      }
      arreglosPorMes[clave].push(obj);
    });
    const arreglosPorMesArray = Object.keys(arreglosPorMes).map((clave) => ({
      fecha: clave,
      objetos: arreglosPorMes[clave],
    }));

    return arreglosPorMesArray.map(data => [[Object.values(data)[0], Object.values(data)[1].length]][0]);
  }
  let bene = func()
  const myData = {
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
  return (
    <>
      <Line data={myData} options={myOptions} />
    </>
  )
}

export default Dashboard