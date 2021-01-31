import React from "react";
import FavButton from "../components/FavButton";
import MarvelLogo from "../assets/images/MarvelLogo.svg";

function Navbar({ showFavMenu, buttonAction }) {
  return (
    <div className="bg-dark position-relative">
      <div className="navbar container-xxl">
        <img src={MarvelLogo} alt="Marvel Logo" />
        <FavButton state={showFavMenu} buttonAction={buttonAction} />
      </div>
    </div>
  );
}

export default Navbar;
