import Home from "./paginas/Home";
import { Route, Routes, HashRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <HashRouter>
    <Routes>
      {

      }
      <Route path="/" element={<Home/>}/>
      
    </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
