import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";

import Accueil from "./pages/Accueil";
import Qui from "./pages/Qui";
import Seance from "./pages/Seance";
import Presentation from "./pages/Presentation";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import Erreur404 from "./pages/Erreur404";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faTimes);

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/tarifs">
              <Tarifs />
            </Route>
            <Route path="/qui">
              <Qui />
            </Route>
            <Route path="/presentation">
              <Presentation />
            </Route>
            <Route path="/seance">
              <Seance />
            </Route>
            <Route exact path="/">
              <Accueil />
            </Route>
            <Route path="*">
              <Erreur404 />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
