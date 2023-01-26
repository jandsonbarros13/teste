import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Empresa from "./pages/Empresa";
import Erro from "./pages/erro";
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import SingleProduct from "./pages/SingleProduct";

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/Produtos'>Produtos</Link>
        </li>
        <li>
          <Link to='/Emppresa'>home</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Produto" element={<Produto />}></Route>
        <Route path="/Produto/:id" element={<SingleProduct />}></Route>
        <Route path="/Empresa" element={<Empresa />}></Route>
        <Route path="*" element={<Erro />}></Route>
      </Routes>
    </Router>
  );
}