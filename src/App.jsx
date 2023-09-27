import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";

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
            <Link to="/">Vans</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
