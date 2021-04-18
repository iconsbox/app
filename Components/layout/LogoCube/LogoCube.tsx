import { useState, useLayoutEffect } from "react";
import { StyledLogoCube, StyledCube, StyledCubeFigure } from "./styles";

type Props = {
  withDelay?: boolean;
  fixed?: boolean;
  size?: number;
  className?: string;
  bg?: string;
  color?: string;
};

function LogoCube({
  withDelay = true,
  fixed = true,
  size = 200,
  className = "",
  bg = "#303030",
  color = "#fff",
}: Props) {
  const [slide, setSlide] = useState(1);
  const animateSlides = [0, 5, 4, 1, 3];

  useLayoutEffect(() => {
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
  }, [slide, withDelay]);

  return (
    <StyledLogoCube
      bg={bg}
      color={color}
      className={`${fixed ? "fixed" : ""} ${className}`}
      size={size}
    >
      <StyledCube className={`cube show-${animateSlides[slide]}`}>
        <StyledCubeFigure className="cubeFigure front">Icon</StyledCubeFigure>
        <StyledCubeFigure className="cubeFigure back" />
        <StyledCubeFigure className="cubeFigure right">Box</StyledCubeFigure>
        <StyledCubeFigure className="cubeFigure left">
          <span aria-label="love" role="img">
            🥰
          </span>
        </StyledCubeFigure>
        <StyledCubeFigure className="cubeFigure top">
          <span aria-label="yeah" role="img">
            😉
          </span>
        </StyledCubeFigure>
        <StyledCubeFigure className="cubeFigure bottom" />
      </StyledCube>
    </StyledLogoCube>
  );
}

export default LogoCube;
