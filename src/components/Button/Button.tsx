import { Button } from "@mui/material";
import { memo } from "react";

type ButtonType = {
  text: string;
  action: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonRes: React.FC<ButtonType> = ({ text, action }) => {
  return (
    <Button
      onClick={action}
      sx={{ marginTop: "20px", maxHeight:"50px" ,justifyContent: "flex-start" }}
      variant="contained"
    >
      {text}
    </Button>
  );
};

export default memo(ButtonRes);
