import { useContext } from "react";
import { DataContext } from "../../../contexts/OrderContext";
import TableOrders from "../Table/Table";
import "./Tables.css";
const Tables = () => {
  const { orders } = useContext(DataContext);
  return (
    <div className="showCaseContainer container-fluid mt-5 mb-5">
      <div className="ShowCase circleShowCase text-center">
        <div className=" one  text-center fs-5">
          users in the last 30 days
          <div className="inside">
            <div className="circle">
              <h2>
                {orders.map((item) => {
                  if (item.quantity == 78) {
                    return item.quantity;
                  }
                })}
              </h2>
              <span className="insideSpan text-dark">out of 220</span>
            </div>
          </div>
        </div>

        <div className=" two text-center fs-5">
          Orders in the last 30 days
          <div className="inside">
            <div className="circle">
              <h2>
                {orders.map((item) => {
                  if (item.priceOfProducts == 200) {
                    return item.priceOfProducts;
                  }
                })}
              </h2>
              <span className="insideSpan text-dark">out of 400</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ShowCase three text-center fs-5">
        <div className="inside tablhOLDER ">
          <TableOrders />
        </div>
      </div>
    </div>
  );
};

export default Tables;
