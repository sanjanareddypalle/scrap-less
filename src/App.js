import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import GetStarted from "./components/GetStarted";
import Login from "./components/Login";
import Signup from "./components/Signup";

import SuperMarket from "./pages/super_market/SuperMarket";
import AddProduct from "./pages/super_market/AddProduct";
import MyProducts from "./pages/super_market/MyProducts";

import CustomerProduct from "./pages/customer/CustomerProduct";
import SupermarketForCustomer from "./pages/customer/SupermarketForCustomer";
import Customer from "./pages/customer/Customer";
import Cart from "./pages/customer/Cart";
import CartProduct from "./pages/customer/CartProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/fwms" element={<Home />} />
        <Route path="/getStarted" element={<GetStarted />} />

        {/* Login and Signup */}
        <Route path="/signUp" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* supermarket */}
        <Route path="/supermarket" element={<SuperMarket />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/myproducts" element={<MyProducts />} />

        {/* customer */}
        <Route path="/customer" element={<Customer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/customer_products" element={<CustomerProduct />} />
        <Route path="/cartProduct" element={<CartProduct />} />
        <Route
          path="/superMarketForCustomer"
          element={<SupermarketForCustomer />}
        />
      </Routes>
    </div>
  );
}

export default App;
