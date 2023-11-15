import { ReactElement } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, ChartOptions } from "chart.js";
import { useTranslation } from "react-i18next";

export interface Props {
  dataState: number[];
  title: string;
  unity: string;
}

const ChartLine = ({ dataState, title, unity }: Props): ReactElement => {
  const { t } = useTranslation();
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: title,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      y: {
        display: true,
        ticks: {
          callback: function (value) {
            const test = value as number;
            return `${test.toFixed(1)} ${unity}`;
          },
        },
      },
    },
  };

  const labels = dataState.map((_, key) => `${t("level")} ${key + 1}`);

  const data = {
    labels,
    datasets: [
      {
        data: dataState,
        borderColor: "#C89B3C",
        backgroundColor: "#C89B3C",
      },
    ],
  };
  return (
    <div className="w-full lg:w-1/2">
      <Line options={options} data={data} updateMode="resize" />
    </div>
  );
};

export default ChartLine;
