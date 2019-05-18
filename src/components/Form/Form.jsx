import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Form.css";

export const Form = ({ handleClose, handleSubmit }) => {
  const [values, setValues] = useState({});

  const handleChange = field => event => {
    setValues({ ...values, [field]: event.target.value });
  };

  const _handleSubmit = () => {
    if (values.title && values.description) handleSubmit(values);
    handleClose();
  };

  return (
    <form>
      <DialogTitle id="form-dialog-title">New Card</DialogTitle>
      <DialogContent>
        <TextField
          id="title"
          label="Title"
          required
          value={values.title}
          onChange={handleChange("title")}
          fullWidth
          margin="normal"
        />
        <TextField
          id="description"
          label="Description"
          required
          value={values.description}
          onChange={handleChange("description")}
          fullWidth
          margin="normal"
        />
        <TextField
          id="imgUrl"
          label="Image Source (url)"
          value={values.imgUrl}
          onChange={handleChange("imgUrl")}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={_handleSubmit} color="primary">
          Add
        </Button>
      </DialogActions>
    </form>
  );
};
