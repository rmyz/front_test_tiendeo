import React, { useState } from "react";
import PropTypes from "prop-types";
import Popper from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "@material-ui/core/Icon";
import placeholderImage from "../../assets/tiendeo.png";
import { useLocalStorage, initialItems } from "../../utils";

import "./Card.css";

export const Card = ({ id, title, description, imgUrl }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [items, setItems] = useLocalStorage("items", initialItems, "ADD_ITEMS");

  const setFormValues = useLocalStorage("formValues", {}, "SET_FORM_VALUES")[1];

  const setIsDialogOpened = useLocalStorage(
    "isDialogOpened",
    false,
    "TOGGLE_DIALOG"
  )[1];

  const onMouseEnter = event => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const onMouseLeave = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleOnClickDelete = () => {
    const _items = items.filter(item => item.id !== id);
    setItems(_items);
  };

  const handleOnClickEdit = () => {
    setFormValues({ id, title, description, imgUrl });
    setIsDialogOpened(true);
  };

  return (
    <div
      className="Card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {open && ( // Temporal workaround as open prop from popper was not working
        <Popper id={title} open={open} anchorEl={anchorEl} transition>
          <Paper>
            <Button onClick={handleOnClickEdit}>
              <Icon>edit_icon</Icon>EDIT
            </Button>
            <Button onClick={handleOnClickDelete}>
              <DeleteIcon />
              DELETE
            </Button>
          </Paper>
        </Popper>
      )}
      <div className="Card__imageWrapper">
        {(imgUrl && (
          <img className="Card__image" data-lazy={imgUrl} alt="news" />
        )) || (
          <img
            className="Card__image"
            data-lazy={placeholderImage}
            alt="news"
          />
        )}
      </div>
      <div className="Card__title">{title}</div>
      <div className="Card__description">{description}</div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string
};
