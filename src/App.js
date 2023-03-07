import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
