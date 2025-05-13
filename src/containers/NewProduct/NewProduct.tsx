import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductForm from "../../components/ProductForm/ProductForm";
import { AppDispatch } from "../../store";
import { fetchCategoriesAsync } from "../../store/actions/categoriesAction";
import { RootState } from "../../store/index";
import { createProductAsync } from "../../store/productsAction";

const NewProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { categories } = useSelector((state: RootState) => state.categories);

  const onProductFormSubmit = (productData: FormData) => {
    dispatch(createProductAsync(productData));
    navigate("/");
  };

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <>
      <Typography variant="h4">New product</Typography>
      <ProductForm onSubmit={onProductFormSubmit} categories={categories} />
    </>
  );
};

export default NewProduct;
