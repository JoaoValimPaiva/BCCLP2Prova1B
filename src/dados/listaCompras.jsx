export default function AdicionarCompra(id,qtd,setLista,listaa){
    var lista = JSON.parse(localStorage.getItem("carrinho"));
    var i=0;
    while(lista.length>i && lista[i].id !== id)
        i++;
    if(lista.length<=i)
        lista.push({"id":id,
            "qtd":qtd})
    else{
        lista[i].qtd+=qtd;
    }
    setLista(lista);
    console.log(listaa);
    localStorage.setItem("carrinho",JSON.stringify(lista));
}