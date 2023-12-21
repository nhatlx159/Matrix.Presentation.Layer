import Header from "./components/header/Header";
import BodySection from "./components/sections/BodySection";
import ViewProductDetails from "./components/sections/ViewProductDetails";
import ForgotPassword from "./components/sections/authSection/ForgotPassword";
import Register from "./components/sections/authSection/Register";
import Login from "./components/sections/authSection/Login";
import Cart from "./components/sections/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOut from "./components/sections/CheckOut";



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
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
