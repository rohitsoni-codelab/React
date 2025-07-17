function Product(props) {
    return (
        <Card className='product'>
            <ProductItem
                id={props.item[0].id}
                titel={props.item[0].title}
                amount={props.item[0].amount}
            />
            <ProductItem
                id={props.item[1].id}
                titel={props.item[1].title}
                amount={props.item[1].amount}
            />
            <ProductItem
                id={props.item[2].id}
                titel={props.item[2].title}
                amount={props.item[2].amount}
            />

        </Card>
    )
}
export default Product;