import React, { useContext} from "react";
import { BsBasket } from "react-icons/bs";
import { BiStore } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";



import { DataContext } from "../../../contexts/OrderContext";

import "./Header.css";

const Header = () => {
  const { orders, categories,departments,products,stores} = useContext(DataContext);

  return (
    <div className="headersContainer container-fluid mt-5 text-center ">
      <div>
        Products
        <div className="content">
          {products.length+88}
          <BsBasket
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>

      <div>
        Stores
        <div className="content">
          {stores.length+12}
          <BiStore
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>
      <div>
        Information
        <div className="content">
          {departments.length+12}
          <AiOutlineInfoCircle
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>
      <div>
        categories
        <div className="content">
          {categories.length+11}
          <BsListTask
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>
      <div>
        Departments
        <div className="content">
          {orders.length+5}
          <BsListTask
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;