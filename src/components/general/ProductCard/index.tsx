import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ProductCardProps } from "./interfaces";
import "./style.scss";

const ProductCard = ({ productCardData , addProductToCart}: ProductCardProps) => {

  return (

    <article className="insight-card-wrapper" data-cy="product-card-wrapper">
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          component="img"
          height="140"
          image={productCardData.image}
          alt={productCardData.title}
          data-cy="product-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" data-cy="product-title">
            {productCardData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="description" data-cy="product-description">
            {productCardData.description}
          </Typography>
          <Typography sx={{marginTop: 1}} data-cy="product-price">
            {productCardData.price}€
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => {addProductToCart(productCardData);}} data-cy="add-to-cart">Add to Cart</Button>
          <Link to={`products/${productCardData.id}`} data-cy="view-more">
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </article>
  );
};

export default ProductCard;