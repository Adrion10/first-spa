import Card from "./Card"
import data from "../data/data"


const CardContainer = ()=>{
    const dataList =data.map(item=>( 
        <Card key = {item.id} img = {item.image} title= {item.title}/>
    ))
    return (
<section className="card-container">{dataList}
    
</section>
    )
}
export default CardContainer