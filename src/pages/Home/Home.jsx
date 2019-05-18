import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Dialog from "@material-ui/core/Dialog";
import AddIcon from "@material-ui/icons/Add";
import "./Home.css";
import CardWrapper from "../../components/CardWrapper";
import Form from "../../components/Form";
import { initialItems } from "../../utils";

export const Home = () => {
  const [isDialogOpened, setIsDialogOpen] = useState(false);
  const [items, setItems] = useState(initialItems());

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const addItem = item => {
    setItems([...items, item]);
  };

  return (
    <>
      <CardWrapper items={items} />
      <Dialog open={isDialogOpened} onClose={handleClose}>
        <Form handleClose={handleClose} handleSubmit={addItem} />
      </Dialog>
      <Fab
        color="primary"
        aria-label="Add"
        onClick={openDialog}
        className="Fab"
      >
        <AddIcon />
      </Fab>
    </>
  );
};
