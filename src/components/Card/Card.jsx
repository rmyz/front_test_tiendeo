import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="Card">
      <div className="Card__imageWrapper">
        {imgUrl && <img className="Card__image" src={imgUrl} alt="news" />}
      </div>
      <div className="Card__title">{title}</div>
      <div className="Card__description">{description}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string
};
