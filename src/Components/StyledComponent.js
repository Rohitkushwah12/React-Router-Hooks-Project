import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: separate;
  width: 90%;
  border-spacing: 5px 10px;
  margin-left: auto;
  margin-right: auto;

  tbody tr {
    :nth-of-type(odd) {
      background-color: papayawhip;
    }
  }
  th {
    background-color: #c2c2c2;
    font-size: bold;
    height: 60px;
  }

  td,
  th {
    border: none;
    padding: 5px 10px;
    text-align: center;
  }
  caption {
    font-size: 2em;
    padding: 10px;
    font-weight: bold;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: palevioletred;
  width: 80px;
  height: 25px;
  border: 2px solid palevioletred;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin-top: 10px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "30%")};

  &:hover,
  &:focus {
    color: grey;
  }
  &:active {
    width: 75px;
    height: 22px;
  }
`;

export const GlobalStyle = styled.div`
  background-color: #f4f6f7;
  border: 2px solid white;
  border-radius: 10px;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 70px;
  margin-bottom: 70px;
`;
