import "./App.css";
import CartDetails from "./Components/CartDetails/CartDetails";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Error from "./Pages/Error/Error";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/Products/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
    <Header></Header>
     <Routes>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/" element={<Home></Home>}>    </Route>
        <Route path="/products/:id" element={<ProductDetails></ProductDetails>}>    </Route>





          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
     
    </div>
  );
}

export default App;
