import Card from "./Card";
import ProductAmount from "./ProductAmount";
function ProductItem(props){
    return(
        <Card className='product-item'>
            <ProductAmount date={props.amount}/>
            <div>
                <h2 className="productId-desc">
                    {props.title}
                </h2>
            </div>
        </Card>
    )
}
export default ProductItem;