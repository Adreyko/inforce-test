import { Grid } from "@mui/material";
import { memo } from "react";
import { IProduct } from "../../../intarfaces/IProduct";
import { useAppSelector } from "../../../redux/redux-hooks/redux-hooks";
import Product from "./Product/Product";

const Products = () => {
  const products = useAppSelector((products) => products.products.products);
  const sortOrder = useAppSelector((prod) => prod.products.sortOrder);

  const sortedProductsByProperties = [...products].sort(
    (a: IProduct, b: IProduct) => {
      if (sortOrder === "asc") {
        return a.name > b.name ? 1 : -1;
      } else if (sortOrder === "desc") {
        return b.name > a.name ? 1 : -1;
      } else if (sortOrder === "largest") {
        return a.count > b.count ? -1 : a.count < b.count ? 1 : 0;
      } else if (sortOrder === "least") {
        return a.count > b.count ? 1 : a.count < b.count ? -1 : 0;
      } else {
        return 0;
      }
    }
  );

  const productsEl = sortedProductsByProperties.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <Grid sx={{ marginTop: "100px" }} container spacing={4}>
      {productsEl}
    </Grid>
  );
};

export default memo(Products);
