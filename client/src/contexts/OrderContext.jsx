import { createContext, useState, useEffect } from "react";
import { getOrders } from "../services/orders-api";
import { getCategories } from "../services/categories-api";
import { getDepartments } from "../services/departments-api";
import { getProducts } from "../services/products-api";
import { getStores } from "../services/stores-api";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    getOrders().then((res) => setOrders(res.message));
  }, []);
  useEffect(() => {
    getCategories().then((res) => setCategories(res.message));
  }, []);
  useEffect(() => {
    getDepartments().then((res) => setDepartments(res.message));
  }, []);
  useEffect(() => {
    getProducts().then((res) => setProducts(res.message));
  }, []);
  useEffect(() => {
    getStores().then((res) => setStores(res.message));
  }, []);

  return (
    <DataContext.Provider
      value={{ orders, departments, categories, stores, products }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
