import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledLink, StyledTable } from "./StyledComponent";
import { useLocation } from "react-router-dom";

const CountryDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name } = useParams();
  const [country, setCountry] = useState("");
  console.log(location);
  const fetchCountry = () => {
    return axios
      .get(`https://restcountries.com/v2/name/${name}`)
      .then((response) => setCountry(response.data[0]))
      .catch((err) => {
        console.log(err.message);
        navigate("*");
      });
  };
  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <div>
      <StyledTable>
        <caption>{country.name}</caption>
        <tbody>
          <tr>
            <th>Top Level Domain</th>
            <td>{country.topLevelDomain}</td>
          </tr>
          <tr>
            <th>Alpha 2 Code</th>
            <td>{country.alpha2Code}</td>
          </tr>
          <tr>
            <th>Alpha 3 Code</th>
            <td>{country.alpha3Code}</td>
          </tr>
          <tr>
            <th>Calling Codes</th>
            <td>{country.callingCodes}</td>
          </tr>
          <tr>
            <th>Capital</th>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <th>Sub Region</th>
            <td>{country.subregion}</td>
          </tr>
          <tr>
            <th>Region</th>
            <td>{country.region}</td>
          </tr>
          <tr>
            <th>Population</th>
            <td>{country.population}</td>
          </tr>
          <tr>
            <th>Demonym</th>
            <td>{country.demonym}</td>
          </tr>
          <tr>
            <th>Area</th>
            <td>{country.area}</td>
          </tr>
          <tr>
            <th>Flag</th>
            <td>
              <img src={country.flag} alt="flag" width="100px" />
            </td>
          </tr>
          <tr>
            <th>Independent</th>
            <td>{country.independent === true ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </StyledTable>
      <StyledLink marginLeft="10px" to={`${location.state?.pathname}`}>
        Go Back
      </StyledLink>
      <StyledLink marginLeft="10px" to="/about" state={location}>
        About Us
      </StyledLink>
    </div>
  );
};

export default CountryDetails;
