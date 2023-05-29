import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "./components/Navbar";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ItemDetails } from "./components/ItemDetails";
import { NotFound } from "./components/NotFound";

function App() {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [itemById, setItemById] = useState({});

  const addToLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };
  const removeLocalStorage = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setItems(data);
    }
    getAllProd();
  }, []);

  const getAllProd = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  const addItem = (item) => {
    let exist = items.find((ele) => ele.id === item.id);
    if (exist) {
      let updatedCard = items.map((ele) =>
        ele.id === item.id ? { ...exist, qty: exist.qty + 1 } : ele
      );
      setItems(updatedCard);
      addToLocalStorage(updatedCard);
    } else {
      let updatedCard = [...items, { ...item, qty: 1 }];
      setItems(updatedCard);
      addToLocalStorage(updatedCard);
    }
  };

  const decrement = (item) => {
    let exist = items.find((ele) => ele.id === item.id);
    if (exist.qty > 1) {
      let updatedCard = items.map((ele) =>
        ele.id === item.id ? { ...exist, qty: exist.qty - 1 } : ele
      );
      setItems(updatedCard);
      addToLocalStorage(updatedCard);
    } else {
    }
  };

  const deleteItem = (item) => {
    const updated = items.filter((ele) => {
      return ele.id !== item.id;
    });
    setItems(updated);
    addToLocalStorage(updated);
  };

  const clearAll = () => {
    setItems([]);
    removeLocalStorage();
  };

  const getItemByID = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setItemById(response.data);
  };

  const getProductsByCat = async (category) => {
    if (category === "none") {
      return getAllProd();
    }
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    setProducts(response.data);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar items={items} />
        <Routes>
          <Route
            path="/products"
            element={
              <ProductsList
                index
                products={products}
                addItem={addItem}
                getItemByID={getItemByID}
                getProductsByCat={getProductsByCat}
              />
            }
          />
          <Route
            path="/products/:id"
            element={<ItemDetails value={itemById} addItem={addItem} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                items={items}
                addItem={addItem}
                decrement={decrement}
                deleteItem={deleteItem}
                clearAll={clearAll}
              />
            }
          />
          <Route path="/store-task" element={<Navigate to="/products" />} />
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
