
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";

interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export const DeleteDialog: React.FC<DeleteDialogProps> = ({
  open,
  onClose,
  onDelete,
}) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa"; 

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 2,
          transition: "all 0.3s ease",
          width: { xs: "90%", sm: "auto" },
          maxWidth: "400px",
          direction: isRtl ? "rtl" : "ltr", 
        },
      }}
    >
      <DialogTitle id="delete-dialog-title" sx={{ fontWeight: "bold", color: "error.main" }}>
        {t("confirmDeletion")}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="delete-dialog-description"
          sx={{ color: "text.secondary", textAlign: isRtl ? "right" : "left" }}
        >
          {t("deleteConfirmation")}
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{ flexDirection: { xs: "column", sm: isRtl ? "row-reverse" : "row" }, gap: 1 }}
      >
        <Button
          onClick={onClose}
          color="primary"
          sx={{ borderRadius: 2, px: 3, width: { xs: "100%", sm: "auto" } }}
        >
          {t("cancel")}
        </Button>
        <Button
          onClick={onDelete}
          color="error"
          autoFocus
          sx={{
            borderRadius: 2,
            px: 3,
            width: { xs: "100%", sm: "auto" },
            transition: "all 0.3s ease",
            "&:hover": { bgcolor: "error.dark" },
          }}
        >
          {t("delete")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};