import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/index";
import { fetchProductsAsync } from "../../store/productsAction";
import ProductItem from "./productItem";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const user = useSelector((state: RootState) => state.users.user);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid>
          <Typography variant="h4">Products</Typography>
        </Grid>
        {user && user.role === "admin" && (
          <Grid>
            <Button color="secondary" component={RouterLink} to="/products/new">
              Add product
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid container direction="row" spacing={2}>
        {products.map(product => (
          <ProductItem
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Products;
