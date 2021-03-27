import React from "react";
import { useState, useEffect } from "react";
import { StyledLogoCube, StyledCube, StyledCubeFigure } from "./styles";

type Props = {
  withDelay?: boolean;
  fixed?: boolean;
  size?: number;
  className?: string;
};

function LogoCube({
  withDelay = true,
  fixed = true,
  size = 200,
  className = "",
}: Props) {
  const [slide, setSlide] = useState(1);
  const animateSlides = [0, 5, 4, 1, 3];

  useEffect(() => {
    let timeout;
    if (withDelay && slide === 4) {
      timeout = 3000;
    } else {
      timeout = slide < 3 ? 600 : 1000;
    }
    setTimeout(() => {
      if (slide < 4) {
        setSlide(slide + 1);
      } else {
        setSlide(1);
      }
    }, timeout);
  }, [slide]);

  return (
    <StyledLogoCube
      className={`${fixed ? "fixed" : ""} ${className}`}
      size={size}
    >
      <StyledCube className={`show-${animateSlides[slide]}`}>
        <StyledCubeFigure className="front">Icon</StyledCubeFigure>
        <StyledCubeFigure className="back" />
        <StyledCubeFigure className="right">Box</StyledCubeFigure>
        <StyledCubeFigure className="left">🥰</StyledCubeFigure>
        <StyledCubeFigure className="top">😉</StyledCubeFigure>
        <StyledCubeFigure className="bottom" />
      </StyledCube>
    </StyledLogoCube>
  );
}

export default LogoCube;
