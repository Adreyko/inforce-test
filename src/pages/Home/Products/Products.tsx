import { Grid } from "@mui/material";
import { memo } from "react";
import { IProduct } from "../../../intarfaces/IProduct";
import { useAppSelector } from "../../../redux/redux-hooks/redux-hooks";
import Product from "./Product/Product";

const Products = () => {
  const products = useAppSelector((products) => products.products.products);

  const sortedProducts = [...products].sort((a: IProduct, b: IProduct) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );
  const productsEl = sortedProducts.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <Grid sx={{ marginTop: "100px" }} container spacing={4}>
      {productsEl}
    </Grid>
  );
};

export default memo(Products);
