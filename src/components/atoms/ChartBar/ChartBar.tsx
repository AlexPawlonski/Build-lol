import { ReactElement } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, ChartOptions, ChartData, BarElement } from "chart.js";
import { StatItem } from "..";

export interface Props {
  data: {
    data: number;
    title: string;
    icon: string;
    color: string;
  }[];
  title: string;
}

const ChartBar = ({ data, title }: Props): ReactElement => {
  ChartJS.register(CategoryScale, LinearScale, BarElement);
  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        display: false,
        beginAtZero: true,
      },
      y: {
        stacked: true,
        display: false,
        beginAtZero: true,
      },
    },
  };

  const dataArray = data.map((item) => {
    return {
      label: item.title,
      data: [item.data],
      backgroundColor: item.color,
    };
  });

  const dataChart: ChartData<"bar"> = {
    labels: [title],
    datasets: dataArray,
  };

  return (
    <div className="w-full">
      <div className="w-full h-10 flex justify-between items-center">
        {data.map((item, key) => (
          <StatItem key={key} label={item.icon} value={item.data} />
        ))}
      </div>
      <div className="w-full h-14">
        <Bar options={options} data={dataChart} updateMode="resize" />
      </div>
    </div>
  );
};

export default ChartBar;
