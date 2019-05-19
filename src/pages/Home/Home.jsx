import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Dialog from "@material-ui/core/Dialog";
import AddIcon from "@material-ui/icons/Add";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "./Home.css";
import CardWrapper from "../../components/CardWrapper";
import Form from "../../components/Form";
import { initialItems, useLocalStorage, orderItems } from "../../utils";

export const Home = () => {
  const [isDialogOpened, setIsDialogOpen] = useState(false);
  const [orderBy, setOrderBy] = useLocalStorage("order", "");
  const [items, setItems] = useLocalStorage("items", initialItems());

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const handleChange = event => {
    setOrderBy(event.target.value);
    setItems(orderItems(event.target.value));
  };

  const addItem = item => {
    setItems([...items, item]);
  };

  return (
    <>
      <FormControl className="Order">
        <span>Order by title</span>
        <Select
          value={orderBy}
          onChange={handleChange}
          inputProps={{
            name: "order",
            id: "order-id"
          }}
        >
          <MenuItem value={"asc"}>Asc</MenuItem>
          <MenuItem value={"desc"}>Desc</MenuItem>
        </Select>
      </FormControl>
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
