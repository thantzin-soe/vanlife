import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import VanListPage, { loader as vanListLoader } from "./pages/VanListPage.jsx";
import VanDetailPage from "./pages/VanDetailPage.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostVans from "./pages/Host/HostVans.jsx";
import HostVanDetails from "./pages/Host/HostVanDetails.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import NotFound from "./pages/NotFound.jsx";
import LoginPage from "./pages/LoginPage.jsx";

import Layout from "./components/Layout.jsx";
import HostLayout from "./components/HostLayout.jsx";
import "./server.js";
import Error from "./components/Error.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route path="*" element={<NotFound />} />
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="vans">
        <Route index element={<VanListPage />} loader={vanListLoader} />
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
      <Route path="login" element={<LoginPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
