import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "./components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
library.add(faBars, faTimes);

const Accueil = lazy(() => import("./pages/Accueil"));
const Qui = lazy(() => import("./pages/Qui"));
const Seance = lazy(() => import("./pages/Seance"));
const Presentation = lazy(() => import("./pages/Presentation"));
const Tarifs = lazy(() => import("./pages/Tarifs"));
const Contact = lazy(() => import("./pages/Contact"));
const Erreur404 = lazy(() => import("./pages/Erreur404"));

const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '50vh',
    fontSize: '18px'
  }}>
    Chargement...
  </div>
);

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/contact" element={<Contact />} />
              <Route path="/tarifs" element={<Tarifs />} />
              <Route path="/qui" element={<Qui />} />
              <Route path="/presentation" element={<Presentation />} />
              <Route path="/seance" element={<Seance />} />
              <Route path="/" element={<Accueil />} />
              <Route path="*" element={<Erreur404 />} />
            </Routes>
          </Suspense>
        </main>
      </Router>
    </div>
  );
}

export default App;
