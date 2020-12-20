import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 860px;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAppMain = styled.section`
  border-radius: 20px;
  background: #fff;
  max-height: 100%;
  overflow: auto;
  width: 100%;
`;

export const StyledLogoCube = styled.section`
    width: 200px;
    height: 200px;
    position: relative;
    -webkit-perspective: 1000px;
    -moz-perspective: 1000px;
    -o-perspective: 1000px;
    perspective: 1000px;
    cursor: pointer;
    margin-left: 15px;
    top: 12rem;
    box-shadow: 0 24px 67px -9px rgba(0, 0, 0, 0.77);
    border-radius: 13px;
`;

export const StyledCube = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: -webkit-transform .5s;
  -moz-transition: -moz-transform .5s;
  -o-transition: -o-transform .5s;
  transition: transform .5s;
    
  &.show-spining {
    -webkit-transform: translateZ(-50px) rotateX(20deg) rotateY(20deg);
    -moz-transform: translateZ(-50px) rotateX(20deg) rotateY(20deg);
    -o-transform: translateZ(-50px) rotateX(20deg) rotateY(20deg);
    transform: translateZ(-50px) rotateX(20deg) rotateY(20deg);
  }

  &.show-1 {
    -webkit-transform: translateZ(-50px);
    -moz-transform: translateZ(-50px);
    -o-transform: translateZ(-50px);
    transform: translateZ(-100px)
  }
  
  &.show-2 {
    -webkit-transform: translateZ(-50px) rotateX(-180deg);
    -moz-transform: translateZ(-50px) rotateX(-180deg);
    -o-transform: translateZ(-50px) rotateX(-180deg);
    transform: translateZ(-100px) rotateX(-180deg)
  }
  
  &.show-3 {
    -webkit-transform: translateZ(-50px) rotateY(-90deg);
    -moz-transform: translateZ(-50px) rotateY(-90deg);
    -o-transform: translateZ(-50px) rotateY(-90deg);
    transform: translateZ(-100px) rotateY(-90deg);
  }
  
  &.show-4 {
    -webkit-transform: translateZ(-50px) rotateY(90deg);
    -moz-transform: translateZ(-50px) rotateY(90deg);
    -o-transform: translateZ(-50px) rotateY(90deg);
    transform: translateZ(-100px) rotateY(90deg)
  }
  
  &.show-5 {
    -webkit-transform: translateZ(-50px) rotateX(-90deg);
    -moz-transform: translateZ(-50px) rotateX(-90deg);
    -o-transform: translateZ(-50px) rotateX(-90deg);
    transform: translateZ(-100px) rotateX(-90deg)
  }
  
  &.show-6 {
    -webkit-transform: translateZ(-50px) rotateX(90deg);
    -moz-transform: translateZ(-50px) rotateX(90deg);
    -o-transform: translateZ(-50px) rotateX(90deg);
    transform: translateZ(-100px) rotateX(90deg);
  }
  &.panels-backface-invisible figure {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden
  }
  
  .front {
    -webkit-transform: translateZ(50px);
    -moz-transform: translateZ(50px);
    -o-transform: translateZ(50px);
    transform: translateZ(110px);
  }

  .back {
    -webkit-transform: rotateX(-180deg) translateZ(50px);
    -moz-transform: rotateX(-180deg) translateZ(50px);
    -o-transform: rotateX(-180deg) translateZ(50px);
    transform: rotateX(-180deg) translateZ(110px);
  }

  .right {
    -webkit-transform: rotateY(90deg) translateZ(50px);
    -moz-transform: rotateY(90deg) translateZ(50px);
    -o-transform: rotateY(90deg) translateZ(50px);
    transform: rotateY(90deg) translateZ(110px);
  }

  .left {
    -webkit-transform: rotateY(-90deg) translateZ(50px);
    -moz-transform: rotateY(-90deg) translateZ(50px);
    -o-transform: rotateY(-90deg) translateZ(50px);
    transform: rotateY(-90deg) translateZ(110px);
  }

  .top {
    -webkit-transform: rotateX(90deg) translateZ(50px);
    -moz-transform: rotateX(90deg) translateZ(50px);
    -o-transform: rotateX(90deg) translateZ(50px);
    transform: rotateX(90deg) translateZ(122px);
  }

  .bottom {
    -webkit-transform: rotateX(-90deg) translateZ(50px);
    -moz-transform: rotateX(-90deg) translateZ(50px);
    -o-transform: rotateX(-90deg) translateZ(50px);
    transform: rotateX(-90deg) translateZ(110px);
  }
`;

export const StyledCubeFigure = styled.div`
  display: block;
  position: absolute;
  width: 200px;
  height: 200px;
  line-height: 197px;
  font-size: 60px;
  color: #fff;
  text-align: center;
  margin: 0 !important;
  border-radius: 13px;
  overflow: hidden;
  background: #303030;
`;
