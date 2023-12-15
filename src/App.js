import Header from "./components/header/Header";
import HomePage from "./components/sections/HomePage";
import ForgotPassword from "./components/sections/authSection/ForgotPassword";
import Login from "./components/sections/authSection/Login";
import Register from "./components/sections/authSection/Register";

function App() {
  return (
    <div>
      <Header />
      {/* <ForgotPassword /> */}
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
