import { CircularProgress, Typography, Grid } from "@mui/material"
import useAsyncMock from "../../hooks/useAsyncMock"
import products from "../../mocks/products.json"
import ProductDetail from "./ProductDetail"
import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, limit, query } from "firebase/firestore"


const ProductList= ()=>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const[error, setError] = useState("")
    useEffect(() => {
        const fetchData = async()=>{
            const db = getFirestore();
            const querySnapshot = await getDocs(collection(db, "products"))
            const newData = querySnapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}))
            setData(newData)
            setLoading(false)
        }
        fetchData()
    }, [] )


    
    if(loading) return <CircularProgress/>
    return(<div className="container" style={{backgroundColor:"#fdf0d5"}}>
        <Typography variant="h2" style={{color:"#360a14", paddingTop:"150px", textAlign:"center", paddingBottom:"50px"}}>
            Products
        </Typography>
        <Grid container spacing={3}>
            {
                data.map((product) =>{
                    return(
                        <ProductDetail key={products.id} product={products}>

                        </ProductDetail>
                    )
                })
            }
        </Grid>
    </div>)
}
export default ProductList