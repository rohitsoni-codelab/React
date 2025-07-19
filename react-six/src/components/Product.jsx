import Price from "./Price"
import "./Product.css"
export default function Product({title,id})
{
    let oldPrices=["12.324","11.244","21.332","29.323"];
    let newPrices=["22.324","21.244","31.332","39.323"];
    return(
        <div className="product-card">
            <h2>{title}</h2>
            <div>description</div>
            <Price oldPrice={oldPrices[id]} newPrice={newPrices[id]}/>
        </div>
    )
}