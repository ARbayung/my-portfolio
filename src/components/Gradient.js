import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const GradientContainer = styled.div`
  height: 100vh;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    filter: url(#noise);
    pointer-events: none;
  }
`;

const NoiseFilter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
    </filter>
  </svg>
);

const GradientBackground = ({ children }) => (
  <GradientContainer>
    <NoiseFilter />
    {children}
  </GradientContainer>
);

export default GradientBackground;