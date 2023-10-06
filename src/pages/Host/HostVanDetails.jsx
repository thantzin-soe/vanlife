import { Link, NavLink, useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const HostVanDetails = () => {
  const [van, setVan] = useState(null);
  const { id } = useParams();

  const activeLinkStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  useEffect(() => {
    fetch(`/api/host/vans/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  if (!van) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={van.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${van.type}`}>{van.type}</i>
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink
            end
            to="."
            style={({ isActive }) => (isActive ? activeLinkStyle : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeLinkStyle : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeLinkStyle : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ van: van }} />
      </div>
    </section>
  );
};

export default HostVanDetails;
