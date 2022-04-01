
const Card = ({img, title})=>{
  
    return( 
        <aside className ="card">
            <figure>
            <figcaption> {title}</figcaption>  
            <img src={img} alt={title} className ='card-image' /> 
            </figure>
            
            </aside>
        )

}
export default Card