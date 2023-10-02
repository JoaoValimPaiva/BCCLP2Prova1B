import VisualizarCarrinho from "./VisualizarProdutos"

export default function ProdutosVisualizacao(props){
    var lista = JSON.parse(localStorage.getItem("carrinho"))
    if(lista!=null && lista!=[]){
        return (
            <div>
                {
                    lista.map((produto) => (
                        <VisualizarCarrinho id={produto.id} qtd={produto.qtd} img={produto.img}/>
                    ))
                }
            </div>
        )
    }
    else{
        return (
            <div>
                Sem produtos...
            </div>
        )
    }
}