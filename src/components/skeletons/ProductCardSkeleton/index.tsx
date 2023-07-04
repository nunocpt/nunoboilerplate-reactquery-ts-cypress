
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import "./style.scss";

const ProductCardSkeleton = () => {
  return (
    <div
      className="product-card-skeleton-wrapper"
      data-cy="product-card-skeleton"
    >
      <div className="top-grid">
        <Skeleton variant="rectangular" width={88} height={88} />
        <Box sx={{ width: "100%" }} marginTop="-5px">
          <Skeleton height={50} />
          <Skeleton height={50} />
        </Box>
        <Box sx={{ width: "100%" }} marginTop="5px">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Box>
      </div>
      <Skeleton variant="rectangular" width="100%" height={95} />
    </div>
  );
};

export default ProductCardSkeleton;
