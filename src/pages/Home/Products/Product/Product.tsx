import { Button, Grid, ListItem } from "@mui/material";
import React, { memo } from "react";
import { IProduct } from "../../../../intarfaces/IProduct";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../redux/redux-hooks/redux-hooks";
import { deleteProduct } from "../../../../redux/slices/thunk/deleteProduct";
import Confirm from "../../../../components/Modals/Confirm";

type ProductType = {
  product: IProduct;
};

const Product: React.FC<ProductType> = ({ product }) => {
  const dispatch = useAppDispatch();
  const [openConfirm, setOpenConfirm] = React.useState(false);

  const deleteProductFunc = async () => {
    await dispatch(deleteProduct(product.id));
  };
  return (
    <Grid item xs={4} sx={{ cursor: "pointer" }}>
      <ListItem
        sx={{
          height: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "20px",
        }}
      >
        <Link to={`/${product.id}`}>
          {product.name}
          <img className="img" src={product.imageUrl} alt="s" />
        </Link>
        <Button
          onClick={() => setOpenConfirm(true)}
          variant="contained"
          color="error"
        >
          Delete
        </Button>
        <Confirm
          openConfirm={openConfirm}
          setOpenConfirm={setOpenConfirm}
          deleteProduct={deleteProductFunc}
        />
      </ListItem>
    </Grid>
  );
};

export default memo(Product);
