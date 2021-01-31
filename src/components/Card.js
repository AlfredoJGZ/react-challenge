import React, { useContext, useState, useEffect } from "react";
import FavButton from "../components/FavButton";
import { FavoritesContext } from "../components/FavoritesContext";
function Card({ style, index, data }) {
  const [favorites, setFavorites] = useContext(FavoritesContext);
  const [active, setActive] = useState();

  useEffect(() => {
    favorites.find((favorite) => favorite.name === data[index].name) !==
    undefined
      ? setActive(true)
      : setActive(false);
  }, [active, favorites, data, index]);

  return (
    <div style={style} className="px-2">
      <div className="card">
        <div style={{ maxWidth: "232px", maxHeight: "232px" }}>
          <img
            src={`${data[index].thumbnail.path}.jpg`}
            className="card-img-top"
            alt={data[index].name}
            style={{ minWidth: "232px", minHeight: "232px" }}
          />
        </div>
        <div className="card-body bg-dark">
          <h5 className="card-title text-light">{data[index].name}</h5>
          <p className="card-text text-light">{data[index].description}</p>
          <div className="d-flex w-100 justify-content-between">
            <a href="/" className="btn border border-2">
              See more
            </a>
            <FavButton
              buttonAction={setFavorites}
              name={data[index].name}
              thumbnail={`${data[index].thumbnail.path}.jpg`}
              favorites={favorites}
              state={active}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
