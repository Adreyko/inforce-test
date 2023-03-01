import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { memo } from "react";
type ConfirmType = {
  openConfirm: boolean;
  setOpenConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  deleteProduct: React.MouseEventHandler<HTMLButtonElement>;
};

const Confirm: React.FC<ConfirmType> = ({
  openConfirm,
  setOpenConfirm,
  deleteProduct,
}) => {
  const agreeDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line no-restricted-globals
    deleteProduct(event);
    setOpenConfirm(false);
  };

  const cancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenConfirm(false);
  };
  return (
    <>
      <Dialog
        open={openConfirm}
        onClose={cancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This product will be deleted
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancel}>Disagree</Button>
          <Button onClick={agreeDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default memo(Confirm) ;
