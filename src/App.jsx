import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import VanListPage from "./pages/VanListPage.jsx";
import VanDetailPage from "./pages/VanDetailPage.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostVans from "./pages/Host/HostVans.jsx";
import HostVanDetails from "./pages/Host/HostVanDetails.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";

import Layout from "./components/Layout.jsx";
import HostLayout from "./components/HostLayout.jsx";
import "./server.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="vans">
              <Route index element={<VanListPage />} />
              <Route path=":id" element={<VanDetailPage />} />
            </Route>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetails />}>
                <Route index element={<HostVanInfo />}></Route>
                <Route path="pricing" element={<HostVanPricing />}></Route>
                <Route path="photos" element={<HostVanPhotos />}></Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
