import React from "react";
import "./assets/styles/bootstrap.min.css";
import "./App.css";
import { FavoritesProvider } from "./components/FavoritesContext";
import Router from "./Router";

function App() {
  return (
    <FavoritesProvider>
      <Router />
    </FavoritesProvider>
  );
}

export default App;
