import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { Button, TextField } from "@mui/material";
import { IProduct } from "../../intarfaces/IProduct";
import { v4 as uuidv4 } from "uuid";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/redux-hooks/redux-hooks";
import { addProduct } from "../../redux/slices/thunk/addProduct";
import { updateProduct } from "../../redux/slices/thunk/updateProduct";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type AddProductType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string | undefined | null;
};

const AddProduct: React.FC<AddProductType> = ({ open, setOpen, id }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((prod) => prod.products.products);

  const currentProduct = products.find((prod) => prod.id === id);

  React.useEffect(() => {
    if (id && currentProduct) {
      const { imageUrl, name, count, weight, size } = currentProduct;
      setForm({
        imageUrl,
        name,
        count: String(count),
        weight,
        height: String(size.height),
        width: String(size.width),
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    setForm({
      imageUrl: "",
      name: "",
      count: "",
      weight: "",
      height: "",
      width: "",
    });
  };

  const [form, setForm] = React.useState({
    imageUrl: "",
    name: "",
    count: "",
    weight: "",
    height: "",
    width: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void = (e) => {
    const { value, name } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const uploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setForm((prevForm) => ({
          ...prevForm,
          imageUrl: reader.result as string,
        }));
      }
    };
    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const disabled =
    !form.imageUrl ||
    !form.name ||
    !form.count ||
    !form.weight ||
    !form.height ||
    !form.width;

  const submit: () => Promise<void> = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newProduct: IProduct = {
      id: uuidv4(),
      imageUrl: form.imageUrl,
      name: form.name,
      count: Number(form.count),
      weight: form.weight,
      size: {
        width: Number(form.width),
        height: Number(form.height),
      },
      comments: [],
    };

    if (id) {
      dispatch(await updateProduct({ ...newProduct, id: id as string }));
    } else {
      dispatch(await addProduct(newProduct));
    }
    handleClose();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add Product
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => uploadImage(e)}
                />
                {form.imageUrl?.length ? (
                  <img alt="productPhoto" src={form.imageUrl} className="img" />
                ) : (
                  <PhotoCamera />
                )}
              </IconButton>
            </Stack>
            <TextField
              required
              id="standard-basic"
              label="name"
              variant="standard"
              value={form.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              required
              id="standard-basic"
              label="weight"
              type="number"
              variant="standard"
              value={form.weight}
              name="weight"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              required
              id="standard-basic"
              label="amount"
              type="number"
              variant="standard"
              value={form.count}
              name="count"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              required
              id="standard-basic"
              label="width"
              type="number"
              variant="standard"
              value={form.width}
              name="width"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              required
              id="standard-basic"
              label="heigth"
              type="number"
              variant="standard"
              value={form.height}
              name="height"
              onChange={(e) => handleChange(e)}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "50px",
              }}
            >
              <Button onClick={handleClose} variant="contained" color="error">
                Cancel
              </Button>
              <Button
                disabled={disabled}
                onClick={() => submit()}
                variant="contained"
                color="success"
              >
                Add
              </Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default React.memo(AddProduct) ;
