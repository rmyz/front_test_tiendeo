import React from "react";
import "./Home.css";
import CardWrapper from "../../components/CardWrapper";
import { initialItems } from "../../utils";

export const Home = () => {
  const items = initialItems();

  return (
    <>
      <CardWrapper items={items} />
    </>
  );
};
