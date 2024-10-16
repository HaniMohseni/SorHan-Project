import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

// Import images
import bg1 from "../asset/1.jpg";
import bg2 from "../asset/2.jpg";
import bg3 from "../asset/3.jpg";
import bg4 from "../asset/4.jpg";

// Animation for filling the rectangles
const fillAnimation = keyframes`
  0% { height: 0; }
  100% { height: 100%; }
`;

// Styled component for the entire section
const AdsContainer = styled.div`
  position: absolute;
  left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  margin-top: 20px;
  align-items: flex-start;
`;

// Narrow rectangles with rounded corners and animation
const AdBar = styled.div`
  width: 10px;
  height: 65px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: ${(props) =>
    props.state === "filled" ? "100%" : "0"}; /* Filled if previous */
  background-color: ${(props) =>
    props.state === "current"
      ? "white"
      : props.state === "filled"
      ? "white"
      : "rgba(255, 255, 255, 0.5)"}; /* Solid white for current and filled, semi-transparent for next */

  ${({ state }) =>
    state === "current" &&
    css`
      animation: ${fillAnimation} 4s linear forwards;
    `}
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;
`;

// Styled for changing the background of the page
const HomeContainer = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
`;

const HomeAds = () => {
  const [currentBackground, setCurrentBackground] = useState(bg1);
  const [currentBar, setCurrentBar] = useState(0);

  const backgrounds = [bg1, bg2, bg3, bg4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBar((prev) => (prev + 1) % backgrounds.length);
      setCurrentBackground(backgrounds[(currentBar + 1) % backgrounds.length]);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [currentBar, backgrounds]);

  return (
    <HomeContainer background={currentBackground}>
      <AdsContainer>
        {[0, 1, 2, 3].map((barIndex) => (
          <AdBar key={barIndex}>
            <ProgressBar
              key={`progress-${barIndex}`}
              state={
                barIndex < currentBar
                  ? "filled" // Bars that are already filled
                  : barIndex === currentBar
                  ? "current" // The bar currently being animated
                  : "empty" // Future bars
              }
            />
          </AdBar>
        ))}
      </AdsContainer>
    </HomeContainer>
  );
};

export default HomeAds;
