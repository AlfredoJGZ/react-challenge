import React from "react";

function FavCard({ favs }) {
  return favs.map((fav) => (
    <div className="w-100 p-3 text-center" key={fav.name}>
      <img src={fav.thumbnail} alt={fav.name} className="w-100 rounded-top" />

      <h4 className="text-light">{fav.name}</h4>
    </div>
  ));
}

export default FavCard;
