import Cabecalho from "../templates/Cabecalho"
import BarraBusca from "../templates/BarraBusca"
import GradeProdutos from "../componentes/GradeProdutos"
import { useEffect, useState } from "react";

export default function Home(props){
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((resposta) => resposta.json())
          .then((produtos) => {
            setProdutos(produtos);
          });  
      },[]);
    
      const [produtos, setProdutos] = useState([]);
      const [lista,setLista] = useState(localStorage.getItem("carrinho")==null? []:JSON.parse(localStorage.getItem("carrinho")))
      
      if(localStorage.getItem("carrinho")==null)
        localStorage.setItem("carrinho",JSON.stringify([]));
      
    return(
        <div>
            <Cabecalho/>
            <BarraBusca lista={lista}/>
            <GradeProdutos listaProdutos={produtos} lista={lista} setLista={setLista}/>
        </div>
    )
}