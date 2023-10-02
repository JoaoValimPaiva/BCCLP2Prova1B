import Home from "./paginas/Home";
import { Route, Routes, HashRouter } from "react-router-dom";
import VisualizarCarrinho from "./paginas/VisualizarProdutos";
function App() {
  return (
    <div className="App">
    <HashRouter>
    <Routes>
      {

      }
      <Route path="/" element={<Home/>}/>
      <Route path="/carrinho" element={<VisualizarCarrinho/>} />
    </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
