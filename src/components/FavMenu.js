import React, { useContext } from "react";
import FavCard from "../components/FavCard";
import { FavoritesContext } from "../components/FavoritesContext";

function FavMenu({ showState }) {
  const [favorites] = useContext(FavoritesContext);

  return (
    <div
      className={`fav-menu bg-dark text-light d-flex flex-column align-items-end mt-5 ${
        showState ? "toggle" : ""
      }`}
    >
      {favorites.length > 0 ? (
        <FavCard favs={favorites} />
      ) : (
        <h6 className="m-5">There's not favorites selected</h6>
      )}
    </div>
  );
}

export default FavMenu;
