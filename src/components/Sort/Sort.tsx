import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { memo } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/redux-hooks/redux-hooks";
import { setSortOrder } from "../../redux/slices/productSlice";

const Sort = () => {
  const dispatch = useAppDispatch();
  const handleSortChange = (event: { target: { value: string } }) => {
    dispatch(
      setSortOrder(event.target.value as "asc" | "desc" | "largest" | "least")
    );
  };

  const sortOrder = useAppSelector((prod) => prod.products.sortOrder);

  return (
    <>
      <FormControl
        variant="standard"
        sx={{ marginTop: "20px", width: "200px" }}
      >
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          value={sortOrder}
          onChange={handleSortChange}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value="asc">A-Z</MenuItem>
          <MenuItem value="desc">Z-A</MenuItem>
          <MenuItem value="largest">Largest amount</MenuItem>
          <MenuItem value="least">The least amount</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default memo(Sort);
