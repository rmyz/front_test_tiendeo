import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";

import "./CardWrapper.css";

export const CardWrapper = ({ items }) => {
  return (
    <div className="CardWrapper">
      {items.map(item => {
        return (
          <Card
            id={item.id}
            key={item.id}
            title={item.title}
            imgUrl={item.imgUrl}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

CardWrapper.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      imgUrl: PropTypes.string
    })
  )
};

CardWrapper.defaultProps = {
  items: []
};
