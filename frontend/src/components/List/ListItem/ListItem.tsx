import cn from "clsx";
import { FC } from "react";
import { IStock } from "../../../types/stock.interface";

type TypeData = {
  data: IStock;
  onClick: (ticker: string, index: number) => void;
  index: number;
};

const ListItem: FC<TypeData> = ({ data, onClick, index }) => {
  const { difference, img, isIncrease, price, title, id, ticker } = data;
  return (
    <div
      className={cn(
        "flex justify-between items-center hover:bg-slate-200 rounded-xl p-3 transition-all hover:cursor-pointer",
        {
          "bg-slate-200": index === id,
        }
      )}
      onClick={() => onClick(ticker, id)}
    >
      <div className="flex justify-between items-center">
        <div className="">
          <img src={img} alt="Icon" className="w-10" />
        </div>
        <div className="flex flex-col justify-between ml-3">
          <p className="font-bold">{title}</p>
          <p className="text-slate-500">{price}</p>
        </div>
      </div>
      <div className="">
        <p
          className={cn({
            "text-red-600": !isIncrease,
            "text-green-600": isIncrease,
          })}
        >
          {isIncrease ? `+${difference}%` : `-${difference}%`}
        </p>
      </div>
    </div>
  );
};

export default ListItem;
