import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import "./App.css";
import StockChart from "./components/Chart/Chart";
import Container from "./components/Container";
import List from "./components/List/List";
import News from "./components/News/News";
import Stock from "./components/Stock";
import { StockService } from "./services/stock.service";

const data = [
  {
    id: 0,
    title: "SBER",
    price: "265,04",
    isIncrease: true,
    difference: 0.25,
    img: "sber.png",
    ticker: "SBER",
    buy: false,
  },
  {
    id: 1,
    title: "TCSG",
    price: "265,04",
    isIncrease: false,
    difference: 0.84,
    img: "tinkoff.png",
    ticker: "MOEX",
    buy: true,
  },
  {
    id: 2,
    title: "YNDX",
    price: "198,33",
    isIncrease: true,
    difference: 0.37,
    img: "yandex.png",
    ticker: "TATN",
    buy: false,
  },
  {
    id: 3,
    title: "POLY",
    price: "637,10",
    isIncrease: false,
    difference: 0.15,
    img: "poly.jpg",
    ticker: "SBER",
    buy: true,
  },
];

function App() {
  const [ticker, setTicker] = useState("SBER");
  const [index, setIndex] = useState(0);
  //@ts-ignore
  const handleClick = (ticker: string, index: number) => {
    setIndex(index);
  };
  const { data: chartData, refetch } = useQuery("Get data", () =>
    StockService.getData(ticker)
  );
  useEffect(() => {
    refetch();
  }, [ticker]);
  useEffect(() => {
    setTicker(data[index].ticker);
  }, [index]);
  return (
    <div className="">
      <Container className="pb-10">
        <div className="mt-10 flex flex-wrap gap-5 justify-between">
          {data.map((item) => (
            <Stock data={item} key={item.id} />
          ))}
        </div>
        <div className="flex gap-10 mt-10 h-[400px]">
          <div className="w-[300px]">
            <List data={data} handleClick={handleClick} index={index} />
          </div>
          <div className="w-4/5">
            {chartData && (
              <StockChart
                data={data[index]}
                //@ts-ignore
                chartData={chartData.data}
                index={index}
              />
            )}
          </div>
        </div>
      </Container>
      <div className="mt-20">
        <News />
      </div>
    </div>
  );
}

export default App;
