import React, { useEffect } from "react";
import Fab from "@material-ui/core/Fab";
import Dialog from "@material-ui/core/Dialog";
import AddIcon from "@material-ui/icons/Add";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CardWrapper from "../../components/CardWrapper";
import Form from "../../components/Form";
import {
  initialItems,
  useLocalStorage,
  orderItems,
  checkIdExists,
  lazyLoadImages
} from "../../utils";
import "./Home.css";

export const Home = () => {
  const [orderBy, setOrderBy] = useLocalStorage("orderBy", "", "ORDER_BY");
  const [items, setItems] = useLocalStorage("items", initialItems, "ADD_ITEMS");
  const [isDialogOpened, setIsDialogOpened] = useLocalStorage(
    "isDialogOpened",
    false,
    "TOGGLE_DIALOG"
  );

  const setFormValues = useLocalStorage("formValues", {}, "SET_FORM_VALUES")[1];

  useEffect(() => {
    lazyLoadImages();
  });

  const openDialog = () => {
    setIsDialogOpened(true);
  };

  const handleClose = () => {
    setIsDialogOpened(false);
    setFormValues({});
  };

  const handleChange = event => {
    setOrderBy(event.target.value, "ORDER_BY");
    setItems(orderItems(event.target.value), "ADD_ITEMS");
  };

  const addItem = item => {
    if (checkIdExists(item.id, items)) {
      const _items = items.filter(_item => item.id !== _item.id);
      return setItems([..._items, item], "ADD_ITEMS");
    }
    return setItems([...items, item], "ADD_ITEMS");
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
