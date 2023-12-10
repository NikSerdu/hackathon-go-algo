import cn from "clsx";
import { FC, useState } from "react";
import Chart from "react-apexcharts";
import { IStock } from "../types/stock.interface";

type TypeData = {
  data: IStock;
};
const Stock: FC<TypeData> = ({ data }) => {
  const { difference, img, isIncrease, price, title } = data;
  const [state] = useState({
    series: [
      {
        name: "Stock",
        data: [10, 41, 5, 51, 49, 62, 20, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 30,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false, // Hide toolbar (burger menu)
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 1,
      },
      grid: {
        show: false, // Hide the background grid
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        labels: {
          show: false, // Hide x-axis labels
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false, // Hide y-axis labels
        },
      },
    },
  });
  return (
    <div className="w-64 h-36 bg-white rounded-xl p-5 shadow-sm">
      <div className="flex gap-4 item-center justify-between">
        <div className="">
          <img src={img} alt="Icon" className="w-10" />
        </div>
        <div className="font-bold">{title}</div>
      </div>
      <div className="flex items-center ">
        <div className="">
          <p className="text-lg font-bold">₽ {price}</p>
          <p
            className={cn({
              "text-green-600": isIncrease,
              "text-red-600": !isIncrease,
            })}
          >
            {isIncrease ? `+ ${difference}%` : `- ${difference}%`}
          </p>
        </div>
        <div className="">
          <Chart
            //@ts-ignore
            options={state.options}
            series={state.series}
            type="line"
            width="130"
          />
        </div>
      </div>
    </div>
  );
};

export default Stock;
