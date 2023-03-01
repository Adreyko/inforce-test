import { Box, Container, Divider, Typography } from "@mui/material";
import { memo, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonRes from "../../../../../components/Button/Button";
import AddProduct from "../../../../../components/Modals/AddProduct";
import { useAppSelector } from "../../../../../redux/redux-hooks/redux-hooks";

const Detail = () => {
  const { id } = useParams();
  const products = useAppSelector((prod) => prod.products.products);

  const currentProduct = products.find((prod) => prod.id === id);
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <Container maxWidth="md">
      <Box
        sx={{ width: "100%" }}
        marginTop="50px"
        width="100%"
        display="flex"
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
          {currentProduct?.name}
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
        <img className="detail_Img" src={currentProduct?.imageUrl} alt="s" />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              component="h4"
              align="center"
              color="#3f51b5"
            >
              Weight : {currentProduct?.weight}
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              align="center"
              color="#3f51b5"
            >
              Size:
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="h6"
                  component="h6"
                  align="center"
                  color="#3f51b5"
                  marginRight="5px"
                >
                  Heigth : {currentProduct?.size.height}
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  align="center"
                  color="#3f51b5"
                 
                >
                  Width : {currentProduct?.size.width}
                </Typography>
              </Box>
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              align="center"
              color="#3f51b5"
            >
              Amount : {currentProduct?.count}
            </Typography>
          </Box>

          <ButtonRes text={"Edit"} action={() => setOpenEdit(true)} />
          <AddProduct open={openEdit} setOpen={setOpenEdit} id={id} />
        </Box>
      </Box>
    </Container>
  );
};

export default memo(Detail);
