import Home from "./paginas/Home";
import { Route, Routes, HashRouter } from "react-router-dom";
import VisualizarCarrinho from "./paginas/VisualizarProdutos";
import ProdutosVisualizacao from "./paginas/ProdutosVisualizacao";
function App() {
  return (
    <div className="App">
    <HashRouter>
    <Routes>
      {

      }
      <Route path="/" element={<Home/>}/>
      <Route path="/carrinho" element={<ProdutosVisualizacao/>} />
    </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
