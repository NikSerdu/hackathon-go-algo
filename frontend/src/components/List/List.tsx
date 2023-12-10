import { FC } from "react";
import { IStock } from "../../types/stock.interface";
import ListItem from "./ListItem/ListItem";

type TypeData = {
  data: IStock[];
  handleClick: (ticker: string, index: number) => void;
  index: number;
};

const List: FC<TypeData> = ({ data, handleClick, index }) => {
  return (
    <div className="bg-white rounded-xl p-5 max-w-xs h-full">
      <h1 className="font-bold text-xl">List</h1>
      <div className="flex flex-col gap-3 mt-5">
        {data.map((item) => (
          <ListItem
            data={item}
            key={item.id}
            onClick={handleClick}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
