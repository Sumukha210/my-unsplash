import React from "react";

const CardImage = ({ img, name, id }) => {
  return (
    <figure className="cardImg">
      <img src={img} alt="" />
      <span className="name">{name}</span>
      <div className="overlay"></div>
      <div className="cardImg__buttons">
        <a
          href={img}
          className="download"
          download
          target="_blank"
          rel="noreferrer">
          <i className="fas fa-download"></i>
        </a>
        <a href="#" className="delete">
          <i className="fas fa-trash"></i>
        </a>
      </div>
    </figure>
  );
};

export default CardImage;
