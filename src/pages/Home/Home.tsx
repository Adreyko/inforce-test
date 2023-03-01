import { Box, Container, Divider, Typography } from "@mui/material";
import React, { memo, useState } from "react";
import ButtonRes from "../../components/Button/Button";
import AddProduct from "../../components/Modals/AddProduct";
import Sort from "../../components/Sort/Sort";
import Products from "./Products/Products";

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container maxWidth="md">
      <Box
        sx={{ width: "100%" }}
        marginTop="50px"
        alignItems="center"
        width="100%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography
          marginRight="20px"
          variant="h4"
          component="h4"
          align="center"
          color="#3f51b5"
          padding="10px"
        >
          Products
        </Typography>
        <Divider
          sx={{
            marginTop: "20px",
            width: "100%",
            fontSize: "50px",
            borderBottomWidth: "1px",
          }}
          variant="middle"
        />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <ButtonRes action={() => setOpen(true)} text={"Add product"} />
          <Sort />
          <AddProduct open={open} setOpen={setOpen} id={null} />
        </Box>
      </Box>
      <Products />
    </Container>
  );
};

export default memo(Home) ;
