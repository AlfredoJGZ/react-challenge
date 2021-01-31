import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import FavMenu from "./components/FavMenu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";

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

        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Section title="Characters" />}
            />
            <Route
              exact
              path="/character/:id"
              render={(props) => {
                let id = props.match.params.id;
                return <Detail id={id} title="character" />;
              }}
            />
          </Switch>
        </main>

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
