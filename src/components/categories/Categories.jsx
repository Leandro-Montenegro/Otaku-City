import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useAsyncMock from "../../hooks/useAsyncMock";
import categories from "../../mocks/categorias.json";

const Categories = () => {
    const { data, loading } = useAsyncMock(categories)

    if (loading) return <CircularProgress />

    return (<div className="container">
        <Typography variant="h2" style={{ color: "black" }}>
            Categorias
        </Typography>
        {
            data.map((category) => {
                return (
                    <Card key={category.id}>
                        <CardContent component={Link} to={`/category/${category.category}`}>
                            <Typography >{category.category}</Typography>
                        </CardContent>
                </Card>
            )
    })
}
    </div >);
}

export default Categories;