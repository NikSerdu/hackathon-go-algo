import { useEffect, useState } from "react";
import "./App.css";
import StockChart from "./components/Chart/Chart";
import Container from "./components/Container";
import List from "./components/List/List";
import News from "./components/News/News";
import Stock from "./components/Stock";

const data = [
  {
    id: 0,
    title: "Sber",
    price: "$10,000",
    isIncrease: true,
    difference: 0.25,
    data: [10, 41, 5, 51, 49, 62, 20, 91, 148],
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    img: "sber.png",
  },
  {
    id: 1,
    title: "Tinkoff",
    price: "$10,000",
    isIncrease: false,
    difference: 0.25,
    data: [20, 15, 5, 51, 80, 62, 4, 91, 120],
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    img: "tinkoff.png",
  },
  {
    id: 2,
    title: "Yandex",
    price: "$10,000",
    isIncrease: true,
    difference: 0.25,
    data: [4, 3, 1, 20, 30, 9, 8, 11, 10],
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    img: "yandex.png",
  },
  {
    id: 3,
    title: "Tinkoff",
    price: "$10,000",
    isIncrease: false,
    difference: 0.25,
    data: [14, 18, 54, 11, 20, 2, 40, 45, 6],
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    img: "tinkoff.png",
  },
];

function App() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    console.log(index);
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
          <div className="w-1/5">
            <List data={data} setIndex={setIndex} index={index} />
          </div>
          <div className="w-4/5">
            <StockChart data={data[index]} index={index} />
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
