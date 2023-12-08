import { FC } from "react";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import Container from "../Container";

const Header: FC = () => {
  return (
    <div className="bg-[#EA3426] py-2">
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center font-medium text-2xl">
            <img src="logo.png" alt="" />
            <p>GO.ALGO</p>
          </div>
          <div className="flex items-center">
            <div className="hover:cursor-pointer p-3 text-2xl">
              <IoMdNotificationsOutline />
            </div>
            <div className="flex gap-3 items-center hover:cursor-pointer">
              <div className="w-10 h-10">
                <img src="user.png" alt="User" />
              </div>
              <div className="">Name Surname</div>
              <div className="">
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
