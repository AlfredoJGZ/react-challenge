import React, { useState } from "react";
import "./assets/styles/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import FavMenu from "./components/FavMenu";
import Hero from "./components/Hero";
import Section from "./components/Section";
import { FavoritesProvider } from "./components/FavoritesContext";

function App() {
  const [showFavMenu, setShowFavMenu] = useState(false);

  function toggleFavMenu() {
    setShowFavMenu(!showFavMenu);
  }

  return (
    <FavoritesProvider>
      <div style={{ overflowX: "hidden", position: "relative" }}>
        <header>
          <Navbar buttonAction={toggleFavMenu} showFavMenu={showFavMenu} />
          <Hero />
        </header>
        <main>
          <Section title="Characters" />
        </main>
        <section>
          <Section title="Characters" />
        </section>
        <FavMenu showState={showFavMenu} />
      </div>
    </FavoritesProvider>
  );
}

export default App;
