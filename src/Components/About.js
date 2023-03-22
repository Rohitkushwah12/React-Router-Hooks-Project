import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { StyledLink } from "./StyledComponent";

const About = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [previousPath, setPreviousPath] = useState(location.state?.pathname);
  const [homePath, setHomePath] = useState(location.state?.state);
  useEffect(() => {
    if (location.pathname !== currentPath) {
      setHomePath(previousPath);
      setPreviousPath(currentPath);
      setCurrentPath(location.pathname);
    }
  }, [location.pathname]);

  console.log(location);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>About</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <StyledLink marginLeft="10px" to={`${previousPath}`} state={homePath}>
        Go Back
      </StyledLink>
    </div>
  );
};

export default About;
