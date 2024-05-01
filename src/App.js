import React, { useState, useEffect } from "react";
import "./App.css";

function CountryCard({ country }) {
  return (
    <div className="card">
      <div className="country-info">
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          className="flag-image"
        />
        <p className="country-name">{country.name.common}</p>
      </div>
    </div>
  );
}

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
}

export default App;
