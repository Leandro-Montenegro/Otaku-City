import ProductInfo from "../products/ProductInfo";

const ItemList = ({products }) => {
    return(
        <div className="ListGroup"> 
            {products.map(product => <Item key={product.id} {...product} />)}
        </div>
    )
}

export default ItemList