import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    return (<>
        <div className="div-itemcontainer">
            <ItemList></ItemList>
        <h1>{greeting}</h1>;

        </div>
    </>)
}

export default ItemListContainer;