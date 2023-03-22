import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import CountryDetails from "./Components/CountryDetails";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { GlobalStyle } from "./Components/StyledComponent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <GlobalStyle>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/countryDetails/:name" element={<CountryDetails />} />

          {/* 404 not found */}
          <Route
            path="*"
            element={<h1 style={{ textAlign: "center" }}>404. Not Found</h1>}
          />
        </Routes>
      </GlobalStyle>
    </BrowserRouter>
  );
}

export default App;
