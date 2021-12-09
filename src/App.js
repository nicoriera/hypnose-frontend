import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Accueil from "./pages/Accueil";
import Qui from "./pages/Qui";
import Seance from "./pages/Seance";
import Presentation from "./pages/Presentation";
import Therapies from "./pages/Therapies";
import Contact from "./pages/Contact";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars} from '@fortawesome/free-solid-svg-icons'
library.add(faBars)

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="site-container">
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/therapies">
              <Therapies />
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
            <Route path="/">
              <Accueil />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
