import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
  import { Line } from 'react-chartjs-2'
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
type Props = {}
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };
const LineChart = (props: Props) => {
    const data:any = {
        labels:[1,2,7,8,10,20,31],
        datasets: [
          {
            label: 'Dataset 1',
            data: [0,1000,2000,3000,4000,5000,6000],
            borderColor: '#5185F7',
            backgroundColor: 'rgba(206, 221, 255, 0.7)',
            tension:0.5,
            fill:true,
            pointStyle: false,
          }
        ],
      };
  return (
    <div className='line-chart'>
        <div className='line-chart__header'>
            <div className='line-chart__header__left'>
                <h2>Bảng thống kê theo tuần</h2>
                <p>tháng 11</p>
            </div >
            <div className='line-chart__header__right'>
                <h2>Xem theo</h2>
                <select>
                    <option value="1">Ngày</option>
                    <option value="2">Tháng</option>
                    <option value="3">Năm</option>
                </select>
            </div>
        </div>
        <Line options={options} data={data} />
    </div>
  )
}

export default LineChart