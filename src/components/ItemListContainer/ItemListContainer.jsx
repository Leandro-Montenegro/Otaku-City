import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    return (<>
        <div className="div-itemcontainer">
            <ItemList greeting={greeting} response={response}>
                <p>Hola desde mi children</p>
            </ItemList>
        <h1>{greeting}</h1>;

        </div>
    </>)
}

export default ItemListContainer;