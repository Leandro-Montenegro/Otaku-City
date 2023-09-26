import { CircularProgress, Grid } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import {useParams} from "react-router-dom";
import products from "../../mocks/products.json";
import ProductDetail from "../products/ProductDetail";


const CategoriesProductList = () => {
    const {categoryId} = useParams();
    const {data, loading} = useAsyncMock(products);
    
    if (loading) return <CircularProgress/>

    const categorySelected = data.filter(category => category.category.toLowerCase() === categoryId.toLowerCase());

    return ( <div>
        <Grid container spacing={3}>
            {categorySelected.map((products) =>{
                return <ProductDetail key={products.id} product={products} />
            })}
        </Grid>
    </div> );
}

export default CategoriesProductList;