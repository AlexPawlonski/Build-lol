import { ReactElement } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ChartOptions, ChartData, ArcElement, Tooltip } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
export interface Props {
  data: {
    data: number;
    label: string;
    color: string;
  }[];
}

const ChartCircle = ({ data }: Props): ReactElement => {
  ChartJS.register(ArcElement, ChartDataLabels, Tooltip);
  const options: ChartOptions<"doughnut"> = {
    plugins: {
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold",
          size: 20,
        },
        formatter: (value) => {
          return value !== 0 ? value : "";
        },
      },
    },
  };

  const dataChart: ChartData<"doughnut"> = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.data),
        borderWidth: 0,
        backgroundColor: data.map((item) => item.color),
      },
    ],
  };

  return (
    <div className="w-full lg:w-full lg:p-4 flex justify-center">
      <Doughnut data={dataChart} options={options} updateMode="resize" />
    </div>
  );
};

export default ChartCircle;
