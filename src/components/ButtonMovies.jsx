import React from "react";
import { Button } from "../styles/ButtonStyled";

const ButtonMovies = (props) => {
  return (
    <Button
      className={`btn__filled ${props.className}`}
      onClick={props.nClick ? () => props.onClick() : null}
    >
      {props.children}
    </Button>
  );
};

export const ButtonMoviesOut = (props) => {
  return (
    <Button
      className={`btn__outlined ${props.className}`}
      onClick={props.nClick ? () => props.onClick() : null}
    >
      {props.children}
    </Button>
  );
};

export default ButtonMovies;
