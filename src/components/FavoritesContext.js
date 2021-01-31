import React, { useState, useMemo, createContext } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const value = useMemo(() => [favorites, setFavorites], [favorites]);

  return <FavoritesContext.Provider value={value} {...props} />;
};
