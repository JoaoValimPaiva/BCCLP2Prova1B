export default function VisualizarCarrinho(props){
    return(
        <div>
            <div id={props.id}>
            <img style={{width:"100%",height:"100%"}} src={props.img} alt=""/>
            <div>quantidade:{props.qtd}</div>
            <br/>
            </div>
        </div>
    )
}