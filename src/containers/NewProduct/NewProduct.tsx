
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store"
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import ProductForm from "../../components/ProductForm/ProductForm";
import { createProductAsync } from "../../store/productsAction";

const NewProduct=()=>{
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate();

    const onProductFormSubmit = (productData:FormData)  => {
        dispatch (createProductAsync(productData));
        navigate("/")
    };


    return(
        <>
        <Typography variant="h4">New product</Typography>
        <ProductForm onSubmit={onProductFormSubmit}/>
        </>
    )
}



export default NewProduct;