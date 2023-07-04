import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ProductCardInCartProps } from "./interfaces";

const ProductCardInCart = ({ productCardData, changeQuantity, removeProduct}: ProductCardInCartProps) => {

  const handleInputChange = (quantity: string) => {
    changeQuantity(productCardData.id, quantity);
  };

  return (

    <article data-cy="produtct-card-in-cart-wrapper">
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="140"
          image={productCardData.image}
          alt={productCardData.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productCardData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="description">
            {productCardData.description}
          </Typography>
          <Typography sx={{marginTop: 1}}>
            {productCardData.price}€
          </Typography>
        </CardContent>
        <CardActions>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ inputProps: { min: 0, max: 100 } }}
            value={productCardData.quantity}
            onChange={(e) => {
              handleInputChange(e.target.value);
            }}
          />
          <Button size="small" onClick={() => {removeProduct(productCardData.id);}}>Remove</Button>
          <Link to={`../products/${productCardData.id}`}>
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </article>
  );
};

export default ProductCardInCart;