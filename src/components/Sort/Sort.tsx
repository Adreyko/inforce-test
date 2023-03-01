import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { memo } from "react";

const Sort = () => {
  return (
    <>
      <FormControl   variant="standard"sx={{marginTop:'20px',width:"200px"}}>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select">
          <MenuItem >A-Z</MenuItem>
          <MenuItem>Z-A</MenuItem>
          <MenuItem>Largest amount</MenuItem>
          <MenuItem>The least amount</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default memo(Sort);
