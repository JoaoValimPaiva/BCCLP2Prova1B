export default function AdicionarCompra(id,qtd,img,preco,setLista,listaa){
    var lista = JSON.parse(localStorage.getItem("carrinho"));
    var i=0;
    while(lista.length>i && lista[i].id !== id)
        i++;
    if(lista.length<=i)
        lista.push({"id":id,
            "qtd":qtd,
            "img":img,
            "preco":preco})
    else{
        lista[i].qtd+=qtd;
    }
    setLista(lista);
    localStorage.setItem("carrinho",JSON.stringify(lista));
}