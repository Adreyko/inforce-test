import { Grid } from "@mui/material";
import { memo } from "react";
import sortEnum from "../../../constants/sortVariants";
import { IProduct } from "../../../intarfaces/IProduct";
import { useAppSelector } from "../../../redux/redux-hooks/redux-hooks";
import Product from "./Product/Product";

const Products = () => {
  const products = useAppSelector((products) => products.products.products);
  const sortOrder = useAppSelector((prod) => prod.products.sortOrder);

  const sortedProductsByProperties = [...products].sort(
    (a: IProduct, b: IProduct) => {
      if (sortOrder === sortEnum.ASC) return a.name > b.name ? 1 : -1;
      if (sortOrder === sortEnum.DESC) return b.name > a.name ? 1 : -1;
      if (sortOrder === sortEnum.LARGEST)
        return a.count > b.count ? -1 : a.count < b.count ? 1 : 0;
      if (sortOrder === sortEnum.LEAST)
        return a.count > b.count ? 1 : a.count < b.count ? -1 : 0;
      return 0;
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
