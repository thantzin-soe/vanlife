import { useEffect, useState } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";

import { getVans } from "../api";

function VanListPage() {
  const vans = useLoaderData();

  // const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");
  const displayVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const handleFilterChange = (obj) => {
    setSearchParams((prev) => ({ ...prev, ...obj }));
  };

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange({ type: "simple" })}
        >
          Simple
        </button>
        <button
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange({ type: "luxury" })}
        >
          Luxury
        </button>
        <button
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange({ type: "rugged" })}
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            className="van-type clear-filters"
            onClick={() => handleFilterChange({})}
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="van-list">
        {displayVans.map((van) => (
          <div key={van.id} className="van-tile">
            <Link
              key={van.id}
              to={van.id}
              state={{
                search: `?${searchParams.toString()}`,
                type: typeFilter,
              }}
            >
              <img src={van.imageUrl} />
              <div className="van-info">
                <h3>{van.name}</h3>
                <p>
                  ${van.price}
                  <span>/day</span>
                </p>
              </div>
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VanListPage;

export const loader = async () => {
  const vans = await getVans();
  return vans;
};
