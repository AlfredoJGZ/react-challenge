import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function FavButton({ state, buttonAction, name, favorites, thumbnail }) {
  const [active, setActive] = useState(false);

  function handleFavs() {
    const i = favorites.findIndex((favorite) => favorite.name === name);
    if (i > -1) {
      favorites.splice(i, 1);
      setActive(false);
    } else {
      favorites.push({ name: name, thumbnail: thumbnail });
      setActive(true);
    }
    return favorites;
  }

  return favorites !== undefined ? (
    <button
      className={`position-relative ${active ? "active" : ""}`}
      style={{ zIndex: 1 }}
      onClick={() => {
        buttonAction(handleFavs());
      }}
    >
      <FontAwesomeIcon icon={faHeart} />
    </button>
  ) : (
    <button
      className={`position-relative ${state ? "active" : ""}`}
      style={{ zIndex: 1 }}
      onClick={() => {
        buttonAction();
      }}
    >
      <FontAwesomeIcon icon={faHeart} />
    </button>
  );
}

export default FavButton;
