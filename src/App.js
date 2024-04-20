import Header from "./components/header/Header";
import BodySection from "./components/sections/BodySection";
import ViewProductDetails from "./components/sections/ViewProductDetails";
import ForgotPassword from "./components/sections/authSection/ForgotPassword";
import Register from "./components/sections/authSection/Register";
import Login from "./components/sections/authSection/Login";
import Cart from "./components/sections/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOut from "./components/sections/CheckOut";
import ViewUserInfo from "./components/sections/ViewUserInfo";
import UserOrderManagement from "./components/sections/userSection/UserOrderManagement";
import Footer from "./components/footer/Footer";
import UserChangeAvatar from "./components/sections/userSection/UserChangeAvatar";
import ViewProduct from "./components/sections/ViewProduct";
import Paypal from "./components/sections/payment/Paypal";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<BodySection />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/productdetails" element={<ViewProductDetails />}></Route>
        <Route path="/cartdetails" element={<Cart />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/userinfo" element={<ViewUserInfo />}></Route>
        <Route path="/ordermanagement" element={<ViewUserInfo />}></Route>
        <Route path="/useraddress" element={<ViewUserInfo />}></Route>
        <Route path="/changeavatar" element={<ViewUserInfo />}></Route>
        <Route path="/search" element={<ViewProduct />}></Route>
        <Route path="/category" element={<ViewProduct />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
