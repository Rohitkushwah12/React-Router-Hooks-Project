import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyledLink, StyledTable } from "./StyledComponent";
import { useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  const [countrys, setCountrys] = useState([]);
  const fetchCountrys = () => {
    return axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountrys(response.data));
  };
  useEffect(() => {
    fetchCountrys();
  }, []);
  return (
    <StyledTable>
      <caption>List of Countries</caption>
      <tr>
        <th>Name</th>
        <th>Capital</th>
        <th>Details</th>
      </tr>
      <tbody>
        {countrys.map((country) => {
          return (
            <tr>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>
                {" "}
                <StyledLink
                  to={`countryDetails/${country.name}`}
                  state={location}
                >
                  See Details
                </StyledLink>
                <StyledLink to="/about" state={location}>
                  About Us
                </StyledLink>
              </td>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default Home;
