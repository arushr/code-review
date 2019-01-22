import React from "react";

import styled from "styled-components";
import batman from "../assets/batman.png";
import superman from "../assets/superman.jpeg";
import flash from "../assets/flash.jpg";
const SecondComponentContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  border-radius: 1em;
  min-width: 720px;
  justify-content: flex-end;
  margin-right: 20px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: lightgrey;
  height: ${props => (props.show ? "40vh" : "80vh")};
  transition-duration: 1.2s;
  text-align: center;
  position: relative;

  width: 100%;
  border: 1px solid grey;
  border-radius: 3px;

  &:after {
    background: linear-gradient(
      to right,
      grey 25%,
      #e84f47 25%,
      #e84f47 50%,
      #ffcd02 50%,
      #ffcd02 75%,
      #65c1ac 75%
    );
    border-radius: 1em;

    position: absolute;
    content: "";
    height: 4px;

    right: 0;
    left: 0;
    top: 0;
  }
  &:before {
    background: linear-gradient(
      to bottom,
      grey 25%,
      #ffcd02 25%,
      #ffcd02 50%,
      #e84f47 50%,
      #e84f47 75%,
      #65c1ac 75%
    );
    border-radius: 1em;
    position: absolute;
    content: "";
    height: ${props => (props.show ? "39.7vh" : "79.7vh")};
    transition-duration: 1.2s;
    width: 4px;
    right: 0;
    left: 0;
    top: 0;
  }
`;
const CollapseButton = styled.button`
  background-color: #ff8080;
  cursor: pointer;
  color: white;
  transition-duration: 1.2s;
  height: 20px;
  margin: 10px;
  border-radius: 1em;
  &:hover {
    background-color: #e60000;
  }
`;

const Image = styled.img`
  border-radius: 8px;
  padding: 10px;
  margin-right: auto;
  width: 200px;
  transform: perspective(400px) rotate3d(1, 1, 0, 0deg);
  transition-duration: 1.2s;

  &:hover {
    cursor: progress;
    transform: perspective(400px) rotate3d(1, 1, 0, 180deg);
  }
`;

const Image2 = styled.img`
  border-radius: 8px;
  padding: 10px;
  margin-right: auto;
  width: 200px;
  transform: perspective(400px) rotateX(0deg);
  transition-duration: 1.2s;

  &:hover {
    cursor: progress;
    transform: perspective(400px) rotateX(360deg);
  }
`;

const Image3 = styled.img`
  border-radius: 8px;
  padding: 10px;
  margin-right: auto;
  width: 200px;
  transform: rotate(0deg);
  transition-duration: 1.2s;

  &:hover {
    cursor: progress;
    transform: rotate(360deg);
  }
`;

const ComponentB = props => {
  console.log(props, "this is the props from compB");
  if (props.showB) {
    return (
      <SecondComponentContainer show={props.showA}>
        <Image src={batman} />
        <Image2 src={flash} />
        <Image3 src={superman} />
        <CollapseButton onClick={() => props.CollapseClicked()}>
          X
        </CollapseButton>
      </SecondComponentContainer>
    );
  } else {
    return null;
  }
};

ComponentB.defaultProps = {
  showB: true
};

export default ComponentB;
