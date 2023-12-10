import { FC, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { ITickerData } from "../../services/stock.service";
import { IStock } from "../../types/stock.interface";
type TypeData = {
  chartData: ITickerData;
  data: IStock;
  index: number;
};

const StockChart: FC<TypeData> = ({ data, index, chartData }) => {
  const { price: chartPrice, time } = chartData;
  const { title, price, buy } = data;
  const [state, setState] = useState({
    series: [
      {
        name: "Stock",
        data: chartPrice,
      },
    ],
    options: {
      chart: {
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
        categories: time.map((item) => item.slice(11, 16)),
      },
      yaxis: {},
    },
  });

  useEffect(() => {
    setState((prevData) => ({
      ...prevData,
      series: [
        {
          name: "Stock",
          data: chartPrice,
        },
      ],
    }));
  }, [data, index]);

  return (
    <div className="bg-white rounded-xl p-5 h-full flex gap-3 justify-center">
      <Chart
        //@ts-ignore
        options={state.options}
        series={state.series}
        type="line"
        width="600"
      />
      <div className="mx-auto  text-2xl">
        <h1 className="font-bold">{title}</h1>
        <h1 className="font-semibold">₽ {price}</h1>
        <div className="flex gap-3 items-end">
          <p>К покупке:</p>
          {buy ? (
            <div className="text-green-600">
              <FaRegCheckCircle />
            </div>
          ) : (
            <div className="text-red-600">
              <FaRegCircleXmark />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StockChart;
