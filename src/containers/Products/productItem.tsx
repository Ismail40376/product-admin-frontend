import { CardMedia, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import { Link as RouterLink } from "react-router-dom";
import ArrowForward from "@mui/icons-material/ArrowForward";
import defaultImage from "../../assets/NO IMAGE AVAILABLE.avif";
import { apiURL } from "../../constants";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { deleteProductAsync } from "../../store/productsAction";

interface ProductItemProps {
  id: string;
  title: string;
  price: string;
  image?: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  title,
  price,
  image,
}) => {
  let cardImage = defaultImage;
  if (image) {
    cardImage = apiURL + "/uploads/" + image;
  }
  const dispatch = useDispatch<AppDispatch>();
  const handleDelete = () => {
    if (window.confirm("A your sure want to delete this products?")) {
      dispatch(deleteProductAsync(id));
    }
  };
  return (
    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
      <Card>
        <CardHeader title={title} />
        <CardMedia
          image={cardImage}
          title={title}
          sx={{
            height: 0,
            padding: "50%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <CardContent>
          <strong style={{ marginLeft: "10px" }}>Price {price} KZT</strong>
        </CardContent>
      </Card>
      <CardActions>
        <IconButton component={RouterLink} to={`/products/${id}`}>
          <ArrowForward />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Grid>
  );
};

export default ProductItem;
