import React, { useState } from "react";

const AddImage = ({ showAddImage, closeMenu }) => {
  const [imageName, setImgName] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  return (
    <div className={showAddImage ? `addImage open` : `addImage`}>
      <div className="addImage__container">
        <div className="browseImages">
          <h6 className="addImage__title">Browse images from our gallary</h6>
          <button className="btn">Browse Now</button>
        </div>

        <div className="or">Or</div>

        <span className="closeMenu" onClick={() => closeMenu()}>
          X
        </span>
        <form>
          <div className="addImage__group">
            <h6 className="addImage__title">Add image Url</h6>
            <label htmlFor="name">Image name</label>
            <br />
            <input
              type="text"
              name="imgName"
              id="name"
              placeholder="lion"
              value={imageName}
              onChange={e => setImgName(e.target.value)}
            />
          </div>

          <div className="addImage__group">
            <label htmlFor="url">Image url</label>
            <br />
            <input
              type="text"
              name="imgUrl"
              id="url"
              placeholder="https://unsplash.com/photos/pF4iSe6NVkI"
              value={imgUrl}
              onChange={e => setImgUrl(e.target.value)}
            />
          </div>

          <div className="addImage__btnGroup">
            <button type="reset">cancel</button>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddImage;
