import React from "react";
import CardImage from "./CardImage";
import { useSelector } from "react-redux";

const ImageContainer = () => {
  const images = useSelector(ImageReducer => ImageReducer);

  console.log(images);

  return (
    <div className="imageContainer">
      {images.length ? (
        images.map(({ src, id, name }) => (
          <CardImage key={id} id={id} img={src} name={name} />
        ))
      ) : (
        <h3 className="defaultInstro">
          No images found ,Click on "+" icon to add images{" "}
        </h3>
      )}
    </div>
  );
};

export default ImageContainer;
