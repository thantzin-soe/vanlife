import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import VanListPage from "./pages/VanListPage.jsx";
import VanDetailPage from "./pages/VanDetailPage.jsx";
import "./server.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link className="site-logo" to="/">
            #VANLIFE
          </Link>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/vans" element={<VanListPage />}></Route>
          <Route path="/vans/:id" element={<VanDetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
