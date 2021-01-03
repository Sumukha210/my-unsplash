import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AddImage from "../add image/AddImage";

const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showAddImage, setShowAddImage] = useState(false);

  const history = useHistory();

  const handleSearch = e => {
    setSearchValue(e.target.value);
  };

  const handleAddUser = e => {
    setShowAddImage(!showAddImage);
  };

  useEffect(() => {
    document.body.style.overflow = showAddImage ? "hidden" : "initial";
  }, [showAddImage]);

  const closeMenu = () => setShowAddImage(false);

  return (
    <>
      <header className="navbar">
        <nav className="navbar__container">
          <div className="left">
            <div className="navbar__logo" onClick={() => history.push("/")}>
              <img src="/logo.svg" alt="" />
            </div>
            <div className="navbar__search">
              <input
                type="text"
                onChange={handleSearch}
                value={searchValue}
                className="searchbar"
                placeholder="search by name"
              />
              <span>
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
          <div className="right">
            <div className="navbar__add" onClick={handleAddUser}>
              <i className="fas fa-plus-circle"></i>
            </div>

            <div
              className="navbar__gallery"
              onClick={() => history.push("/gallery")}>
              <i className="fas fa-images"></i>
            </div>

            <div
              className="navbar__user"
              onClick={() => history.push("/userAccount")}>
              <i className="fas fa-user-circle"></i>
            </div>
          </div>
        </nav>
      </header>

      <AddImage showAddImage={showAddImage} closeMenu={closeMenu} />
      {showAddImage && <div className="overlay"></div>}
    </>
  );
};

export default NavBar;
