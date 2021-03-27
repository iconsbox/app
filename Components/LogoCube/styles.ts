import styled from "styled-components";

export const StyledLogoCube = styled.section<{ size: number }>`
  --size: ${({ size }: { size: number }) => size}px;
  width: var(--size);
  height: var(--size);
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  -o-perspective: 1000px;
  perspective: 1000px;
  cursor: pointer;
  border-radius: 13px;

  &.fixed {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 9999;
    transform: translate(-50%, -50%);
  }
  &.loaded {
    position: absolute;
    left: 24px;
    top: 12px;
    --size: 100px;
  }
  &.hide {
    display: none;
  }
  &:before {
    content: "";
    width: 90%;
    height: 90%;
    box-shadow: 0 24px 67px -9px rgb(0 0 0 / 77%);
    position: absolute;
  }
`;

export const StyledCube = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: -webkit-transform 0.5s;
  -moz-transition: -moz-transform 0.5s;
  -o-transition: -o-transform 0.5s;
  transition: transform 0.5s;
  font-family: "Indie Flower", cursive;

  .front {
    -webkit-transform: translateZ(calc(var(--size) / 2.4));
    -moz-transform: translateZ(calc(var(--size) / 2.4));
    -o-transform: translateZ(calc(var(--size) / 2.4));
    transform: translateZ(calc(var(--size) / 2.4));
  }
  &.show-1 {
    -webkit-transform: translateZ(calc(var(--size) / 4 * -1));
    -moz-transform: translateZ(calc(var(--size) / 4 * -1));
    -o-transform: translateZ(calc(var(--size) / 4 * -1));
    transform: translateZ(calc(var(--size) / 4 * -1));
  }

  .back {
    -webkit-transform: rotateX(-180deg) translateZ(calc(var(--size) / 2.4));
    -moz-transform: rotateX(-180deg) translateZ(calc(var(--size) / 2.4));
    -o-transform: rotateX(-180deg) translateZ(calc(var(--size) / 2.4));
    transform: rotateX(-180deg) translateZ(calc(var(--size) / 2.4));
  }
  &.show-2 {
    -webkit-transform: translateZ(calc(var(--size) / 4 * -1)) rotateX(-180deg);
    -moz-transform: translateZ(calc(var(--size) / 4 * -1)) rotateX(-180deg);
    -o-transform: translateZ(calc(var(--size) / 4 * -1)) rotateX(-180deg);
    transform: translateZ(calc(var(--size) / 4 * -1)) rotateX(-180deg);
  }

  .right {
    -webkit-transform: rotateY(90deg) translateZ(calc(var(--size) / 2.4));
    -moz-transform: rotateY(90deg) translateZ(calc(var(--size) / 2.4));
    -o-transform: rotateY(90deg) translateZ(calc(var(--size) / 2.4));
    transform: rotateY(90deg) translateZ(calc(var(--size) / 2.4));
  }
  &.show-3 {
    -webkit-transform: translateZ(calc(var(--size) / 4 * -1)) rotateY(-90deg);
    -moz-transform: translateZ(calc(var(--size) / 4 * -1)) rotateY(-90deg);
    -o-transform: translateZ(calc(var(--size) / 4 * -1)) rotateY(-90deg);
    transform: translateZ(calc(var(--size) / 4 * -1)) rotateY(-90deg);
  }

  .left {
    -webkit-transform: rotateY(-90deg) translateZ(calc(var(--size) / 2.4));
    -moz-transform: rotateY(-90deg) translateZ(calc(var(--size) / 2.4));
    -o-transform: rotateY(-90deg) translateZ(calc(var(--size) / 2.4));
    transform: rotateY(-90deg) translateZ(calc(var(--size) / 2.4));
  }
  &.show-4 {
    -webkit-transform: translateZ(calc(var(--size) / 4 * -1)) rotateY(90deg);
    -moz-transform: translateZ(calc(var(--size) / 4 * -1)) rotateY(90deg);
    -o-transform: translateZ(calc(var(--size) / 4 * -1)) rotateY(90deg);
    transform: translateZ(calc(var(--size) / 4 * -1)) rotateY(90deg);
  }

  .top {
    -webkit-transform: rotateX(90deg) translateZ(calc(var(--size) / 2.4));
    -moz-transform: rotateX(90deg) translateZ(calc(var(--size) / 2.4));
    -o-transform: rotateX(90deg) translateZ(calc(var(--size) / 2.4));
    transform: rotateX(90deg) translateZ(calc(var(--size) / 2.4));
  }
  &.show-5 {
    -webkit-transform: translateZ(calc(var(--size) / 4 * -1)) rotateX(-90deg);
    -moz-transform: translateZ(calc(var(--size) / 4 * -1)) rotateX(-90deg);
    -o-transform: translateZ(calc(var(--size) / 4 * -1)) rotateX(-90deg);
    transform: translateZ(calc(var(--size) / 4 * -1)) rotateX(-90deg);
  }

  .bottom {
    -webkit-transform: rotateX(-90deg) translateZ(calc(var(--size) / 2.4));
    -moz-transform: rotateX(-90deg) translateZ(calc(var(--size) / 2.4));
    -o-transform: rotateX(-90deg) translateZ(calc(var(--size) / 2.4));
    transform: rotateX(-90deg) translateZ(calc(var(--size) / 2.4));
  }
  &.show-6 {
    -webkit-transform: translateZ(calc(var(--size) / 4 * -1)) rotateX(90deg);
    -moz-transform: translateZ(calc(var(--size) / 4 * -1)) rotateX(90deg);
    -o-transform: translateZ(calc(var(--size) / 4 * -1)) rotateX(90deg);
    transform: translateZ(calc(var(--size) / 4 * -1)) rotateX(90deg);
  }

  &.panels-backface-invisible figure {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
  }
`;

export const StyledCubeFigure = styled.figure`
  display: block;
  position: absolute;
  width: var(--size);
  height: var(--size);
  line-height: var(--size);
  font-size: calc(var(--size) / 2.4);
  color: #fff;
  text-align: center;
  margin: 0 !important;
  border-radius: 13px;
  overflow: hidden;
  background: #303030;
`;
