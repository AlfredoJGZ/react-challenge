import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import FavMenu from "./components/FavMenu";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Router() {
  const [showFavMenu, setShowFavMenu] = useState(false);

  function toggleFavMenu() {
    setShowFavMenu(!showFavMenu);
  }

  return (
    <BrowserRouter>
      <div style={{ overflowX: "hidden", position: "relative" }}>
        <header>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Navbar
                  buttonAction={toggleFavMenu}
                  showFavMenu={showFavMenu}
                />
              )}
            />
          </Switch>
          <Switch>
            <Route exact path="/" component={Hero} />
          </Switch>
        </header>

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <main>
                <Section title="Characters" />
              </main>
            )}
          />
        </Switch>
      </div>
      <FavMenu showState={showFavMenu} />
    </BrowserRouter>
  );
}

export default Router;
