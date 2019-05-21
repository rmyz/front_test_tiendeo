import React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useLocalStorage } from "../../utils";

import "./Form.css";

const noOp = () => {};

export const Form = ({ handleClose, handleSubmit }) => {
  const [formValues, setFormValues] = useLocalStorage(
    "formValues",
    {},
    "SET_FORM_VALUES"
  );

  const handleChange = field => event => {
    setFormValues({ ...formValues, [field]: event.target.value });
  };

  const _handleSubmit = () => {
    if (!formValues.id) {
      formValues.id = Math.floor(Math.random() * 100);
    }
    if (formValues.title && formValues.description) {
      handleSubmit({
        ...formValues,
        id: formValues.id
      });
    }
    handleClose();
  };

  return (
    <form>
      <DialogTitle id="form-dialog-title">
        {(formValues.id && <span>Edit Card</span>) || <span>New Card</span>}
      </DialogTitle>
      <DialogContent>
        <TextField
          id="title"
          label="Title"
          required
          value={formValues.title}
          onChange={handleChange("title")}
          fullWidth
          margin="normal"
        />
        <TextField
          id="description"
          label="Description"
          required
          value={formValues.description}
          onChange={handleChange("description")}
          fullWidth
          margin="normal"
        />
        <TextField
          id="imgUrl"
          label="Image Source (url)"
          value={formValues.imgUrl}
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
          {(formValues.id && <span>Edit</span>) || <span>Add</span>}
        </Button>
      </DialogActions>
    </form>
  );
};

Form.propTypes = {
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func
};

Form.defaultProps = {
  handleClose: noOp,
  handleSubmit: noOp
};
